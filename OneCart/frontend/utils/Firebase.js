import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-8ef12.firebaseapp.com",
  projectId: "loginonecart-8ef12",
  storageBucket: "loginonecart-8ef12.firebasestorage.app",
  messagingSenderId: "381338219427",
  appId: "1:381338219427:web:f74931c7ab92eba66fe016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()



export {auth,provider}