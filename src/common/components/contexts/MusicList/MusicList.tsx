import { observer } from 'mobx-react'
import * as React from 'react'
import MusicItem from '../../../containers/MusicItem/MusicItem'
import { MusicStore } from '../../../stores/MusicStore'

export type Props = {
  music: MusicStore
}

const MusicList: React.SFC<Props> = ({ music }) => {
  const items = music.items.map((item) => {
    return <MusicItem key={item.id} item={item} />
  })

  return <main>{items}</main>
}

export default observer(MusicList)
