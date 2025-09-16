// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HcwCJznbJHcsShqmyu1zvfw_dq_zwT4",
  authDomain: "interviewprep-3faca.firebaseapp.com",
  projectId: "interviewprep-3faca",
  storageBucket: "interviewprep-3faca.firebasestorage.app",
  messagingSenderId: "367886602622",
  appId: "1:367886602622:web:b2b0dc84cac6392116632f",
  measurementId: "G-YGG46LG96C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)