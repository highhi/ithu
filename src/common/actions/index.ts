import * as firebase from '../libs/firebase'
import { Store } from '../stores'
import { ItemStore } from '../stores/ItemStore'
import { ItemParams } from '../stores/MusicStore'
import { apiClient } from '../utils'

type ConditionParams = {
  query: string
  category: string
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
    if (!user) return store.user.logout()
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

  if (current.id === next.id) {
    next.togglePlaying()
    return store.music.setTrackId(-1)
  }

  current.togglePlaying()
  next.togglePlaying()
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

export async function addFavorite(store: Store, item: ItemParams) {
  const { id, cover, track, artist, collection, trackPrice, collectionPrice } = item
  try {
    await firebase
      .db()
      .collection('favorites')
      .doc(store.user.id)
      .collection('music')
      .doc(String(id))
      .set({
        id,
        cover,
        track,
        artist,
        collection,
        trackPrice,
        collectionPrice,
      })
  } catch (err) {
    console.error(err)
  }
}

export async function removeFavorite(store: Store, item: ItemParams) {
  const { id } = item
  try {
    await firebase
      .db()
      .collection('favorites')
      .doc(store.user.id)
      .collection('music')
      .doc(String(id))
      .delete()
  } catch (err) {
    console.error(err)
  }
}

export function onFavoritesSnapShot(store: Store, item: { id: number; changeStarred: (bool: boolean) => void }) {
  return firebase.onFavoriteSnapshot(
    store.user.id!,
    item.id,
    (doc) => {
      item.changeStarred(!!doc.data())
    },
    (err) => {
      err.message = `SnapShot error: ${err.message}`
      console.error(err)
    }
  )
}

function createItemStores(items: ItemParams[]): ItemStore[] {
  return items.map((item) => new ItemStore(item))
}
