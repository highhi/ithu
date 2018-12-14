import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firestore: firebase.firestore.Firestore

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

export function db(): firebase.firestore.Firestore {
  if (!firestore) {
    firestore = firebase.firestore()
    firestore.settings({ timestampsInSnapshots: true })
  }
  return firestore
}

export function onFavoriteSnapshot(
  userId: string,
  itemId: number,
  onNext: (doc: firebase.firestore.DocumentSnapshot) => void,
  onError?: (err: Error) => void,
  onCompletion?: () => void
) {
  return db()
    .collection('favorites')
    .doc(userId)
    .collection('music')
    .doc(String(itemId))
    .onSnapshot(onNext, onError, onCompletion)
}

export function onAuthStateChanged(): Promise<firebase.User | null> {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user), (err) => reject(err))
  })
}

export function signOut(): Promise<void> {
  return firebase.auth().signOut()
}

export async function getRedirectResult(): Promise<firebase.User | null> {
  const { user } = await firebase.auth().getRedirectResult()
  return user
}

export function signInWithRedirect() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export function currentUser() {
  return firebase.auth().currentUser
}
