import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "PayFlow",
        short_name: "PayFlow",
        description: "Offline Payment Simulator",
        theme_color: "#172554",
        background_color: "#172554",
        display: "standalone",
        start_url: "/",
      },
    }),
  ],
});