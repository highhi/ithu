import { navigate } from '@reach/router'
import { Provider } from 'mobx-react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../../common/components/pages/App/App'
import { getRedirectResult, initializeApp } from '../../common/libs/firebase'
import getStore from '../../common/stores'

initializeApp()
;(async () => {
  try {
    const user = await getRedirectResult()
    if (!user) return
    navigate('/')
  } catch (err) {
    console.error(err)
  }
})()

const initialState = (window as any).__INITIAL_STATE__
delete (window as any).__INITIAL_STATE__

const store = getStore(initialState)
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

const renderApp = (Component: typeof App) => {
  renderMethod(
    <Provider store={store}>
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
