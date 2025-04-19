import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
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
