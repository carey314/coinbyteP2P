import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    // host: '0.0.0.0',
    proxy: {
      //配置自定义代理规则
      // 字符串简写写法
      '/api': {
        // target: 'https://coinbyte.exchange/',
        target: 'http://localhost',
        changeOrigin: true, //是否跨域
        // changeOrigin: false, //是否跨域
        // rewrite: path => path.replace(/^\/api/, '')
      },
      "/adminapi": {
        // target: "http://adminapi.coinbyte.com.au:88/api/",
        target: "https://localhost:3001/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/adminapi/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
