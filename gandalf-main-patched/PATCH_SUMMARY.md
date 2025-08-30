# Patch Summary (gandalf)
- engines pinned to Node 20.x; packageManager set to pnpm@10.4.0
- preinstall echo added; vercel.json added to force Corepack + PNPM and echo versions
- scripts/fetch-workers.mjs added; wired in postinstall
- next.config headers (COOP/COEP/CORP) for /workers/* ensured
- GLB URLs normalized and /public/assets/glb proxies created
- Next step: generate & commit pnpm-lock.yaml locally with PNPM 10.4.0
