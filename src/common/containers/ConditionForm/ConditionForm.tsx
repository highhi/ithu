import { inject, observer } from 'mobx-react'
import React from 'react'
import { changeAttribute, changeTerm, submitCondition } from '../../actions'
import ConditionForm from '../../components/contexts/ConditionForm/ConditionForm'
import { StoreWithAction } from '../../stores'

const ObservableConditionFrom = observer(ConditionForm)
class WrapedConditionForm extends React.Component<{ store?: StoreWithAction }, {}> {
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
    this.props.store!.actionWithValue(changeTerm, query)
  }

  onChangeAttribute = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    this.props.store!.actionWithValue(changeAttribute, query)
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    this.props.store!.actionWithValue(submitCondition, {
      query: formData.get('query') as string,
      category: formData.get('category') as string,
    })
  }
}

export default inject('store')(WrapedConditionForm)
