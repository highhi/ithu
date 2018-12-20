import { observer } from 'mobx-react'
import React from 'react'
import Star, { Props as StarProps } from '../../../components/selectors/Star/Star'
import { ItemStore } from '../../../stores/ItemStore'
import UserStore from '../../../stores/UserStore'
import Item, { Props as ItemProps } from '../../selectors/Item/Item'

type Props = {
  item: ItemStore
  user: UserStore
  onPlay: ItemProps['onPlay']
  onStar: StarProps['onClick']
}

const MusicItem: React.SFC<Props> = ({ item, user, onPlay, onStar }) => {
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
    >
      {user.loggedIn ? <Star starred={item.starred} onClick={onStar} /> : null}
    </Item>
  )
}

export default observer(MusicItem)
