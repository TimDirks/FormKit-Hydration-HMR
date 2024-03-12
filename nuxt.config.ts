// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    srcDir: 'src/',
    modules: ['@formkit/nuxt'],
    formkit: {
        autoImport: true,
    },
});
