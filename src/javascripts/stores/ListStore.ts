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

export class ListStore {
  items: ItemParams[] = []

  setItems = (items: ItemParams[]) => {
    this.items = items
  }
}

decorate(ListStore, {
  items: observable.ref,
  setItems: action,
})
