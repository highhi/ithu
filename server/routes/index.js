const router = require('express').Router()
const { apiClient } = require('../utils')

router.post('/', async (req, res) => {
  const { query, category } = req.body
  const data = await apiClient
    .get(`https://itunes.apple.com/search?term=${query}&media=music&attribute=${category}&country=jp&lang=ja_jp&limit=1`)
    .catch((err) => {
      throw err
    })

  const items = data.results.map((item) => {
    return {
      id: item.trackId,
      artist: item.artistName,
      cover: item.artistViewUrl,
      track: item.trackName,
      collection: item.collectionName,
      trackPrice: item.trackPrice,
      collectionPrice: item.collectionPrice,
    }
  })

  res.status(200).json(items)
})

module.exports = router
