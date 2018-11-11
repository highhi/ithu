import * as React from 'react'
import styled from 'styled-components'

const Label = styled.input`
  padding: 0 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
`

type Props = {
  checked: boolean
  cateogry: string
}

export const Category: React.SFC<Props> = (props) => {
  return (
    <Label>
      <input className="category" type="radio" name="category" value={props.cateogry} checked={props.checked} />
      {props.children}
    </Label>
  )
}
