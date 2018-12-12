import { Router } from '@reach/router'
import React from 'react'
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
      </Router>
    </>
  )
}

export default App
