import * as React from 'react'
import styled from 'styled-components'
import { ConditionStore } from '../../stores/ConditionStore'
import { Category } from '../Category/Category'

export type OuterProps = {
  store: ConditionStore
}

export type InnerProps = {
  onChangeTerm(event: React.FormEvent<HTMLInputElement>): void
  onChangeAttribute(event: React.FormEvent<HTMLInputElement>): void
  onSubmit(event: React.FormEvent<HTMLFormElement>): void
}

const Form = styled.form``

const Input = styled.input`
  padding: 0 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
`

export const ConditionForm: React.SFC<InnerProps & OuterProps> = ({ store, onChangeTerm, onChangeAttribute, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input className="queryField" name="query" type="text" value={store.term} onChange={onChangeTerm} />
      <Category category="" checked={!store.attribute} onChange={onChangeAttribute}>
        ALL
      </Category>
      <Category category="artistTerm" checked={store.attribute === 'artistTerm'} onChange={onChangeAttribute}>
        Artist
      </Category>
      <Category category="songTerm" checked={store.attribute === 'songTerm'} onChange={onChangeAttribute}>
        Track
      </Category>
      <Category category="albumTerm" checked={store.attribute === 'albumTerm'} onChange={onChangeAttribute}>
        Collection
      </Category>
    </Form>
  )
}
