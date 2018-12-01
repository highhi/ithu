import { inject, observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'
import { Action } from '../../actions'
import ConditionForm, { Handlers, InnerProps } from '../../components/contexts/ConditionForm/ConditionForm'

export default compose<InnerProps, {}>(
  inject(({ stores, action }) => ({
    musicStore: stores.musicStore,
    action,
  })),
  withHandlers<{ action: Action }, Handlers>({
    onChangeTerm: ({ action }) => (event: React.FormEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value.trim()
      action.changeTerm(query)
    },

    onChangeAttribute: ({ action }) => (event: React.FormEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value
      action.changeAttribute(query)
    },

    onSubmit: ({ action }) => (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      action.submitCondition({
        query: formData.get('query') as string,
        category: formData.get('category') as string,
      })
    },
  }),
  observer
)(ConditionForm)
