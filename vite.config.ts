import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        afterDark: 'after-dark-dwellings/index.html',
        afterDarkArticle: 'after-dark-dwellings/7-ways-to-make-a-dark-room-feel-expensive/index.html',
        afterDarkFinds: 'after-dark-dwellings/curated-finds/index.html',
        afterDarkBathroom: 'after-dark-dwellings/guides/dark-bathroom-that-feels-expensive/index.html',
        afterDarkOffice: 'after-dark-dwellings/guides/dark-home-office-without-feeling-closed-in/index.html',
        afterDarkSmallSpace: 'after-dark-dwellings/guides/small-dark-spaces-that-still-feel-open/index.html',
        afterDarkLivingRoom: 'after-dark-dwellings/guides/dark-living-room-feel-expensive/index.html',
        afterDarkBlackStone: 'after-dark-dwellings/guides/black-and-stone-interiors/index.html',
        afterDarkEntryway: 'after-dark-dwellings/guides/dark-entryway-lighting-mirrors-contrast/index.html'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
