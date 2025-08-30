import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const ROOT = process.cwd();
const out = {
  ktx2: path.join(ROOT, "public/workers/ktx2/"),
  draco: path.join(ROOT, "public/workers/draco/"),
  meshopt: path.join(ROOT, "public/workers/meshopt/"),
};
for (const d of Object.values(out)) fs.mkdirSync(d, { recursive: true });

const base = "https://unpkg.com/three@0.179.1/examples/jsm/libs";
const files = [
  { url: `${base}/basis/ktx2dec.wasm`, dest: path.join(out.ktx2, "ktx2dec.wasm") },
  { url: `${base}/basis/basis_transcoder.js`, dest: path.join(out.ktx2, "basis_transcoder.js") },
  { url: `${base}/basis/basis_transcoder.wasm`, dest: path.join(out.ktx2, "basis_transcoder.wasm") },
  { url: `${base}/draco/draco_decoder.js`, dest: path.join(out.draco, "draco_decoder.js") },
  { url: `${base}/draco/draco_decoder.wasm`, dest: path.join(out.draco, "draco_decoder.wasm") },
  { url: `${base}/meshopt/meshopt_decoder.module.js`, dest: path.join(out.meshopt, "meshopt_decoder.module.js") },
];

function dl({url, dest}) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode !== 200) { reject(new Error(`GET ${url} -> ${res.statusCode}`)); return; }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

for (const f of files) {
  try { await dl(f); console.log("[fetch-workers] fetched", f.dest); }
  catch (e) { console.warn("[fetch-workers] failed", f.url, e?.message); }
}
