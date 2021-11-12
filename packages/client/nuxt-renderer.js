const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config')
const isTestEnv = process.env.NODE_ENV === 'test'

const nuxt = new Nuxt(nuxtConfig)

if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

const nuxtRenderer = async (req, res, next) => {
  const accepts = req.accepts('html', 'json')
  if (accepts === 'json') { return next() }
  if (!isTestEnv) {
    return nuxt.render(req, res, next)
  }
}

module.exports = { 
  nuxtRenderer
}
