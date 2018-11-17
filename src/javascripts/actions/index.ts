import { stores } from '../stores'
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

  playMusic(previewUrl: string, trackId: number) {
    stores.musicStore.setTrack(previewUrl, trackId)
  },

  async submitCondition(params: ConditionParams) {
    try {
      const { query, category } = params
      const items = await apiClient.get(`/music/${encodeURIComponent(query)}/${encodeURIComponent(category)}`)
      stores.musicStore.setItems(items)
    } catch (err) {
      console.error(err)
    }
  },
}
