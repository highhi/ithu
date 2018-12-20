import UserStore from '@common/stores/UserStore'
import { Link } from '@reach/router'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'

type Props = {
  user: UserStore
}

const Ul = styled.ul`
  display: flex;
`

const Nav: React.SFC<Props> = ({ user }) => {
  return (
    <Ul>
      <li>
        <Link to="/">Top</Link>
      </li>
      {user.loggedIn ? (
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      ) : null}
    </Ul>
  )
}

export default observer(Nav)
