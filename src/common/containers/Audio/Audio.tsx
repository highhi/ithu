import { inject, observer } from 'mobx-react'
import React from 'react'
import Audio from '../../components/contexts/Audio/Audio'
import { Store } from '../../stores'

type Props = {
  store?: Store
}

const ObservableAudio = observer(Audio)
const WrappedAudio: React.SFC<Props> = ({ store }) => {
  return <ObservableAudio music={store!.music} />
}

export default inject('store')(WrappedAudio)
