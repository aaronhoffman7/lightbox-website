import { defineConfig } from "@previewjs/config";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  wrapper: { path: "__previewjs__/Wrapper.tsx", componentName: "Wrapper" },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "next/image": resolve(__dirname, "__previewjs__/mocks/next-image.tsx"),
        "next/link": resolve(__dirname, "__previewjs__/mocks/next-link.tsx"),
        "next/navigation": resolve(__dirname, "__previewjs__/mocks/next-navigation.ts"),
      },
    },
  },
});
