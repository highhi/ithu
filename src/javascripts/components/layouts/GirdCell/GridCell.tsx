import styled from 'styled-components'

type Props = {
  row?: string | number
  column?: string | number
  area?: string
  align?: string
  justify?: string
}

export const GridCell = styled.div<Props>`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  grid-area: ${(props) => props.area};
  justify-self: ${(props) => props.justify};
`
