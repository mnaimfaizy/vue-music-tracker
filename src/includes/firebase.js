import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXtlSAMCcx3CmqY2kM8CfdIMNGkLi-N84',
  authDomain: 'musictracker-d32f9.firebaseapp.com',
  projectId: 'musictracker-d32f9',
  storageBucket: 'musictracker-d32f9.appspot.com',
  appId: '1:12958526340:web:939988052197b2f1b2cbd1'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
