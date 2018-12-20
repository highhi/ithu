import { observer } from 'mobx-react'
import * as React from 'react'
import FavoriteItem from '../../../containers/FavoriteItem/FavoriteItem'
import { MusicStore } from '../../../stores/MusicStore'

export type Props = {
  favorite: MusicStore
}

const FavoriteList: React.SFC<Props> = ({ favorite }) => {
  const items = favorite.items.map((item) => {
    return <FavoriteItem key={item.id} item={item} />
  })

  return <main>{items}</main>
}

export default observer(FavoriteList)
