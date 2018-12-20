import { ItemParams } from '@common/stores/MusicStore'
import * as React from 'react'
import styled from 'styled-components'
import { GridCell } from '../../layouts/GirdCell/GridCell'
import { Grid } from '../../layouts/Grid/Grid'
import PlayButton from '../../selectors/PlayButton/PlayButton'

const columns = ['80px', '60px', '1fr', '1fr', '1fr', '80px', '80px', '80px']

export type Props = {
  isPlaying: boolean
  cover: ItemParams['cover']
  track: ItemParams['track']
  artist: ItemParams['artist']
  collection: ItemParams['collection']
  trackPrice: ItemParams['trackPrice']
  collectionPrice: ItemParams['collectionPrice']
  onPlay(event: React.FormEvent<HTMLButtonElement>): void
}

const GridItem = styled(Grid)`
  border-top: 1px solid #d3d3d3;
  padding: 10px 0;
  font-weight: bold;
  :nth-child(odd) {
    background-color: #fff;
  }
`

const Item: React.SFC<Props> = ({ isPlaying, cover, track, artist, collection, trackPrice, collectionPrice, onPlay, children }) => {
  return (
    <GridItem columns={columns} alignItems="center" rowGap="10px" columnGap="20px">
      <GridCell justify="end">
        <PlayButton isPlaying={isPlaying} onClick={onPlay} />
      </GridCell>
      <GridCell justify="center">
        <img src={cover} alt="" width="60" height="60" />
      </GridCell>
      <div>{track}</div>
      <div>{artist}</div>
      <div>{collection}</div>
      <div>{trackPrice}</div>
      <div>{collectionPrice}</div>
      <GridCell justify="start">{children}</GridCell>
    </GridItem>
  )
}

export default Item
