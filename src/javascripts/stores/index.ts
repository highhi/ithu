import { MusicStore } from './MusicStore'

export type Stores = {
  musicStore: MusicStore
}

export const stores: Stores = {
  musicStore: new MusicStore(),
}
