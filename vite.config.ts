import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import reactSvgPlugin from "vite-plugin-react-svg";
import * as path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "stasts.html",
          gzipSize: true,
        }),
      ],
    },
  },
  server: {
    host: "localhost",
    port: 80,
  },
  publicDir: "public",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [preact(), reactSvgPlugin(), viteCompression()],
});
