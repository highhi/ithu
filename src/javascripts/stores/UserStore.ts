import { action, decorate, observable } from 'mobx'

export type User = {
  id: string | null
  name: string | null
  image: string | null
}

export default class UserStore {
  id!: string | null
  name!: string | null
  image!: string | null

  login = (user: User) => {
    this.id = user.id
    this.name = user.name
    this.image = user.image
  }

  logout = () => {
    this.id = null
    this.name = null
    this.image = null
  }
}

decorate(UserStore, {
  id: observable.ref,
  login: action,
  logout: action,
})
