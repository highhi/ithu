import { inject } from 'mobx-react'
import React from 'react'
import { playMusic } from '../../actions'
import FavoriteItem from '../../components/contexts/FavoriteItem/FavoriteItem'
import { Store } from '../../stores'
import { ItemStore } from '../../stores/ItemStore'

class WrappedItem extends React.Component<{ store?: Store; item: ItemStore }, {}> {
  render() {
    return <FavoriteItem item={this.props.item} user={this.props.store!.user} onPlay={this.onPlay} />
  }

  onPlay = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    playMusic(this.props.store!, this.props.item.id)
  }
}

export default inject('store')(WrappedItem)
