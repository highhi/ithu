import { navigate } from '@reach/router'
import { Provider } from 'mobx-react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import createAction from '../../common/actions'
import App from '../../common/components/pages/App/App'
import firebase from '../../common/libs/firebase'
import getStores from '../../common/stores'

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

const initialState = (window as any).__INITIAL_STATE__
delete (window as any).__INITIAL_STATE__

const stores = getStores(initialState)
const action = createAction(stores)
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

const renderApp = (Component: typeof App) => {
  renderMethod(
    <Provider stores={stores} action={action}>
      <Component />
    </Provider>,
    document.getElementById('app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('../../common/components/pages/App/App', () => {
    renderApp(App)
  })
}
