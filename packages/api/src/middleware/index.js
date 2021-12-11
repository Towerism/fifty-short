const { nuxtRenderer } = require('@fifty-short/client/nuxt-renderer')
const { redirect } = require('./redirect')

module.exports = function (app) {
  app.use(redirect)
  app.use(nuxtRenderer)
}
