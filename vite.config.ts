import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ensure process.env works
import * as process from "process";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: ["portfolio-a9l3.onrender.com"],
    port: Number(process.env.PORT) || 4173,
  }
});
