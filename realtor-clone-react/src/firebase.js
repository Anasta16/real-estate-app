// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmUarRKJP7qRMedcYe8JrAY-LKdHkGtU",
  authDomain: "realtor-clone-react-d27b9.firebaseapp.com",
  projectId: "realtor-clone-react-d27b9",
  storageBucket: "realtor-clone-react-d27b9.appspot.com",
  messagingSenderId: "576145067926",
  appId: "1:576145067926:web:1bc8815a124eb4421bd7b7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();