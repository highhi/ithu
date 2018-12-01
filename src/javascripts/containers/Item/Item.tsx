import { inject, observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'
import { Action } from '../../actions'
import Item, { Handlers, OuterProps, Props } from '../../components/contexts/Item/Item'
import { InjectProps } from '../../types'

export default compose<Props, OuterProps>(
  inject<InjectProps, {}, any, {}>(({ action }) => ({
    action,
  })),
  withHandlers<OuterProps & { action: Action }, Handlers>({
    onClick: ({ store, action }) => (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.playMusic(store.id)
    },
  }),
  observer
)(Item)
