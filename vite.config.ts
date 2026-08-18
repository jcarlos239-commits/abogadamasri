import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      input: {
        index:                       path.resolve(__dirname, 'index.html'),
        'sobre-marinela-masri':      path.resolve(__dirname, 'sobre-marinela-masri/index.html'),
        'servicios':                 path.resolve(__dirname, 'servicios/index.html'),
        'derecho-civil':             path.resolve(__dirname, 'derecho-civil/index.html'),
        'derecho-mercantil':      path.resolve(__dirname, 'derecho-mercantil/index.html'),
        'derecho-laboral':        path.resolve(__dirname, 'derecho-laboral/index.html'),
        'derecho-familia-divorcios': path.resolve(__dirname, 'derecho-familia-divorcios/index.html'),
        'bienes-inmuebles':       path.resolve(__dirname, 'bienes-inmuebles/index.html'),
        'contratos-documentos':   path.resolve(__dirname, 'contratos-documentos/index.html'),
        'herencias-sucesiones':   path.resolve(__dirname, 'derecho-civil/herencias-sucesiones/index.html'),
        'divorcio':               path.resolve(__dirname, 'derecho-familia-divorcios/divorcio/index.html'),
        'custodia-lopnna':        path.resolve(__dirname, 'derecho-familia-divorcios/custodia-lopnna/index.html'),
        'poder-notarial':         path.resolve(__dirname, 'contratos-documentos/poder-notarial/index.html'),
        'condominios':            path.resolve(__dirname, 'bienes-inmuebles/condominios/index.html'),
        'legalizacion-apostilla': path.resolve(__dirname, 'derecho-civil/legalizacion-apostilla/index.html'),
        'registro-mercantil':     path.resolve(__dirname, 'derecho-mercantil/registro-mercantil/index.html'),
        'blog':                   path.resolve(__dirname, 'blog/index.html'),
      },
    },
  },
})
