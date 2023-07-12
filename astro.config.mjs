import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // usar react para solo renderizado condicional o elementos que necesiten actualización en el dom con poca carga
    react()
  ]
});