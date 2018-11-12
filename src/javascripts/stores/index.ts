import { ConditionStore } from './ConditionStore'
import { ListStore } from './ListStore'

export type Stores = {
  conditionStore: ConditionStore
  listStore: ListStore
}

export const stores: Stores = {
  conditionStore: new ConditionStore(),
  listStore: new ListStore(),
}
