import { Stores } from '../stores'
import { ItemStore, ItemStoreParams } from '../stores/ItemStore'
import { apiClient } from '../utils'

type ConditionPrams = {
  query: string
  category: string
}

export class Action {
  private readonly stores: Stores

  constructor(stores: Stores) {
    this.stores = stores
  }

  changeTerm = (query: string) => {
    this.stores.conditionStore.setTerm(query)
  }

  changeAttribute = (category: string) => {
    this.stores.conditionStore.setAttribute(category)
  }

  submitCondition = async (params: ConditionPrams) => {
    const data = await apiClient
      .post('', {
        query: encodeURIComponent(params.query),
        category: encodeURIComponent(params.category),
      })
      .catch((err) => {
        throw err
      })

    this.stores.listStore.setItems(this.createItems(data))
  }

  private createItems = (items: ItemStoreParams[]): ItemStore[] => {
    return items.map((item) => {
      return new ItemStore({
        id: item.id,
        cover: item.cover,
        track: item.track,
        artist: item.artist,
        collection: item.collection,
        trackPrice: item.trackPrice,
        collectionPrice: item.collectionPrice,
      })
    })
  }
}
