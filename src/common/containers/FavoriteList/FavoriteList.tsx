import { subscribeFavoriteCollection } from '@common/actions'
import { inject } from 'mobx-react'
import React from 'react'
import FavoriteList from '../../components/contexts/FavoriteList/FavoriteList'
import { Store } from '../../stores'

class WrappedList extends React.Component<{ store?: Store }, {}> {
  private unsubscribe!: () => void

  async componentDidMount() {
    this.unsubscribe = await subscribeFavoriteCollection(this.props.store!)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return <FavoriteList favorite={this.props.store!.favorite} />
  }
}

export default inject('store')(WrappedList)
