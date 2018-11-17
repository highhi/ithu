import { AudioStore } from './AudioStore'
import { ConditionStore } from './ConditionStore'
import { ListStore } from './ListStore'
import { MusicStore } from './MusicStore'

export type Stores = {
  conditionStore: ConditionStore
  listStore: ListStore
  audioStore: AudioStore
  musicStore: MusicStore
}

export const stores: Stores = {
  conditionStore: new ConditionStore(),
  listStore: new ListStore(),
  audioStore: new AudioStore(),
  musicStore: new MusicStore(),
}
