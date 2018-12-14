import { inject, observer } from 'mobx-react'
import React from 'react'
import { addFavorite, onFavoritesSnapShot, playMusic, removeFavorite } from '../../actions'
import Item from '../../components/contexts/Item/Item'
import { Store } from '../../stores'
import { ItemStore } from '../../stores/ItemStore'

const ObservableItem = observer(Item)
class WrappedItem extends React.Component<{ store?: Store; item: ItemStore }, {}> {
  private unsubscribe!: () => void

  componentDidMount() {
    this.unsubscribe = onFavoritesSnapShot(this.props.store!, this.props.item)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return <ObservableItem item={this.props.item} user={this.props.store!.user} onPlay={this.onPlay} onStar={this.onStar} />
  }

  onPlay = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    playMusic(this.props.store!, this.props.item.id)
  }

  onStar = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { store, item } = this.props
    if (!item.starred) return addFavorite(store!, item)
    return removeFavorite(store!, item)
  }
}

export default inject('store')(WrappedItem)
