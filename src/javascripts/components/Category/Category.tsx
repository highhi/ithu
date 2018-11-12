import * as React from 'react'

type Props = {
  checked: boolean
  category: string
  onChange(event: React.FormEvent<HTMLInputElement>): any
}

export const Category: React.SFC<Props> = (props) => {
  return (
    <label>
      <input className="category" type="radio" name="category" value={props.category} checked={props.checked} onChange={props.onChange} />
      {props.children}
    </label>
  )
}
