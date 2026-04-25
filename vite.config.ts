import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',

  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5173')
  },

  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5173')
  },

  build: {
    // Modern browsers only — smaller bundles, no legacy polyfills
    target: 'es2020',

    // Esbuild minifier (default, but explicit)
    minify: 'esbuild',

    // Inline assets under 4KB as base64 (saves HTTP requests)
    assetsInlineLimit: 4096,

    // Split CSS per chunk so initial load is smaller
    cssCodeSplit: true,

    // Don't ship sourcemaps to production
    sourcemap: false,

    // Warn if any chunk exceeds 500KB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Split vendor code into separate cacheable chunks
        // React rarely changes — users cache it across deploys
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          // Add more here as the app grows, e.g.:
          // 'router': ['react-router-dom'],
          // 'helmet': ['react-helmet-async'],
        },

        // Stable hashed filenames for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
