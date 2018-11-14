import styled from 'styled-components'

type Props = {
  rows?: string
  columns?: string
  areas?: string
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-rows: ${(props) => props.rows};
  grid-template-columns: ${(props) => props.columns};
  grid-template-areas: ${(props) => props.areas};
`
