import { observer } from 'mobx-react'
import { compose, withHandlers, withProps } from 'recompose'
import { action } from '../../actions'
import ConditionForm, { Handlers, InnerProps } from '../../components/ConditionForm/ConditionForm'
import { stores } from '../../stores'

export default compose<InnerProps, {}>(
  withProps(() => ({
    store: stores.musicStore,
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
)(ConditionForm)
