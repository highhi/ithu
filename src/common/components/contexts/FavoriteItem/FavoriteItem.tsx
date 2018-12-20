import { observer } from 'mobx-react'
import React from 'react'
import { ItemStore } from '../../../stores/ItemStore'
import UserStore from '../../../stores/UserStore'
import Item, { Props as ItemProps } from '../../selectors/Item/Item'

type Props = {
  item: ItemStore
  user: UserStore
  onPlay: ItemProps['onPlay']
}

const FavoriteItem: React.SFC<Props> = ({ item, onPlay }) => {
  return (
    <Item
      isPlaying={item.isPlaying}
      cover={item.cover}
      track={item.track}
      artist={item.artist}
      collection={item.collection}
      trackPrice={item.trackPrice}
      collectionPrice={item.collectionPrice}
      onPlay={onPlay}
    />
  )
}

export default observer(FavoriteItem)
