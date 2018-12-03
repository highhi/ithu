import { Link } from '@reach/router'
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
  userStore: UserStore
}

export type Handlers = {
  logout(event: React.MouseEvent<HTMLButtonElement>): void
}

export type InnerProps = Props & Handlers

const User: React.SFC<InnerProps> = ({ userStore, logout }) => {
  if (!userStore.id) {
    return <Link to="/login">login</Link>
  }

  return (
    <button type="button" onClick={logout}>
      <UserImage src={userStore.image!} alt={userStore.name!} width="32" height="32" />
    </button>
  )
}

export default User
