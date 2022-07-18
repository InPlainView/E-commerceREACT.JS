// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8J90Q3LLqkaGMtMijPk4r-ohVPAOyGc",
  authDomain: "reactjs-37075-c9f3f.firebaseapp.com",
  projectId: "reactjs-37075-c9f3f",
  storageBucket: "reactjs-37075-c9f3f.appspot.com",
  messagingSenderId: "214939348038",
  appId: "1:214939348038:web:e21e2367f685bd1107ae47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)