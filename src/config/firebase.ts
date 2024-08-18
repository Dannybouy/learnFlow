// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0uBoC1gEqayGRvFOGb6KA97WKAXKFgEc",
  authDomain: "learn-flow-a38ba.firebaseapp.com",
  projectId: "learn-flow-a38ba",
  storageBucket: "learn-flow-a38ba.appspot.com",
  messagingSenderId: "1007540100178",
  appId: "1:1007540100178:web:0167e1bb8da9534fb7138b",
  measurementId: "G-LECD5KFH2T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// for our authentication
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
