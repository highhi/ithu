import { MusicStore } from './MusicStore'
import UserStore, { User } from './UserStore'

export type Store = {
  music: MusicStore
  user: UserStore
}

export type InitialState = {
  userState: User
}

export default function getStore(initialState: InitialState): Store {
  return {
    music: new MusicStore(),
    user: new UserStore(initialState.userState),
  }
}
