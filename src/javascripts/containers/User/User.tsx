import { observer } from 'mobx-react'
import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'
import { action } from '../../actions'
import User, { Handlers, InnerProps } from '../../components/contexts/User/User'
import firebase from '../../libs/firebase'
import { stores } from '../../stores'

firebase.auth().onAuthStateChanged((user) => {
  if (!user) return
  stores.userStore.login({
    id: user.uid,
    name: user.displayName,
    image: user.photoURL,
  })
})

export default compose<InnerProps, {}>(
  withProps(() => ({
    store: stores.userStore,
  })),
  withHandlers<{}, Handlers>({
    logout: () => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.logout()
    },
  }),
  observer
)(User)
