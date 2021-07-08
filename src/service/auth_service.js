<<<<<<< HEAD
import firebase from 'firebase';
import firebaseApp from './firebase';
=======
import firebase from "firebase";
import firebaseApp from "./firebase";
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
<<<<<<< HEAD
    firebase.auth().onAuthStateChanged(user => {
=======
    firebase.auth().onAuthStateChanged((user) => {
>>>>>>> b226c19ae681961f3fa2f1ba17c66acd257cac0e
      onUserChanged(user);
    });
  }
}

export default AuthService;
