import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        salon: resolve(__dirname, "salon/index.html"),
      },
    },
  },
});
