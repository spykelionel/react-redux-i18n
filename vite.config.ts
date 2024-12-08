/// <reference types="vitest" />
// / <reference types="vitest/client" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/app": path.resolve(__dirname, "./src/app"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/providers": path.resolve(__dirname, "./src/providers"),
      "@/router": path.resolve(__dirname, "./src/router"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/store": path.resolve(__dirname, "./src/store"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./src/test/vitest.setup.ts"],
    environment: "jsdom",
    css: true,
  },
  server: {
    host: "0.0.0.0",
    port: 4444,
    strictPort: true, // Fail if the port is already in use
    watch: {
      usePolling: true, // Ensure file changes are detected in Docker environments
    },
  },
});
