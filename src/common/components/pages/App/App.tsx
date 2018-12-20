import { Router } from '@reach/router'
import React from 'react'
import Favorites from '../../../components/pages/Favorites/Favorites'
import GlobalStyle from '../../layouts/GlobalStyle/GlobalStyle'
import Login from '../../pages/Login/Login'
import Music from '../../pages/Music/Music'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Music path="/" />
        <Login path="login" />
        <Favorites path="favorites" />
      </Router>
    </>
  )
}

export default App
