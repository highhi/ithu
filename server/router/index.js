const apiRouter = require('./api')
const assets = require('../manifest.json')

module.exports = (app) => {
  app.use('/favicon.ico', (_, res) => res.status(200).send());
  app.use('/api', apiRouter)
  app.use('*', (req, res) => {
    res.status(200).render('index', { assets, csrfToken: req.csrfToken() })
  })

  // errors
  app.use((err, _req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)
    res.status(403).send('Invalid CSRF Token')
  })
  
  app.use((err, _req, _res, next) => {
    console.error(err.stack);
    next(err)
  })
  
  app.use((err, req, res, next) => {
    if (req.xhr) {
      return res.status(err.status).send(err.message)
    }
    next(err)
  })
  
  app.use((err, _req, res, _next) => {
    res.status(err.status || 500).send(err.message)
  })
}

