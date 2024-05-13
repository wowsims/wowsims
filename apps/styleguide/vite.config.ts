import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import DynamicPublicDirectory from "vite-multiple-assets";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    DynamicPublicDirectory(["../../packages/assets"], {
      ssr: false,
    }),
  ],
});
