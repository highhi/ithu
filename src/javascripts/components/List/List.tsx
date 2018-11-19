import * as React from 'react'
import Item from '../../containers/Item/Item'
import { MusicStore } from '../../stores/MusicStore'

type Props = {
  store: MusicStore
}

export const List: React.SFC<Props> = ({ store }) => {
  const items = store.items.map((item) => {
    return <Item key={item.id} store={item} />
  })

  return <main>{items}</main>
}
