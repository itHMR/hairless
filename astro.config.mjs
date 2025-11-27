// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  //output: 'static', // 👈 MUY IMPORTANTE: le dice a Astro que genere archivos HTML estáticos
  site: 'https://hairlesstj.com', // cambia por tu dominio real
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
