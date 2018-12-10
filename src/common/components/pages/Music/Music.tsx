import * as React from 'react'
import Audio from '../../../containers/Audio/Audio'
import ConditionForm from '../../../containers/ConditionForm/ConditionForm'
import List from '../../../containers/List/List'
import Header from '../../layouts/Header/Header'

const Music: React.SFC<{ path: string }> = () => {
  return (
    <>
      <Header>
        <ConditionForm />
      </Header>
      <List />
      <Audio />
    </>
  )
}

export default Music
