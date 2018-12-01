import { action, decorate, observable } from 'mobx'
import firebase from '../libs/firebase'

export type User = {
  id?: string
  name?: string
  image?: string
}

export default class UserStore {
  id: User['id']
  name: User['name']
  image: User['image']

  constructor(initailState: User = {}) {
    this.id = initailState.id
    this.name = initailState.name
    this.image = initailState.image

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return
      this.login({ id: user.uid, name: user.displayName!, image: user.photoURL! })
    })
  }

  login = (user: Required<User>) => {
    this.id = user.id
    this.name = user.name
    this.image = user.image
  }

  logout = () => {
    this.id = undefined
    this.name = undefined
    this.image = undefined
  }
}

decorate(UserStore, {
  id: observable.ref,
  login: action,
  logout: action,
})
