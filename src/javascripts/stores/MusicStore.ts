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
    this.itemMap = normalize(items)
  }

  clearItems = () => {
    this.itemMap.clear()
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

function normalize(items: ItemStore[]): ItemMap {
  const newItems = items.map<[number, ItemStore]>((item) => [item.id, item])
  return new Map(newItems)
}

decorate(MusicStore, {
  term: observable.ref,
  attribute: observable.ref,
  itemMap: observable.ref,
  selectedTrackId: observable.ref,
  setItems: action,
  clearItems: action,
  setTerm: action,
  setAttribute: action,
  setTrackId: action,
  items: computed,
})
