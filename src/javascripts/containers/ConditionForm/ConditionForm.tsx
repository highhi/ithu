import { inject, observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'
import { Action } from '../../actions'
import { ConditionForm as Form, InnerProps, OuterProps } from '../../components/ConditionForm/ConditionForm'

const enhance = compose<InnerProps & OuterProps, OuterProps>(
  inject('action'),
  withHandlers<{ action: Action }, InnerProps>({
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
)

export const ConditionForm = enhance(Form)
