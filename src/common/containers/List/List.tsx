import { inject, observer } from 'mobx-react'
import React from 'react'
import List from '../../components/contexts/List/List'
import { StoreWithAction } from '../../stores'

const ObservableList = observer(List)
class WrapedList extends React.Component<{ store?: StoreWithAction }, {}> {
  static displayName = 'WrapedList'

  render() {
    return <ObservableList music={this.props.store!.music} />
  }
}

export default inject('store')(WrapedList)
