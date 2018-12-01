import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import List, { Props } from '../../components/contexts/List/List'
import { InjectProps } from '../../types'

export default compose<Props, {}>(
  inject<InjectProps, {}, any, {}>(({ stores }) => ({
    musicStore: stores.musicStore,
  })),
  observer
)(List)
