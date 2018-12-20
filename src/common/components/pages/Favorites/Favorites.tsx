import React from 'react'
import Header from '../../../components/layouts/Header/Header'
import Audio from '../../../containers/Audio/Audio'
import FavoriteList from '../../../containers/FavoriteList/FavoriteList'

const Favorites: React.SFC<{ path: string }> = () => {
  return (
    <>
      <Header />
      <FavoriteList />
      <Audio />
    </>
  )
}

export default Favorites
