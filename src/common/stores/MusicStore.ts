import { action, computed, decorate, observable } from 'mobx'
import { ItemStore } from './ItemStore'

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

export type ItemMap = Map<number, ItemStore>

const INITIAL_TRACK_ID = -1
const noop = () => {
  ''
}

export class MusicStore {
  term = ''
  attribute = ''
  itemMap: ItemMap = new Map()
  selectedTrackId = INITIAL_TRACK_ID

  get items(): ItemStore[] {
    return Array.from(this.itemMap.values())
  }

  setItems = (items: ItemStore[]) => {
    this.itemMap.clear()
    for (const item of items) {
      this.itemMap.set(item.id, item)
    }
  }

  setTerm = (term: string) => {
    this.term = term
  }

  setAttribute = (attribute: string) => {
    this.attribute = attribute
  }

  setTrackId = (trackId: number) => {
    this.selectedTrackId = trackId
  }

  currentTrack = (): { id: number; togglePlay: () => void } => {
    const itemStore = this.itemMap.get(this.selectedTrackId)
    if (!itemStore) return { id: INITIAL_TRACK_ID, togglePlay: noop }
    return itemStore
  }
}

decorate(MusicStore, {
  term: observable.ref,
  attribute: observable.ref,
  itemMap: observable.shallow,
  selectedTrackId: observable.ref,
  setItems: action,
  setTerm: action,
  setAttribute: action,
  setTrackId: action,
  items: computed,
})
