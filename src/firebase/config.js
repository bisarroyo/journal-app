// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAz7_V6AH4kuOMI3t7bJ9J7Vp8WhwmGKzQ',
  authDomain: 'react-firebase-1a7b5.firebaseapp.com',
  projectId: 'react-firebase-1a7b5',
  storageBucket: 'react-firebase-1a7b5.appspot.com',
  messagingSenderId: '547700854572',
  appId: '1:547700854572:web:96dee3df9b67b7e3ffe689',
  measurementId: 'G-SQYPCBSTF3'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
