const { nuxtRenderer } = require('@fifty-short/client/nuxt-renderer')

module.exports = function (app) {
  app.use(nuxtRenderer)
}

