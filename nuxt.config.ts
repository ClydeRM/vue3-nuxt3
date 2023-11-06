// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    // Application metadata
    head: {
      title: "Vue Practice",
      meta: [
        {
          name: "description",
          content: "Everything about Nuxt3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY
  }
});
