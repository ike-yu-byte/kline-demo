import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "./",
  plugins: [viteSingleFile()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    cors: true,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
