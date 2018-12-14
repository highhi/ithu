import { inject, observer } from 'mobx-react'
import React from 'react'
import List from '../../components/contexts/List/List'
import { Store } from '../../stores'

const ObservableList = observer(List)
class WrappedList extends React.Component<{ store?: Store }, {}> {
  static displayName = 'WrappedList'

  render() {
    return <ObservableList music={this.props.store!.music} />
  }
}

export default inject('store')(WrappedList)
