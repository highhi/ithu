import * as React from 'react'
import { ListStore } from '../../stores/ListStore'

type Props = {
  store: ListStore
}

export const List: React.SFC<Props> = ({ store }) => {
  const items = store.items.map((item) => {
    return <p key={item.id}>{item.track}</p>
  })

  return <div>{items}</div>
}
