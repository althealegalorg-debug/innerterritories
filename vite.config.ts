// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static-site build targeting GitHub Pages.
// Nitro's `github_pages` preset prerenders all routes, emits a SPA-friendly
// 404.html fallback, and writes a `.nojekyll` file so hashed asset folders
// (e.g. `_assets/`) are served correctly by Pages.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "github_pages",
    output: {
      dir: ".output",
      publicDir: ".output/public",
    },
  },
});
