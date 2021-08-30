import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDDRo7tRAgT2DSGzCN4XlnNg-YZ9iq9N_I",
    authDomain: "crwn-db-d0026.firebaseapp.com",
    projectId: "crwn-db-d0026",
    storageBucket: "crwn-db-d0026.appspot.com",
    messagingSenderId: "1001884339096",
    appId: "1:1001884339096:web:8e1ea43db126371d7ff9ed",
    measurementId: "G-R70WT0KZ73"
  };

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;

