import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//  //
 
// };
const firebaseConfig = {
  apiKey: "AIzaSyCDGqGuIeZjIOpf_ptP5M-0pTy6n47XZqE",
  authDomain: "reactnative-trainings.firebaseapp.com",
  databaseURL: "https://reactnative-trainings-default-rtdb.firebaseio.com",
  projectId: "reactnative-trainings",
  storageBucket: "reactnative-trainings.firebasestorage.app",
  messagingSenderId: "898613257153",
  appId: "1:898613257153:web:d3d6d57d1a302d34f80540",
  measurementId: "G-P7V8VDS6RE"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
// Get Database instance
const database = getDatabase(app);

export { app, auth, database };