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

const INITIAL_TRACK_ID = -1

export class MusicStore {
  term = ''
  attribute = ''
  items: ItemParams[] = []
  trackId = INITIAL_TRACK_ID
  previewUrl = ''

  setTerm = (term: string) => {
    this.term = term
  }

  setAttribute = (attribute: string) => {
    this.attribute = attribute
  }

  setItems = (items: ItemParams[]) => {
    this.items = items
  }

  setTrack = (previewUrl: string, trackId: number) => {
    if (this.trackId === trackId) {
      this.trackId = INITIAL_TRACK_ID
      this.previewUrl = ''
      return
    }

    this.trackId = trackId
    this.previewUrl = previewUrl
  }
}

decorate(MusicStore, {
  term: observable.ref,
  attribute: observable.ref,
  items: observable.ref,
  trackId: observable.ref,
  previewUrl: observable.ref,
  setTerm: action,
  setAttribute: action,
  setItems: action,
  setTrack: action,
})
