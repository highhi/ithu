import { navigate, Router } from '@reach/router'
import * as React from 'react'
import { render } from 'react-dom'
import Login from './components/pages/Login/Login'
import Music from './components/pages/Music/Music'
import firebase from './libs/firebase'

firebase
  .auth()
  .getRedirectResult()
  .then(async ({ user }) => {
    if (!user) return
    const jwtToken = await user.getIdToken()
    window.localStorage.setItem('jwt_token', jwtToken)
    navigate('/')
  })
  .catch((error) => {
    console.error(error)
  })

render(
  <Router>
    <Music path="/" />
    <Login path="login" />
  </Router>,
  document.getElementById('app') as HTMLElement
)
