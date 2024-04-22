import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";

const env = loadEnv(mode, process.cwd(), "");


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
