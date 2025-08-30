import fs from "node:fs";
import path from "node:path";
import process from "node:process";

function fail(msg) { console.error(msg); process.exit(1); }
const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8"));

const BAD = /[~^*x]/;
for (const [section, deps] of Object.entries({dependencies: pkg.dependencies, devDependencies: pkg.devDependencies})) {
  if (!deps) continue;
  for (const [name, ver] of Object.entries(deps)) {
    if (BAD.test(ver)) fail(`[version-lock] ${section} has an invalid range for ${name}: ${ver}`);
  }
}

// Peer sanity checks (lightweight)
const expect = {
  react: "19.1.1",
  "react-dom": "19.1.1",
  three: "0.179.1"
};
for (const [dep, ver] of Object.entries(expect)) {
  if ((pkg.dependencies?.[dep] ?? pkg.devDependencies?.[dep]) !== ver) {
    fail(`[version-lock] Expected ${dep}@${ver} declared exactly.`);
  }
}

console.log("[version-lock] Declared versions OK.");
process.exit(0);
