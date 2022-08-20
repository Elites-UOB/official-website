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
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6',
        p: 'P'
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
        "dark": "#181818",
        "light": "#ffffff",
        "mid": "#B7B7B7",
        "error": "#FF493E",
        "warning": "#FFCC42",
        "success": "#38CC76",
      }
    },
    safelist: [
      ...(() => {
        let colors = ['dark', 'light', 'mid', 'error', 'warning', 'success']
        return [
          ...colors.map(color => `text-${color}`),
          ...colors.map(color => `border-${color}`),
          ...colors.map(color => `bg-${color}`),
        ]
      })(),
    ]
  }
})
