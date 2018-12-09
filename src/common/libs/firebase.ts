import firebase from 'firebase/app'
import 'firebase/auth'

export function initializeApp() {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PRODUCT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  })
}

export type OnAuthStateChanged = Promise<firebase.User | null>
export function onAuthStateChanged(): OnAuthStateChanged {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user), (err) => reject(err))
  })
}

export type SignOut = Promise<void>
export function signOut(): Promise<void> {
  return firebase.auth().signOut()
}

export type GetRedirectResult = Promise<firebase.User | null>
export async function getRedirectResult() {
  const { user } = await firebase.auth().getRedirectResult()
  return user
}

export function signInWithRedirect() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export function currenUser() {
  return firebase.auth().currentUser
}

export type Firebase = {
  onAuthStateChanged(): OnAuthStateChanged
  signOut(): SignOut
  getRedirectResult(): GetRedirectResult
}
