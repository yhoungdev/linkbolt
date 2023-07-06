import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as manifest from "./manifest.json";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
