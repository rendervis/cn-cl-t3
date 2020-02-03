import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4-j3W8I4lgT_qJH6svYnrpkDJw9Qm1Bs",
  authDomain: "cn-cl-t3.firebaseapp.com",
  databaseURL: "https://cn-cl-t3.firebaseio.com",
  projectId: "cn-cl-t3",
  storageBucket: "cn-cl-t3.appspot.com",
  messagingSenderId: "298649064673",
  appId: "1:298649064673:web:39ca2cb7b0c561462553a0",
  measurementId: "G-T958XC1E6M"
};

firebase.initializeApp(config);

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
    } catch (error) {
      console.log(" error creating user ", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
