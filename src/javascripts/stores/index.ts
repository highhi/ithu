import { ConditionStore } from './ConditionStore'
import { ListStore } from './ListStore'

export const stores = {
  conditionStore: new ConditionStore(),
  listStore: new ListStore(),
}
