import * as React from 'react'
import { stores } from '../../stores'
import { ConditionForm } from '../ConditionForm/ConditionForm'
import { List } from '../List/List'

export const App = () => {
  return (
    <div>
      <ConditionForm store={stores.conditionStore} />
      <List store={stores.listStore} />
    </div>
  )
}
