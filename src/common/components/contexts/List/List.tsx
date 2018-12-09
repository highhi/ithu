import * as React from 'react'
import Item from '../../../containers/Item/Item'
import { MusicStore } from '../../../stores/MusicStore'

export type Props = {
  music: MusicStore
}

const List: React.SFC<Props> = ({ music }) => {
  const items = music.items.map((item) => {
    return <Item key={item.id} item={item} />
  })

  return <main>{items}</main>
}

export default List
