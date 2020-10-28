import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyBGdtWWQtDHbk3vTlSeUDBMWRy4Khv7MaA",
   authDomain: "bestclothing-83fa7.firebaseapp.com",
   databaseURL: "https://bestclothing-83fa7.firebaseio.com",
   projectId: "bestclothing-83fa7",
   storageBucket: "bestclothing-83fa7.appspot.com",
   messagingSenderId: "931025529016",
   appId: "1:931025529016:web:5ea242045135d17e5dac4d",
   measurementId: "G-E32K8DPWZY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) {
      return;
   }

   const userRef = await firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (err) {
         console.log("error creating user ", err.message);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// This code implements google oauth in our app with the help of the firebase library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
