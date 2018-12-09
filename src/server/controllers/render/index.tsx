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
  const initalState = { userState: {} }
  const store = getStore(initalState)
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

  res.status(200).send(
    renderFullPage({
      body,
      style,
      initialState: JSON.stringify(initalState),
    })
  )
}
