import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],


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
        sans: ['Cairo:200,300,400,500,600,700,800,900'],
      },
    },
    preflights: [
      {
        getCSS: ({ theme }) => `
            * {
              padding: 0;
              margin: 0;
              font-family: ${theme['fontFamily']['sans']};
              direction: rtl;
            }

            body {
              overflow: hidden !important;
              background-color: #000;
            }
          `
      }
    ],
    theme: {
      height: {
        "main-content": "calc(100vh - 11rem)",
      },
    },
  }
})
