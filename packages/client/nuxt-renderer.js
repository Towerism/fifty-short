const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config')
const isTestEnv = process.env.NODE_ENV === 'test'

const nuxt = new Nuxt(nuxtConfig)

if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

const nuxtRenderer = (req, res, next) => {
  const accepts = req.accepts('html', 'json')
  console.log('accepts', accepts)
  if (accepts === 'json') { return next() }
  if (!isTestEnv) { nuxt.render(req, res, next) }
}

module.exports = { nuxtRenderer }
