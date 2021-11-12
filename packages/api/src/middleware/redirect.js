const { NotFound } = require('@feathersjs/errors');

const redirect = async (req, res, next) => {
  const matchesShortenedUrl = /^\/go\/([a-zA-Z0-9]{6})$/.test(req.originalUrl);
  if (matchesShortenedUrl) {
    const app = require('../app')
    const urls = app.service('urls')
    const matches = req.originalUrl.match(/^\/go\/([a-zA-Z0-9]{6})/)
    const shortened = matches[1]
    try {
      const { url } = await urls.get(shortened)
      if (url) {
        return res.redirect(url)
      }
    } catch (error) {
      return next(error)
    }
  }
  return next()
}


module.exports = { redirect }