import React from 'react'
import Audio from '../../../containers/Audio/Audio'
import ConditionForm from '../../../containers/ConditionForm/ConditionForm'
import MusicList from '../../../containers/MusicList/MusicList'
import Header from '../../layouts/Header/Header'

const Music: React.SFC<{ path: string }> = () => {
  return (
    <>
      <Header>
        <ConditionForm />
      </Header>
      <MusicList />
      <Audio />
    </>
  )
}

export default Music
