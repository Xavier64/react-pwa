// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65GO6Wh8f9D89vlm0lKkSXLc6UUCw9O8",
  authDomain: "react-cda-pwa.firebaseapp.com",
  projectId: "react-cda-pwa",
  storageBucket: "react-cda-pwa.appspot.com",
  messagingSenderId: "868076664512",
  appId: "1:868076664512:web:0742f97a6d3a2b19afdf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
}