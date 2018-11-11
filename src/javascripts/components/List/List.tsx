import { observer } from 'mobx-react'
import * as React from 'react'
import { ListStore } from '../../stores/ListStore'

type Props = {
  store: ListStore
}

export const List = observer<React.SFC<Props>>(({ store }) => {
  const items = store.items.map((item) => {
    return <p>{item.track}</p>
  })

  return <div>{items}</div>
})
