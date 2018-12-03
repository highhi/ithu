import { NextFunction, Request, Response } from 'express'
import apiClient from '../../utils/apiClient'
import cacheStore from '../../utils/cacheStore'

export async function search(req: Request, res: Response, next: NextFunction) {
  try {
    const { query, category = '' } = req.params
    const key = createKey(query, category)
    const cache = await cacheStore.get(key)

    if (cache) {
      return res.status(200).json(createItems(JSON.parse(cache)))
    }

    const { results } = await apiClient.get(createEndPoint(query, category))
    cacheStore.setex(key, 300, JSON.stringify(results))
    res.status(200).json(createItems(results))
  } catch (err) {
    return next(err)
  }
}

function createKey(query: string, category: string) {
  return `music/${query}/${category}`.trim().toLowerCase()
}

function createEndPoint(query: string, category: string) {
  return `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&attribute=${encodeURIComponent(
    category
  )}&country=jp&lang=ja_jp&limit=10`
}

function createItems(items: any) {
  return items.map((item: any) => {
    return {
      id: item.trackId,
      artist: item.artistName,
      cover: item.artworkUrl60,
      track: item.trackName,
      collection: item.collectionName,
      trackPrice: item.trackPrice,
      collectionPrice: item.collectionPrice,
      previewUrl: item.previewUrl,
    }
  })
}
