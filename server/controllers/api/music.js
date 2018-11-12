const router = require('express').Router()
const { apiClient } = require('../../utils')

function createItems(items) {
  return items.map((item) => {
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
}

exports.serach = async (req, res, next) => {
  try {
    const { query, category } = req.body
    const data = await apiClient
      .get(`https://itunes.apple.com/search?term=${query}&media=music&attribute=${category}&country=jp&lang=ja_jp&limit=1`)
      .catch(next)
    const items = createItems(data.results)
    res.status(200).json(items)
  } catch(err) {
    next(err)
  }
}

