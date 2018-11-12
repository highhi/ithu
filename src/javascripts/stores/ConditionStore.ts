import { action, decorate, observable } from 'mobx'

export class ConditionStore {
  term = ''
  attribute = ''

  setTerm = (term: string) => {
    this.term = term
  }

  setAttribute = (attribute: string) => {
    this.attribute = attribute
  }
}

decorate(ConditionStore, {
  term: observable.ref,
  attribute: observable.ref,
  setTerm: action,
  setAttribute: action,
})
