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
  starred = false

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

  togglePlaying = () => {
    this.isPlaying = !this.isPlaying
  }

  changeStarred = (bool: boolean) => {
    this.starred = bool
  }
}

decorate(ItemStore, {
  isPlaying: observable.ref,
  starred: observable.ref,
  togglePlaying: action,
  changeStarred: action,
})
