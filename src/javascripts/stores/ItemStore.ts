import { action, decorate, observable } from 'mobx'

export type ItemParams = {
  id: number
  cover: string
  track: string
  artist: string
  collection: string
  trackPrice: string
  collectionPrice: string
  previewUrl: string
}

export class ItemStore {
  id: number
  cover: string
  track: string
  artist: string
  collection: string
  trackPrice: string
  collectionPrice: string
  previewUrl: string
  isPlaying = false

  constructor(item: ItemParams) {
    this.id = item.id
    this.cover = item.cover
    this.track = item.track
    this.artist = item.artist
    this.collection = item.collection
    this.trackPrice = item.trackPrice
    this.collectionPrice = item.collectionPrice
    this.previewUrl = item.previewUrl
  }

  togglePlay = () => {
    this.isPlaying = !this.isPlaying
  }
}

decorate(ItemStore, {
  isPlaying: observable.ref,
  togglePlay: action,
})
