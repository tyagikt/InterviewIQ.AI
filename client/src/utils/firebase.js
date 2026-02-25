import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider}from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-73b5b.firebaseapp.com",
  projectId: "interviewiq-73b5b",
  storageBucket: "interviewiq-73b5b.firebasestorage.app",
  messagingSenderId: "77429071550",
  appId: "1:77429071550:web:1886aeb4bd890ac0cbc8ef"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export{auth , provider}