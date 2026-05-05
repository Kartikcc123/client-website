import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'pwa-192-v2.png', 'pwa-512-v2.png', 'pwa-512-maskable-v2.png', 'offline.html'],
      manifest: {
        name: "Academic Plus",
        short_name: "AcademicPlus",
        description: "Academic Plus — student & admin management",
        start_url: "/",
        display: "standalone",
        theme_color: "#0ea5e9",
        background_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192-v2.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512-v2.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512-maskable-v2.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        splash_screens: [
          { src: "/splash-640x1136.png", sizes: "640x1136", type: "image/png" },
          { src: "/splash-750x1334.png", sizes: "750x1334", type: "image/png" },
          { src: "/splash-1125x2436.png", sizes: "1125x2436", type: "image/png" }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'dynamic-cache-v1',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'dynamic-cache-v1',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true
      }
    })
  ],
  build: {
    target: 'es2018',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react'
            return 'vendor'
          }
        }
      }
    }
  }
})