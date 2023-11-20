// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQlv7FCO02RESLoW0WmIcLszmg7iACHIg",
  authDomain: "crud-firease-reactjs.firebaseapp.com",
  projectId: "crud-firease-reactjs",
  storageBucket: "crud-firease-reactjs.appspot.com",
  messagingSenderId: "466792668605",
  appId: "1:466792668605:web:33934eff22b589378306d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);