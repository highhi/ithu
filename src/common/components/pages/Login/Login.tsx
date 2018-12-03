import React from 'react'
import firebase from '../../../libs/firebase'
import Header from '../../layouts/Header/Header'

const provider = new firebase.auth.GoogleAuthProvider()

function onLogin() {
  firebase.auth().signInWithRedirect(provider)
}

function onLogout() {
  firebase.auth().signOut()
}

function onUser() {
  console.log(firebase.auth().currentUser)
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
