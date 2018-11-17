import * as React from 'react'
import { ListStore } from '../../stores/ListStore'
import { Item } from '../contexts/Item/Item'

type Props = {
  store: ListStore
}

export const List: React.SFC<Props> = ({ store }) => {
  const items = store.items.map((item) => {
    return <Item key={item.id} item={item} />
  })

  return <main>{items}</main>
}
