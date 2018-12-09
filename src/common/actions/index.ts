import * as firebase from '../libs/firebase'
import { Store } from '../stores'
import { ItemStore } from '../stores/ItemStore'
import { ItemParams } from '../stores/MusicStore'
import { apiClient } from '../utils'

type ConditionParams = {
  query: string
  category: string
}

export type Action = {
  changeTerm(query: string): void
  changeAttribute(category: string): void
  playMusic(nextTrackId: number): void
  submitCondition(params: ConditionParams): void
  logout(): void
  onAuthStateChanged(): void
}

export function changeTerm(store: Store, query: string) {
  store.music.setTerm(query)
}

export async function logout(store: Store) {
  try {
    await firebase.signOut()
    store.user.logout()
  } catch (err) {
    console.error(err)
  }
}

export async function onAuthStateChanged(store: Store) {
  try {
    const user = await firebase.onAuthStateChanged()
    if (!user) return
    store.user.login({ id: user.uid, name: user.displayName!, image: user.photoURL! })
  } catch (err) {
    console.log(err)
  }
}

export function changeAttribute(store: Store, category: string) {
  store.music.setAttribute(category)
}

// TODO: 条件分岐をもうちょっと綺麗にしたい
export function playMusic(store: Store, nextTrackId: number) {
  const current = store.music.currentTrack()
  const next = store.music.itemMap.get(nextTrackId) as ItemStore

  current.togglePlay()

  if (current.id === next.id) {
    next.togglePlay()
    return store.music.setTrackId(-1)
  }

  next.togglePlay()
  store.music.setTrackId(next.id)
}

export async function submitCondition(store: Store, params: ConditionParams) {
  try {
    const { query, category } = params
    const items = await apiClient.get(`/music/${encodeURIComponent(query)}/${encodeURIComponent(category)}`)
    store.music.setItems(createItemStores(items))
  } catch (err) {
    console.error(err)
  }
}

function createItemStores(items: ItemParams[]): ItemStore[] {
  return items.map((item) => new ItemStore(item))
}
