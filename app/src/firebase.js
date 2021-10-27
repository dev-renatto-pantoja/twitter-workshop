import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9jcAJo68sCAGYpSxxO4SCC1n30rsZVgU",
  authDomain: "workshop-ef48a.firebaseapp.com",
  projectId: "workshop-ef48a",
  storageBucket: "workshop-ef48a.appspot.com",
  messagingSenderId: "359109406633",
  appId: "1:359109406633:web:cb546308265fe2bd5b1eb8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo

// // el módulo de autenticacíon
export const auth = firebase.auth();
// // el provedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
// // la utilidad para hacer login con el pop-up
export const loginConGoogle = () => auth.signInWithPopup(provider);
// // la utilidad para hacer logout
export const logout = () => auth.signOut();
export default firebase
