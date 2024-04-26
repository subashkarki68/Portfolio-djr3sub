import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      assetsInclude: ["**/*.jpg"],
      outDir: "build",
    },
    plugins: [react()],
  };
});
