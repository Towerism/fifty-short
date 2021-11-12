function prefixHttps(context) {
  // if the url doesn't start with https://, add it
  if (!context.data.url.startsWith('https://')) {
    context.data.url = `https://${context.data.url}`
  }
}

module.exports = { prefixHttps }