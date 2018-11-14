import { Provider } from 'mobx-react'
import * as React from 'react'
import { render } from 'react-dom'
import { action } from './actions'
import { App } from './components/App/App'

render(
  <Provider action={action}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement
)
