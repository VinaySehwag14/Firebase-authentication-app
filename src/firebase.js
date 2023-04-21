import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOXeDHHeaiZS-BLe51o-36ZYrD709IlQs",
  authDomain: "authentication-5a7e0.firebaseapp.com",
  projectId: "authentication-5a7e0",
  storageBucket: "authentication-5a7e0.appspot.com",
  messagingSenderId: "292967640095",
  appId: "1:292967640095:web:8ada4946df2993e993f92a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
};
