import { action, decorate, observable } from 'mobx'
import { ItemStoreParams } from './ItemStore'

export class ListStore {
  items: ItemStoreParams[] = []

  setItems = (items: ItemStoreParams[]) => {
    this.items = items
  }
}

decorate(ListStore, {
  items: observable.ref,
  setItems: action,
})
