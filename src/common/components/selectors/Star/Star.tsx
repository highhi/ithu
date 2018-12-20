import React from 'react'

export type Props = {
  starred: boolean
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

const Star: React.SFC<Props> = ({ starred, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {starred ? '★' : '☆'}
    </button>
  )
}

export default Star
