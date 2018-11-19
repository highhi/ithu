import { observer } from 'mobx-react'
import { compose, withProps } from 'recompose'
import List, { Props } from '../../components/contexts/List/List'
import { stores } from '../../stores'

export default compose<Props, {}>(
  withProps(() => ({
    store: stores.musicStore,
  })),
  observer
)(List)
