import { Router } from '@reach/router'
import * as React from 'react'
import { render } from 'react-dom'
import Login from './components/pages/Login/Login'
import Music from './components/pages/Music/Music'

render(
  <Router>
    <Music path="/" />
    <Login path="login" />
  </Router>,
  document.getElementById('app') as HTMLElement
)
