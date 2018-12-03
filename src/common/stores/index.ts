import { MusicStore } from './MusicStore'
import UserStore, { User } from './UserStore'

export type Stores = {
  musicStore: MusicStore
  userStore: UserStore
}

export type InitialState = {
  userState: User
}

export default function getStores(initialState: InitialState) {
  return {
    musicStore: new MusicStore(),
    userStore: new UserStore(initialState.userState),
  }
}
