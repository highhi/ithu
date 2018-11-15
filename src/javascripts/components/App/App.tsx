import * as React from 'react'
import { ConditionForm } from '../../containers/ConditionForm/ConditionForm'
import { List } from '../../containers/List/List'
import { stores } from '../../stores'
import { Header } from '../layouts/Header/Header'

export const App = () => {
  return (
    <>
      <Header />
      <List store={stores.listStore} />
    </>
  )
}
