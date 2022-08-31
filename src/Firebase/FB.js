// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvoFCHGl_Ynhhd8p34mNFlpYRnkqDt_8",
  authDomain: "home-pressure.firebaseapp.com",
  projectId: "home-pressure",
  storageBucket: "home-pressure.appspot.com",
  messagingSenderId: "382369777360",
  appId: "1:382369777360:web:6e28d355dc021cd87b00d5",
};

// Initialize Firebase
export const FBapp = initializeApp(firebaseConfig);

export const FBauth = getAuth(FBapp);

setPersistence(FBauth, browserSessionPersistence);
