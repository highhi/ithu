import { action, decorate, observable } from 'mobx'

export type User = {
  id?: string
  name?: string
  image?: string
}

export default class UserStore {
  id: User['id']
  name: User['name']
  image: User['image']
  loggedIn = false

  constructor(initialState: User = {}) {
    this.id = initialState.id
    this.name = initialState.name
    this.image = initialState.image
  }

  login = (user: Required<User>) => {
    this.id = user.id
    this.name = user.name
    this.image = user.image
    this.loggedIn = true
  }

  logout = () => {
    this.id = undefined
    this.name = undefined
    this.image = undefined
    this.loggedIn = false
  }
}

decorate(UserStore, {
  id: observable.ref,
  loggedIn: observable.ref,
  login: action,
  logout: action,
})
