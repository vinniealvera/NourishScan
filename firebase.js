// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB25C-X7vr3jdyDZ65SAv7emvsmltOQTo8",
  authDomain: "nourishscan.firebaseapp.com",
  projectId: "nourishscan",
  storageBucket: "nourishscan.appspot.com",
  messagingSenderId: "275590393887",
  appId: "1:275590393887:web:2584911b066f5c2c4b252a",
  measurementId: "G-SSJGN0PX5P"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
