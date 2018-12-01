import { navigate, Router } from '@reach/router'
import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import createAction from './actions'
import Login from './components/pages/Login/Login'
import Music from './components/pages/Music/Music'
import firebase from './libs/firebase'
import getStores from './stores'

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

const stores = getStores({ userState: {} })
const action = createAction(stores)

render(
  <Provider stores={stores} action={action}>
    <Router>
      <Music path="/" />
      <Login path="login" />
    </Router>
  </Provider>,
  document.getElementById('app')
)
