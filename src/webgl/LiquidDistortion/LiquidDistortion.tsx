"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";

interface LiquidPlaneProps {
  imageUrl: string;
  videoUrl: string;
  isHovered: boolean;
  mousePos: { x: number; y: number };
}

function LiquidPlane({ imageUrl, videoUrl, isHovered, mousePos }: LiquidPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);
  const [imageTexture, setImageTexture] = useState<THREE.Texture | null>(null);
  const { viewport } = useThree();
  const progressRef = useRef(0);

  // Carrega a imagem
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setImageTexture(tex);
    });
  }, [imageUrl]);

  // Cria o vídeo + textura
  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    videoRef.current = video;

    const tex = new THREE.VideoTexture(video);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    setVideoTexture(tex);

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      tex.dispose();
    };
  }, [videoUrl]);

  // Play/pause conforme hover
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovered]);

  const uniforms = useMemo(
    () => ({
      uTexture1: { value: null as THREE.Texture | null },
      uTexture2: { value: null as THREE.Texture | null },
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uIntensity: { value: 1.0 },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) return;

    // Atualiza texturas
    if (imageTexture) materialRef.current.uniforms.uTexture1.value = imageTexture;
    if (videoTexture) materialRef.current.uniforms.uTexture2.value = videoTexture;

    // Lerp do progresso (hover transition)
    const targetProgress = isHovered ? 1 : 0;
    progressRef.current += (targetProgress - progressRef.current) * 0.05;
    materialRef.current.uniforms.uProgress.value = progressRef.current;

    // Time
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    // Mouse (normalizado 0-1)
    materialRef.current.uniforms.uMouse.value.set(mousePos.x, 1 - mousePos.y);
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

interface LiquidDistortionProps {
  imageUrl: string;
  videoUrl: string;
  isHovered: boolean;
  mousePos: { x: number; y: number };
}

export function LiquidDistortion({
  imageUrl,
  videoUrl,
  isHovered,
  mousePos,
}: LiquidDistortionProps) {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
    >
      <LiquidPlane
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        isHovered={isHovered}
        mousePos={mousePos}
      />
    </Canvas>
  );
}
