import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    //@ts-ignore
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "index.css",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
