const router = require('express').Router()
const apiRouter = require('./api')
const assets = require('../manifest.json')

router.use('/api', apiRouter)
router.use('*', (_, res) => {
  res.status(200).render('index', { assets })
})

module.exports = router

