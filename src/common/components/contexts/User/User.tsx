import { Link } from '@reach/router'
import { observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import UserStore from '../../../stores/UserStore'
import UserImage from '../../selectors/UserImage/UserImage'

export const Button = styled.button`
  height: 30px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: linear-gradient(to bottom, #f2f2f2 0, #c9c9c9 100%);
  box-sizing: border-box;
  padding: 0 14px;
`

type Props = {
  user: UserStore
  logout(event: React.MouseEvent<HTMLButtonElement>): void
}

const User: React.SFC<Props> = ({ user, logout }) => {
  if (!user.id) {
    return <Link to="/login">login</Link>
  }

  return (
    <button type="button" onClick={logout}>
      <UserImage src={user.image!} alt={user.name!} width="32" height="32" />
    </button>
  )
}

export default observer(User)
