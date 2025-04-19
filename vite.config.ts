import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  preview: {
    port: 5575,
    strictPort: true,
  },
  server: {
    port: 5575,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5575",
  },
});
