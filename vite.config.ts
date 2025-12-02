import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  
  // 1. Chỉ đường cho Vite vào folder "client" để tìm index.html
  root: path.resolve(__dirname, "client"),

  build: {
    // 2. Build xong thì ném kết quả ra folder "dist" ở ngoài cùng
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});
