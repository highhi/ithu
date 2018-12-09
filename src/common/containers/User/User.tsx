import { inject, observer } from 'mobx-react'
import React from 'react'
import { logout, onAuthStateChanged } from '../../actions'
import User from '../../components/contexts/User/User'
import { StoreWithAction } from '../../stores'

const ObservebleUser = observer(User)
export class WrapedUser extends React.Component<{ store?: StoreWithAction }, {}> {
  static displayName = 'WrapedUser'

  componentDidMount() {
    this.props.store!.action(onAuthStateChanged)
  }

  render() {
    return <ObservebleUser user={this.props.store!.user} logout={this.logout} />
  }

  logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.props.store!.action(logout)
  }
}

export default inject('store')(WrapedUser)
