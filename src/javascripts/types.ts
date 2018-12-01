import { Action } from './actions'
import { Stores } from './stores'

export type InjectProps = {
  stores: Stores
  action: Action
}
