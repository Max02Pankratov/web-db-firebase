// import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJxCVmpHC68qnlPHCL7lhfmMMhUPGTZM4",
    authDomain: "react-db-62264.firebaseapp.com",
    projectId: "react-db-62264",
    storageBucket: "react-db-62264.appspot.com",
    messagingSenderId: "416714674771",
    appId: "1:416714674771:web:b13c0d133193d541af2ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);