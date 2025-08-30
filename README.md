# Atucha II — Production 3D Guided Tour (Next 15 + React 19)

Production-grade scaffold for a guided 3D tour of Atucha II (Central Nuclear Néstor Kirchner). Two hero areas: Reactor Core (PHWR) and Main Control Room (MCR). Exterior + 1 km surroundings. Guided Tour (subtitles + OpenAI TTS) and Free Explore. EN/ES localization.

## Runbook
1. **Install**
   ```bash
   pnpm i
   ```
2. **Configure**
   ```bash
   cp .env.example .env.local
   # set OPENAI_API_KEY
   ```
3. **Develop**
   ```bash
   pnpm dev
   ```
4. **Build & Start**
   ```bash
   pnpm build && pnpm start
   ```
5. **Deploy (Vercel)**
   - Runtime: Node 22.x
   - Package manager: PNPM 10
   - Ensure public/workers/* are cached aggressively (handled by next.config headers).

## Notes
- Includes tiny proxy GLBs in `assets/glb/*` to avoid 404s; replace with real optimized assets later.
- `scripts/fetch-workers.mjs` downloads DRACO/KTX2/Meshopt workers for three r179.
- `scripts/version-lock-report.mjs` enforces exact versions (no ^ ~).

## Sources
See [/research/sources.md](./research/sources.md). Hotspots reference source IDs.


## Crisp MCR Labels (MSDF fonts)
For razor-sharp panel labels when zoomed, drop a font into `public/assets/fonts/` (e.g., `Inter-Regular.woff`) and update `<Text>` to pass `font="/assets/fonts/Inter-Regular.woff"` along with `sdfGlyphSize={64}` and `glyphGeometryDetail={64}`. A larger `sdfGlyphSize` yields crisper edges at close zoom with a small GPU cost.
