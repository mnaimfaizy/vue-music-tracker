import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
