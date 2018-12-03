import * as React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  height: 30px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: linear-gradient(to bottom, #f2f2f2 0, #c9c9c9 100%);
  box-sizing: border-box;
  padding: 0 14px;
`

export type Props = {
  isPlaying: boolean
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

const PlayButton: React.SFC<Props> = ({ isPlaying, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {isPlaying ? '■' : '▶︎'}
    </Button>
  )
}

export default PlayButton
