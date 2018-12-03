import * as React from 'react'
import Item from '../../../containers/Item/Item'
import { MusicStore } from '../../../stores/MusicStore'

export type Props = {
  musicStore: MusicStore
}

const List: React.SFC<Props> = ({ musicStore }) => {
  const items = musicStore.items.map((item) => {
    return <Item key={item.id} store={item} />
  })

  return <main>{items}</main>
}

export default List
