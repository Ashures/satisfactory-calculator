import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // generates 'manifest.webmanifest' file on build
      manifest: {
        // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory)
        name: 'Satisfactory Raw Resource Calculator',
        short_name: 'Satisfactory Calculator',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // defining cached files formats
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    }),
  ],
});
