import { inject } from 'mobx-react'
import React from 'react'
import MusicList from '../../components/contexts/MusicList/MusicList'
import { Store } from '../../stores'

class WrappedList extends React.Component<{ store?: Store }, {}> {
  render() {
    return <MusicList music={this.props.store!.music} />
  }
}

export default inject('store')(WrappedList)
