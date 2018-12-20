import { MusicStore } from './MusicStore'
import UserStore, { User } from './UserStore'

export type Store = {
  music: MusicStore
  favorite: MusicStore
  user: UserStore
}

export type InitialState = {
  userState: User
}

export default function getStore(initialState: InitialState): Store {
  return {
    music: new MusicStore(),
    favorite: new MusicStore(),
    user: new UserStore(initialState.userState),
  }
}
