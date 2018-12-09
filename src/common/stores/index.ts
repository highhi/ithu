import { MusicStore } from './MusicStore'
import UserStore, { User } from './UserStore'

export type Store = {
  music: MusicStore
  user: UserStore
}

export type StoreWithAction = Store & {
  action(callback: (store: Store) => void): void
  actionWithValue<V>(callback: (store: Store, value: V) => void, value: V): void
}

export type InitialState = {
  userState: User
}

export default function getStore(initialState: InitialState): StoreWithAction {
  const store = {
    music: new MusicStore(),
    user: new UserStore(initialState.userState),
  }

  return {
    ...store,
    action(callback) {
      callback(store)
    },
    actionWithValue(callback, value) {
      callback(store, value)
    },
  }
}
