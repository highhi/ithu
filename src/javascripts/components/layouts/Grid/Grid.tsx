import * as React from 'react'
import styled from 'styled-components'

type Props = {
  rows?: string[]
  columns?: string[]
  areas?: string[]
  columnGap?: string
}

function join(arg?: string[]): string | undefined {
  if (!arg) return arg
  return arg.join(' ')
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-rows: ${(props) => join(props.rows)};
  grid-template-columns: ${(props) => join(props.columns)};
  grid-template-areas: "${(props) => join(props.areas)}";
  column-gap: ${(props) => props.columnGap}
`
