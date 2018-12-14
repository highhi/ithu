import { inject, observer } from 'mobx-react'
import React from 'react'
import { logout, onAuthStateChanged } from '../../actions'
import User from '../../components/contexts/User/User'
import { Store } from '../../stores'

const ObservableUser = observer(User)
export class WrappedUser extends React.Component<{ store?: Store }, {}> {
  static displayName = 'WrappedUser'

  componentDidMount() {
    onAuthStateChanged(this.props.store!)
  }

  render() {
    return <ObservableUser user={this.props.store!.user} logout={this.logout} />
  }

  logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    logout(this.props.store!)
  }
}

export default inject('store')(WrappedUser)
