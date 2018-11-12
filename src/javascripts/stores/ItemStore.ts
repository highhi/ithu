export type ItemStoreParams = {
  id: number
  cover: string
  track: string
  artist: string
  collection: string
  trackPrice: string
  collectionPrice: string
}

export class ItemStore {
  id: number
  cover = ''
  track = ''
  artist = ''
  collection = ''
  trackPrice = ''
  collectionPrice = ''

  constructor(params: ItemStoreParams) {
    this.id = params.id
    this.cover = params.cover
    this.track = params.track
    this.artist = params.artist
    this.collection = params.collection
    this.trackPrice = params.trackPrice
    this.collectionPrice = params.collectionPrice
  }
}
