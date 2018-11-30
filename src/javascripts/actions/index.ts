import firebase from '../libs/firebase'
import { stores } from '../stores'
import { ItemStore } from '../stores/ItemStore'
import { ItemParams } from '../stores/MusicStore'
import { apiClient } from '../utils'

type ConditionParams = {
  query: string
  category: string
}

export const action = {
  changeTerm(query: string) {
    stores.musicStore.setTerm(query)
  },

  changeAttribute(category: string) {
    stores.musicStore.setAttribute(category)
  },

  // TODO: 条件分岐をもうちょっと綺麗にしたい
  playMusic(nextTrackId: number) {
    const current = stores.musicStore.currentTrack()
    const next = stores.musicStore.itemMap.get(nextTrackId) as ItemStore

    if (current.id === next.id) {
      next.togglePlay()
      return stores.musicStore.setTrackId(-1)
    }

    current.togglePlay()
    next.togglePlay()
    stores.musicStore.setTrackId(next.id)
  },

  async submitCondition(params: ConditionParams) {
    try {
      const { query, category } = params
      const items = await apiClient.get(`/music/${encodeURIComponent(query)}/${encodeURIComponent(category)}`)
      stores.musicStore.setItems(createItemStores(items))
    } catch (err) {
      console.error(err)
    }
  },

  async logout() {
    try {
      await firebase.auth().signOut()
      stores.userStore.logout()
    } catch (err) {
      console.error(err)
    }
  },
}

function createItemStores(items: ItemParams[]): ItemStore[] {
  return items.map((item) => new ItemStore(item))
}
