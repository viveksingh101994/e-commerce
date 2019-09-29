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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
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
