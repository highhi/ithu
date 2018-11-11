import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { ConditionStore } from '../../stores/ConditionStore'
import { Category } from '../Category/Category'

type Props = {
  store: ConditionStore
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

export const ConditionForm = observer<React.SFC<Props>>(({ store }) => {
  return (
    <Form>
      <Input className="queryField" type="text" value={store.query} />
      <Category cateogry="all" checked={store.category === 'all'}>
        ALL
      </Category>
      <Category cateogry="artist" checked={store.category === 'artist'}>
        Artist
      </Category>
      <Category cateogry="track" checked={store.category === 'track'}>
        Track
      </Category>
      <Category cateogry="collection" checked={store.category === 'collection'}>
        Collection
      </Category>
    </Form>
  )
})
