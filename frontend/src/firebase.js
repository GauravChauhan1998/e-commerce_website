import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyD4wOi0AxKmBQEtA9LbQvnwmphmUTdFaxA",
  authDomain: "shopsy-auth.firebaseapp.com",
  projectId: "shopsy-auth",
  storageBucket: "shopsy-auth.appspot.com",
  messagingSenderId: "1005646975323",
  appId: "1:1005646975323:web:e845b577682c4b95e48a7e",
  measurementId: "G-KC1WM4ZSP1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app,auth };