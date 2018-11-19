import * as React from 'react'
import Item from '../../../containers/Item/Item'
import { MusicStore } from '../../../stores/MusicStore'

export type Props = {
  store: MusicStore
}

const List: React.SFC<Props> = ({ store }) => {
  const items = store.items.map((item) => {
    return <Item key={item.id} store={item} />
  })

  return <main>{items}</main>
}

export default List
