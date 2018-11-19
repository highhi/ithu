import { observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'
import { action } from '../../actions'
import Item, { Handlers, OuterProps, Props } from '../../components/contexts/Item/Item'

export default compose<Props, OuterProps>(
  withHandlers<OuterProps, Handlers>({
    onClick: ({ store }) => (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.playMusic(store.id)
    },
  }),
  observer
)(Item)
