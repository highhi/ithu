const apiClient = require('../../utils/apiClient')
const cacheStore = require('../../utils/cacheStore')

exports.serach = async (req, res, next) => {
  try {
    const query = req.params.query
    const category = req.params.category === 'all' ? '' : req.params.category
    const key = createKey(query, category)
    const cache = await cacheStore.get(key)

    if (cache) {
      return res.status(200).json(createItems(JSON.parse(cache)))
    }

    const { results } = await apiClient.get(createEndPoint(query, category))
    cacheStore.setex(key, 300, JSON.stringify(results))
    res.status(200).json(createItems(results))
  } catch(err) {
    next(err)
  }
}

function createKey(query, category) {
  return `music/${query}/${category}`.trim().toLowerCase()
}

function createEndPoint(query, category) {
  return `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&attribute=${encodeURIComponent(category)}&country=jp&lang=ja_jp&limit=10`
}

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
