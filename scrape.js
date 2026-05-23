const https = require("https");

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location.startsWith("http")
          ? res.headers.location
          : `https://db4z7y8pmv8ef3.myportfolio.com${res.headers.location}`;
        return fetchPage(loc).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    });
  });
}

const PROJECTS = [
  "institucional",
  "festival",
  "kalainne-professional",
  "jfilhos-construtora",
  "clinica-e-laboratorio-check-up",
  "tecnologia",
  "esporte",
  "educacao",
  "saude-ocular",
];

async function main() {
  for (const slug of PROJECTS) {
    const url = `https://db4z7y8pmv8ef3.myportfolio.com/${slug}`;
    console.log(`\n========== ${slug.toUpperCase()} ==========`);
    try {
      const html = await fetchPage(url);

      // Title
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      console.log("TITLE:", titleMatch ? titleMatch[1] : "N/A");

      // Images (highest res — pick largest dimension suffix)
      const imgs = [...html.matchAll(/https:\/\/cdn\.myportfolio\.com\/[^"'\s)>]+/g)]
        .map((m) => m[0])
        .filter((u) => u.includes(".jpeg") || u.includes(".jpg") || u.includes(".png"));
      // Group by image ID and pick highest res
      const imageMap = {};
      for (const img of imgs) {
        const idMatch = img.match(/([a-f0-9-]{36})/);
        if (idMatch) {
          const id = idMatch[1];
          if (!imageMap[id]) imageMap[id] = [];
          imageMap[id].push(img);
        }
      }
      console.log("IMAGES:");
      for (const [id, urls] of Object.entries(imageMap)) {
        // Pick the URL with the largest dimension number
        const best = urls.sort((a, b) => {
          const aNum = Math.max(...(a.match(/x(\d+)\./g) || ["x0."]).map((n) => parseInt(n.slice(1))));
          const bNum = Math.max(...(b.match(/x(\d+)\./g) || ["x0."]).map((n) => parseInt(n.slice(1))));
          return bNum - aNum;
        })[0];
        console.log(`  ${best}`);
      }

      // Videos (YouTube, Vimeo, MP4)
      const vids = [
        ...html.matchAll(/https?:\/\/(?:www\.)?(?:youtube\.com\/embed|youtu\.be|player\.vimeo\.com\/video)\/[^"'\s>]+/g),
      ].map((m) => m[0]);
      const mp4s = [...html.matchAll(/https?:\/\/[^"'\s>]+\.mp4/g)].map((m) => m[0]);
      if (vids.length || mp4s.length) {
        console.log("VIDEOS:", [...vids, ...mp4s]);
      }

      // Text content (descriptions, module text)
      const texts = [...html.matchAll(/class="[^"]*module-text[^"]*"[^>]*>([^<]+)/g)]
        .map((m) => m[1].trim())
        .filter((t) => t.length > 10);
      if (texts.length) {
        console.log("TEXT:", texts.join(" | "));
      }
    } catch (err) {
      console.log("ERROR:", err.message);
    }
  }
}

main();
