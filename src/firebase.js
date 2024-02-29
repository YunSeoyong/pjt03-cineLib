// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSVfutLiFiJEZnzER1lLx6tuKUIOfSFeI",
  authDomain: "pjt03-cinlib.firebaseapp.com",
  projectId: "pjt03-cinlib",
  storageBucket: "pjt03-cinlib.appspot.com",
  messagingSenderId: "254536746468",
  appId: "1:254536746468:web:e79ba6a4c4871f2edf33f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
