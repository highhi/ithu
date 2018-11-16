import { stores } from '../stores'
import { ItemStore, ItemStoreParams } from '../stores/ItemStore'
import { apiClient } from '../utils'

type ConditionParams = {
  query: string
  category: string
}

export const action = {
  changeTerm(query: string) {
    stores.conditionStore.setTerm(query)
  },

  changeAttribute(category: string) {
    stores.conditionStore.setAttribute(category)
  },

  async submitCondition(params: ConditionParams) {
    try {
      const { query, category } = params
      const data = await apiClient.get(`/music/${encodeURIComponent(query)}/${encodeURIComponent(category)}`)
      stores.listStore.setItems(createItems(data))
    } catch (err) {
      console.error(err)
    }
  },
}

function createItems(items: ItemStoreParams[]): ItemStore[] {
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

// export class Action {
//   private readonly stores: Stores

//   constructor(stores: Stores) {
//     this.stores = stores
//   }

//   changeTerm = (query: string) => {
//     this.stores.conditionStore.setTerm(query)
//   }

//   changeAttribute = (category: string) => {
//     this.stores.conditionStore.setAttribute(category)
//   }

//   submitCondition = async (params: ConditionPrams) => {
//     const data = await apiClient
//       .post('/music', {
//         query: encodeURIComponent(params.query),
//         category: encodeURIComponent(params.category),
//       })
//       .catch((err) => {
//         throw err
//       })

//     this.stores.listStore.setItems(this.createItems(data))
//   }

//   private createItems = (items: ItemStoreParams[]): ItemStore[] => {
//     return items.map((item) => {
//       return new ItemStore({
//         id: item.id,
//         cover: item.cover,
//         track: item.track,
//         artist: item.artist,
//         collection: item.collection,
//         trackPrice: item.trackPrice,
//         collectionPrice: item.collectionPrice,
//       })
//     })
//   }
// }
