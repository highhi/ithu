import * as React from 'react'
import { ConditionForm } from '../../containers/ConditionForm/ConditionForm'
import { List } from '../../containers/List/List'
import { stores } from '../../stores'

export const App = () => {
  return (
    <div>
      <ConditionForm store={stores.conditionStore} />
      <List store={stores.listStore} />
    </div>
  )
}
