import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import { Action } from './actions'
import { App } from './components/App/App'

const action = new Action()

render(
  <Provider action={action}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement
)
