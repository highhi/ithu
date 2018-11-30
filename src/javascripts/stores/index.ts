import { MusicStore } from './MusicStore'
import UserStore from './UserStore'

export type Stores = {
  musicStore: MusicStore
  userStore: UserStore
}

export const stores: Stores = {
  musicStore: new MusicStore(),
  userStore: new UserStore(),
}
