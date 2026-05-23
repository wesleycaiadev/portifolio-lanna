precision mediump float;

uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform float uProgress;
uniform float uTime;
uniform vec2 uMouse;
uniform float uIntensity;

varying vec2 vUv;

// Inline simplex noise (evita problemas de include em bundlers)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m * m * m;
  vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x_) - 0.5;
  vec3 ox = floor(x_ + 0.5);
  vec3 a0 = x_ - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;

  // Distorção baseada em noise + progresso do hover
  float noiseVal = snoise(uv * 3.0 + uTime * 0.3) * uIntensity * uProgress;
  float noiseVal2 = snoise(uv * 5.0 - uTime * 0.2) * uIntensity * uProgress * 0.5;

  // Distorção radial a partir do mouse
  vec2 mouseDir = uv - uMouse;
  float mouseDist = length(mouseDir);
  float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * uProgress * 0.03;

  vec2 distortedUv = uv + vec2(noiseVal, noiseVal2) * 0.05 + mouseDir * mouseInfluence;

  // Sample das duas texturas com UVs distorcidas
  vec4 tex1 = texture2D(uTexture1, distortedUv);
  vec4 tex2 = texture2D(uTexture2, distortedUv);

  // Mix suave entre imagem estática e vídeo
  float mixFactor = smoothstep(0.0, 1.0, uProgress);
  vec4 finalColor = mix(tex1, tex2, mixFactor);

  // Adiciona leve aberração cromática na transição
  float aberration = uProgress * uIntensity * 0.008;
  float r = texture2D(uTexture2, distortedUv + vec2(aberration, 0.0)).r;
  float b = texture2D(uTexture2, distortedUv - vec2(aberration, 0.0)).b;
  finalColor.r = mix(finalColor.r, r, mixFactor * 0.5);
  finalColor.b = mix(finalColor.b, b, mixFactor * 0.5);

  gl_FragColor = finalColor;
}
