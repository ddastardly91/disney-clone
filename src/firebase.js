import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyArNHi-nvSqZNY_rKFjbdMYN0q0HSmrajI",
    authDomain: "disney-clone-94689.firebaseapp.com",
    projectId: "disney-clone-94689",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "310603836602",
    appId: "1:310603836602:web:8683f447a3bea2150e2683",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
