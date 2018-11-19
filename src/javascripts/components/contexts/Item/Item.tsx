import * as React from 'react'
import styled from 'styled-components'
import { ItemStore } from '../../../stores/ItemStore'
import { GridCell } from '../../layouts/GirdCell/GridCell'
import { Grid } from '../../layouts/Grid/Grid'
import PlayButton from '../../selectors/PlayButton/PlayButton'

const columns = ['8%', '7%', '20%', '20%', '25%', '1fr', '10%']

export type OuterProps = {
  store: ItemStore
}

export type Handlers = {
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

export type Props = OuterProps & Handlers

const GridItem = styled(Grid)`
  border-top: 1px solid #d3d3d3;
  padding: 10px 0;
  font-weight: bold;
  :nth-child(odd) {
    background-color: #fff;
  }
`

const Item: React.SFC<OuterProps & Handlers> = ({ store, onClick }) => {
  return (
    <GridItem columns={columns} alignItems="center" rowGap="10px" columnGap="10px">
      <GridCell justify="center">
        <PlayButton isPlaying={store.isPlaying} onClick={onClick} />
      </GridCell>
      <div>
        <img src={store.cover} alt="" width="60" height="60" />
      </div>
      <div>{store.track}</div>
      <div>{store.artist}</div>
      <div>{store.collection}</div>
      <div>{store.trackPrice}</div>
      <div>{store.collectionPrice}</div>
    </GridItem>
  )
}

export default Item
