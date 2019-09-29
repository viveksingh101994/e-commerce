import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANZR3O7r4yH3mQDjp5XRu-k78nkeItp24",
  authDomain: "e-commerce-7f4cf.firebaseapp.com",
  databaseURL: "https://e-commerce-7f4cf.firebaseio.com",
  projectId: "e-commerce-7f4cf",
  storageBucket: "",
  messagingSenderId: "113190413935",
  appId: "1:113190413935:web:31cc295dbf451a0acf4f9a",
  measurementId: "G-SL8SGCDNY4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
