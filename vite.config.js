import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const repoName = 'bookmark-landing-page'; 

export default defineConfig({
  base: `/${repoName}/`, 
  
  plugins: [tailwindcss()],
});