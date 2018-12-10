import React from 'react'
import { MusicStore } from '../../../stores/MusicStore'

type Props = {
  music: MusicStore
}

const Audio: React.SFC<Props> = ({ music }) => {
  if (!music.musicUrl) return null
  return <audio src={music.musicUrl} autoPlay />
}

export default Audio
