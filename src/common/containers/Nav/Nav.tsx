import { inject } from 'mobx-react'
import React from 'react'
import Nav from '../../components/contexts/Nav/Nav'
import { Store } from '../../stores'

type Props = {
  store?: Store
}

const WrappedNav: React.SFC<Props> = ({ store }) => {
  return <Nav user={store!.user} />
}

export default inject('store')(WrappedNav)
