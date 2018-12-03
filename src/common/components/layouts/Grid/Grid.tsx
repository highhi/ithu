import styled from 'styled-components'

type Props = {
  rows?: string[]
  columns?: string[]
  areas?: string[]
  columnGap?: string
  rowGap?: string
  alignItems?: string
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
  align-items: ${(props) => props.alignItems};
  column-gap: ${(props) => props.columnGap};
  row-gap: ${(props) => props.rowGap};
`
