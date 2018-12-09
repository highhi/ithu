import * as React from 'react'
import styled from 'styled-components'
import { ItemStore } from '../../../stores/ItemStore'
import { GridCell } from '../../layouts/GirdCell/GridCell'
import { Grid } from '../../layouts/Grid/Grid'
import PlayButton from '../../selectors/PlayButton/PlayButton'

const columns = ['8%', '7%', '20%', '20%', '25%', '1fr', '10%']

export type Props = {
  item: ItemStore
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

const GridItem = styled(Grid)`
  border-top: 1px solid #d3d3d3;
  padding: 10px 0;
  font-weight: bold;
  :nth-child(odd) {
    background-color: #fff;
  }
`

const Item: React.SFC<Props> = ({ item, onClick }) => {
  return (
    <GridItem columns={columns} alignItems="center" rowGap="10px" columnGap="10px">
      <GridCell justify="center">
        <PlayButton isPlaying={item.isPlaying} onClick={onClick} />
      </GridCell>
      <div>
        <img src={item.cover} alt="" width="60" height="60" />
      </div>
      <div>{item.track}</div>
      <div>{item.artist}</div>
      <div>{item.collection}</div>
      <div>{item.trackPrice}</div>
      <div>{item.collectionPrice}</div>
    </GridItem>
  )
}

export default Item
