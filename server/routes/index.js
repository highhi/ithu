const router = require('express').Router()
const fetch = require('isomorphic-unfetch')

router.get('/', async (req, res) => {
  const result = await fetch('https://itunes.apple.com/search?term=twitter&media=software&entity=software&country=jp&lang=ja_jp&limit=3')
  const json = await result.json()
  res.status(200).json(json)
})

module.exports = router
