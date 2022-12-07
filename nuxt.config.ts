// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    // '@nuxtjs/tailwindcss',
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@unocss/nuxt",
    "@nuxtjs/sitemap",
  ],
  sitemap: {
    hostname: 'https://csitelites.tech',
    lastmod: '2017-06-30',
    sitemaps: [
      {
        path: '/sitemap-foo.xml',
        routes: ['foo/1', 'foo/2'],
        gzip: true
      },
      {
        path: '/folder/sitemap-bar.xml',
        routes: ['bar/1', 'bar/2'],
        exclude: ['/**']
      }
    ],
  },
  
  css: ["@/assets/scss/main.scss"],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: "vitesse-dark",
    },
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    // icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],

    webFonts: {
      fonts: {
        tajawal: [
          {
            name: "Tajawal",
            weights: ["200", "300", "400", "500", "600", "700", "800"],
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    },

    theme: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0F0F11",
        light: "#F3F3F3",
        mid: "#B7B7B7",
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
