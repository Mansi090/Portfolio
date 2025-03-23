import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allow external access (needed for Render)
    port: process.env.PORT || 4173, // Use Render-assigned port
    strictPort: true,  // Ensure the exact port is used
  },
  preview: {
    port: process.env.PORT || 4173, // Ensure preview uses Render's port
    host: "0.0.0.0",
  }
});
