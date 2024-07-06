// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Page headers
  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],

  routeRules: {
    // Prerender all recipes pages
    '/recipes/*': { prerender: true },
  }
})
