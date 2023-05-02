// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3YZuuYGhJEu_BBPEUMtc9oeCLmauLNkg",
  authDomain: "editautos-6d2b5.firebaseapp.com",
  projectId: "editautos-6d2b5",
  storageBucket: "editautos-6d2b5.appspot.com",
  messagingSenderId: "746777387308",
  appId: "1:746777387308:web:39a1539527f4055c6a0c89",
  measurementId: "G-53HF0YX595"
};
  

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}