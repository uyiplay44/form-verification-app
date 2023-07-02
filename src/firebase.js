// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3QoBqoXzoOcIWYBbyHXSk-taLwj1_wfY",
  authDomain: "verification-form-cdd86.firebaseapp.com",
  projectId: "verification-form-cdd86",
  storageBucket: "verification-form-cdd86.appspot.com",
  messagingSenderId: "380531055818",
  appId: "1:380531055818:web:779ed7052bd5c1304f2833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)