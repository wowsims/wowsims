import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import DynamicPublicDirectory from "vite-multiple-assets";

import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    DynamicPublicDirectory(["../assets"], {
      ssr: false,
    }),
  ],
  assetsInclude: ["@wowsims/assets/**/*"],
  
});
