// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHWHna3iVek5ljdCq1erNwPySkd7ozO7I",
  authDomain: "netflixgpt-ce89c.firebaseapp.com",
  projectId: "netflixgpt-ce89c",
  storageBucket: "netflixgpt-ce89c.appspot.com",
  messagingSenderId: "1030270699656",
  appId: "1:1030270699656:web:508c185aa5a05fe624b73d",
  measurementId: "G-0VMFNKSG4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();