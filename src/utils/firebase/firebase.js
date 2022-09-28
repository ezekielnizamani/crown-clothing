import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged  
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVnrDVqUHCU7Z1oCEQFdRkBtv4Nz6GTuY",
  authDomain: "crown-clothing-b8372.firebaseapp.com",
  projectId: "crown-clothing-b8372",
  storageBucket: "crown-clothing-b8372.appspot.com",
  messagingSenderId: "1022834864539",
  appId: "1:1022834864539:web:ebc875d926931bff16713e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const db = getFirestore();

export const createUserDocumentAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }
};

export const authCreateUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const authSignInWithUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth,email, password);
};

export const signOutUser = async ()=> await signOut(auth)


export const onAuthStateChangedlistner = (callback) => onAuthStateChanged(auth,callback)