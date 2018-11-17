import * as React from 'react'
import styled from 'styled-components'
import { ConditionStore } from '../../stores/ConditionStore'
import { Category } from '../Category/Category'
import { GridCell } from '../layouts/GirdCell/GridCell'
import { Grid } from '../layouts/Grid/Grid'

export type Handlers = {
  onChangeTerm(event: React.FormEvent<HTMLInputElement>): void
  onChangeAttribute(event: React.FormEvent<HTMLInputElement>): void
  onSubmit(event: React.FormEvent<HTMLFormElement>): void
}

export type InnerProps = Handlers & {
  store: ConditionStore
}

const areas = ['input input input input"', '"cat1 cat2 cat3 cat4']

const Form = styled.form`
  width: 300px;
`

const Input = styled.input`
  padding: 0 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
`

export const ConditionForm: React.SFC<InnerProps> = ({ store, onChangeTerm, onChangeAttribute, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Grid areas={areas}>
        <GridCell area="input">
          <Input className="queryField" name="query" type="text" value={store.term} onChange={onChangeTerm} />
        </GridCell>
        <GridCell area="cat1">
          <Category category="" checked={!store.attribute} onChange={onChangeAttribute}>
            ALL
          </Category>
        </GridCell>
        <GridCell area="cat2">
          <Category category="artistTerm" checked={store.attribute === 'artistTerm'} onChange={onChangeAttribute}>
            Artist
          </Category>
        </GridCell>
        <GridCell area="cat3">
          <Category category="songTerm" checked={store.attribute === 'songTerm'} onChange={onChangeAttribute}>
            Track
          </Category>
        </GridCell>
        <GridCell area="cat4">
          <Category category="albumTerm" checked={store.attribute === 'albumTerm'} onChange={onChangeAttribute}>
            Collection
          </Category>
        </GridCell>
      </Grid>
    </Form>
  )
}
