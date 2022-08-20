import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],

  content: {
    highlight: {
      // preload
       theme: 'one-dark-pro'
    },
    markdown: {
      tags: {
        code: 'Code',
        h2: 'H2'
      }
    }
  },


  unocss: {
    autoImport: true,
    uno: true,
    icons: true,
    attributify: {
      ignoreAttributes: ['label'],
    },
    typography: true,
    webFonts: {
      provider: 'google',
      fonts: {
        "sans": ['Cairo:200,300,400,500,600,700,800,900'],
      },
    },
    preflights: [
      {
        getCSS: ({ theme }) => `
          * {
            font-family: ${theme['fontFamily']['sans']};
          }

          body {
            background-color: #000;
            color: #B7B7B7;
            padding: 0;
            margin: 0;
            direction: rtl;
          }


          
        `
      }
    ],
    theme: {
      height: {
        "main-content": "calc(100vh - 11rem)",
      },
      colors: {
        "dark": "#000000",
        "light": "#ffffff",
        "mid": "#B7B7B7",
        "error": "#FF493E",
        "warning": "#FFCC42",
        "success": "#38CC76",
      }
    },
  }
})
