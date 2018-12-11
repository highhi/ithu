import { inject, observer } from 'mobx-react'
import React from 'react'
import { playMusic } from '../../actions'
import Item from '../../components/contexts/Item/Item'
import { StoreWithAction } from '../../stores'
import { ItemStore } from '../../stores/ItemStore'

const ObservableItem = observer(Item)
class WrappedItem extends React.Component<{ store?: StoreWithAction; item: ItemStore }, {}> {
  render() {
    return <ObservableItem item={this.props.item} onPlay={this.onPlay} onStar={this.onStar} />
  }

  onPlay = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.store!.actionWithValue(playMusic, this.props.item.id)
  }

  onStar = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.item.toggleStar()
  }
}

export default inject('store')(WrappedItem)
