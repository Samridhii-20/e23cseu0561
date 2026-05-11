import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target:
          "http://4.224.186.213/evaluation-service",
        changeOrigin: true,
        secure: false,

        rewrite: (path) =>
          path.replace(/^\/api/, ""),
      },
    },
  },
});