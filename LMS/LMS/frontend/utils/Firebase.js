
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //import.meta.env.VITE_FIREBASE_APIKEY
  apiKey: "AIzaSyDNsgLHRp0vOB7bhJZm27sOxnqEz5xCvog",
  authDomain: "mylms-e46c3.firebaseapp.com",
  projectId: "mylms-e46c3",
  storageBucket: "mylms-e46c3.firebasestorage.app",
  messagingSenderId: "103871036394",
  appId: "1:103871036394:web:7299b40920c78f401d5093",
  measurementId: "G-HEY448MDPE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
