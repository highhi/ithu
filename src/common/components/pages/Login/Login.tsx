import React from 'react'
import { currenUser, signInWithRedirect, signOut } from '../../../libs/firebase'
import Header from '../../layouts/Header/Header'

function onLogin() {
  signInWithRedirect()
}

function onLogout() {
  signOut()
}

function onUser() {
  console.log(currenUser())
}

const Login: React.SFC<{ path: string }> = () => {
  return (
    <>
      <Header />
      <button type="button" onClick={onLogin}>
        ログイン
      </button>
      <button type="button" onClick={onLogout}>
        ログアウト
      </button>
      <button type="button" onClick={onUser}>
        カレントユーザー
      </button>
    </>
  )
}

export default Login
