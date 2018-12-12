import { ServerLocation } from '@reach/router'
import { Request, Response } from 'express'
import { Provider } from 'mobx-react'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../../../common/components/pages/App/App'
import getStore from '../../../common/stores'
import { renderFullPage } from '../../renderFullPage'

export default (req: Request, res: Response) => {
  const initialState = { userState: {} }
  const store = getStore(initialState)
  const sheet = new ServerStyleSheet()

  const Jsx = (
    <Provider store={store}>
      <ServerLocation url={req.url}>
        <App />
      </ServerLocation>
    </Provider>
  )

  const style = sheet.getStyleTags()
  const body = renderToString(Jsx)
  const assets = getAssets()

  res.status(200).send(
    renderFullPage({
      body,
      style,
      assets,
      initialState: JSON.stringify(initialState),
    })
  )
}

function getAssets() {
  return (process.env.NODE_ENV === 'production' ? prodAssets() : devAssets()).map((asset) => `<script src="${asset}" defer></script>`).join('\n')
}

function prodAssets() {
  const manifest = require('../../../../dist/manifest.json')
  return [
    manifest['javascripts/runtime.js'],
    manifest['javascripts/firebase.js'],
    manifest['javascripts/react.js'],
    manifest['javascripts/vendor.js'],
    manifest['javascripts/main.js'],
  ]
}

function devAssets() {
  return ['/public/main.js']
}
