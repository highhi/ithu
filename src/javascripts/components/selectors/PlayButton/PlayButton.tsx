import * as React from 'react'
import styled from 'styled-components'
import { AudioStore } from '../../../stores/AudioStore'

export const Button = styled.button`
  height: 30px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: linear-gradient(to bottom, #f2f2f2 0, #c9c9c9 100%);
  box-sizing: border-box;
  padding: 0 14px;
`

export type InnerProps = {
  store: AudioStore
}

export type OuterProps = {
  previewUrl: string
  trackId: number
}

export type Handlers = {
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

export type Props = InnerProps & OuterProps & Handlers

export const PlayButton: React.SFC<Props> = ({ store, trackId, onClick }) => {
  const content = store.trackId === trackId ? '■' : '▶︎'
  return (
    <Button type="button" onClick={onClick}>
      {content}
    </Button>
  )
}
