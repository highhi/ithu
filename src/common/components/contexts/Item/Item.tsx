import * as React from 'react'
import styled from 'styled-components'
import { ItemStore } from '../../../stores/ItemStore'
import { GridCell } from '../../layouts/GirdCell/GridCell'
import { Grid } from '../../layouts/Grid/Grid'
import PlayButton from '../../selectors/PlayButton/PlayButton'
import Star from '../../selectors/Star/Star'

const columns = ['80px', '60px', '1fr', '1fr', '1fr', '80px', '80px', '80px']

export type Props = {
  item: ItemStore
  onPlay(event: React.FormEvent<HTMLButtonElement>): void
  onStar(event: React.FormEvent<HTMLButtonElement>): void
}

const GridItem = styled(Grid)`
  border-top: 1px solid #d3d3d3;
  padding: 10px 0;
  font-weight: bold;
  :nth-child(odd) {
    background-color: #fff;
  }
`

const Item: React.SFC<Props> = ({ item, onPlay, onStar }) => {
  return (
    <GridItem columns={columns} alignItems="center" rowGap="10px" columnGap="20px">
      <GridCell justify="end">
        <PlayButton isPlaying={item.isPlaying} onClick={onPlay} />
      </GridCell>
      <GridCell justify="center">
        <img src={item.cover} alt="" width="60" height="60" />
      </GridCell>
      <div>{item.track}</div>
      <div>{item.artist}</div>
      <div>{item.collection}</div>
      <div>{item.trackPrice}</div>
      <div>{item.collectionPrice}</div>
      <GridCell justify="start">
        <Star starred={item.starred} onClick={onStar} />
      </GridCell>
    </GridItem>
  )
}

export default Item
