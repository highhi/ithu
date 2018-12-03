import { inject, observer } from 'mobx-react'
import React from 'react'
import { compose, lifecycle, withHandlers } from 'recompose'
import { Action } from '../../actions'
import User, { Handlers, InnerProps } from '../../components/contexts/User/User'
import firebase from '../../libs/firebase'
import { InjectProps } from '../../types'

export default compose<InnerProps, {}>(
  inject<InjectProps, {}, any, {}>(({ stores }) => ({
    userStore: stores.userStore,
  })),
  lifecycle<InnerProps, {}>({
    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) return
        this.props.userStore.login({ id: user.uid, name: user.displayName!, image: user.photoURL! })
      })
    },
  }),
  withHandlers<{ action: Action }, Handlers>({
    logout: ({ action }) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.logout()
    },
  }),
  observer
)(User)
