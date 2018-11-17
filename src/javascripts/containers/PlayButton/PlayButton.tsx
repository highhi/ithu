import { observer } from 'mobx-react'
import { compose, withHandlers, withProps } from 'recompose'
import { action } from '../../actions'
import { Handlers, OuterProps, PlayButton as Button, Props } from '../../components/selectors/PlayButton/PlayButton'
import { stores } from '../../stores'

const enhance = compose<Props, OuterProps>(
  withProps(() => ({
    store: stores.musicStore,
  })),
  withHandlers<OuterProps, Handlers>({
    onClick: ({ previewUrl, trackId }) => (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault()
      action.playMusic(previewUrl, trackId)
    },
  }),
  observer
)

export const PlayButton = enhance(Button)
