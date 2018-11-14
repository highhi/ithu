import { inject, observer } from 'mobx-react'
import { compose, withHandlers, withProps } from 'recompose'
import { action } from '../../actions'
import { ConditionForm as Form, Handlers, InnerProps } from '../../components/ConditionForm/ConditionForm'
import { stores } from '../../stores'

const enhance = compose<InnerProps, {}>(
  withProps(() => ({
    store: stores.conditionStore,
  })),
  withHandlers<{}, Handlers>({
    onChangeTerm: () => (event: React.FormEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value.trim()
      action.changeTerm(query)
    },
    onChangeAttribute: () => (event: React.FormEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value
      action.changeAttribute(query)
    },
    onSubmit: () => (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      action.submitCondition({
        query: formData.get('query') as string,
        category: formData.get('category') as string,
      })
    },
  }),
  observer
)

export const ConditionForm = enhance(Form)
