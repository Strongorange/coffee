// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
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

const provider = new GoogleAuthProvider();

export const signInGoogleWithPopup = () => {
  //
  signInWithPopup(FBauth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("From Google Login");
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
};

setPersistence(FBauth, browserSessionPersistence);
