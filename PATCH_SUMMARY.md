# Patch Summary (Option A applied: move GLBs to /public)
## Code changes
- Wrap app with `I18nProvider` in `app/layout.tsx`
- Hotspot now uses `<Html>` from `@react-three/drei` so markers anchor in 3D
- Added `Cross-Origin-Resource-Policy: same-origin` header in `next.config`
- Added `next-env.d.ts`
- Added `playwright.config.ts` minimal
- Updated `package.json`:
  - `"engines": { "node": "20.x" }`
  - `"packageManager": "pnpm@10.4.0"`
  - `devDependencies["@playwright/test"] = "1.55.0"`
- Added `vercel.json` to force Corepack+PNPM and sane install flags

## Next steps
- Commit & push the changes.
- In Vercel settings: Node.js Version = **20.x**, Package Manager = **PNPM**.
- Locally run `corepack enable && corepack prepare pnpm@10.4.0 --activate && pnpm i` once, commit the generated `pnpm-lock.yaml`.
