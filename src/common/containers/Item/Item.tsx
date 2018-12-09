import { inject, observer } from 'mobx-react'
import React from 'react'
import { playMusic } from '../../actions'
import Item from '../../components/contexts/Item/Item'
import { StoreWithAction } from '../../stores'
import { ItemStore } from '../../stores/ItemStore'

const ObservableItem = observer(Item)
class WrapedItem extends React.Component<{ store?: StoreWithAction; item: ItemStore }, {}> {
  render() {
    return <ObservableItem item={this.props.item} onClick={this.onClick} />
  }

  onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.store!.actionWithValue(playMusic, this.props.item.id)
  }
}

export default inject('store')(WrapedItem)
