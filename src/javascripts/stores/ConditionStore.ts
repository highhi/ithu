import { action, decorate, observable } from 'mobx'

export class ConditionStore {
  query = ''
  category = ''

  setQuery = (query: string) => {
    this.query = query
  }

  setCategory = (category: string) => {
    this.category = category
  }
}

decorate(ConditionStore, {
  query: observable.ref,
  category: observable.ref,
  setQuery: action,
  setCategory: action,
})
