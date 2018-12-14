import { inject, observer } from 'mobx-react'
import React from 'react'
import { changeAttribute, changeTerm, submitCondition } from '../../actions'
import ConditionForm from '../../components/contexts/ConditionForm/ConditionForm'
import { Store } from '../../stores'

const ObservableConditionFrom = observer(ConditionForm)
class WrappedConditionForm extends React.Component<{ store?: Store }, {}> {
  render() {
    return (
      <ObservableConditionFrom
        music={this.props.store!.music}
        onChangeTerm={this.onChangeTerm}
        onSubmit={this.onSubmit}
        onChangeAttribute={this.onChangeAttribute}
      />
    )
  }

  onChangeTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value.trim()
    changeTerm(this.props.store!, query)
  }

  onChangeAttribute = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    changeAttribute(this.props.store!, query)
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    submitCondition(this.props.store!, {
      query: formData.get('query') as string,
      category: formData.get('category') as string,
    })
  }
}

export default inject('store')(WrappedConditionForm)
