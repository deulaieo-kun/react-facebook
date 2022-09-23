import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNPNYB2YC9KUMXYj0doOYMymDto02p5s",
  authDomain: "react-facebook-cadc8.firebaseapp.com",
  projectId: "react-facebook-cadc8",
  storageBucket: "react-facebook-cadc8.appspot.com",
  messagingSenderId: "209378281195",
  appId: "1:209378281195:web:241b8cd01e896282e460ae"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth, and provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }

