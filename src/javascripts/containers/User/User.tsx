import { inject, observer } from 'mobx-react'
import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Action } from '../../actions'
import User, { Handlers, InnerProps } from '../../components/contexts/User/User'
import { InjectProps } from '../../types'

export default compose<InnerProps, {}>(
  inject<InjectProps, {}, any, {}>(({ stores }) => ({
    userStore: stores.userStore,
  })),
  withHandlers<{ action: Action }, Handlers>({
    logout: ({ action }) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.logout()
    },
  }),
  observer
)(User)
