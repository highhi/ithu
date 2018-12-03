import { ServerLocation } from '@reach/router'
import { Request, Response } from 'express'
import { Provider } from 'mobx-react'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import createAction from '../../../common/actions'
import App from '../../../common/components/pages/App/App'
import getStores from '../../../common/stores'
import { renderFullPage } from '../../renderFullPage'

export default (req: Request, res: Response) => {
  const initalState = { userState: {} }
  const stores = getStores(initalState)
  const action = createAction(stores)
  const sheet = new ServerStyleSheet()

  const Jsx = (
    <Provider stores={stores} action={action}>
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
