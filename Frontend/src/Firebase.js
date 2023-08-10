import { initializeApp } from 'firebase/app';
import {getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAz_9XsPxMswCOlaKx1s5wVoWSPCzZfsKA",
    authDomain: "attendancesystem-26595.firebaseapp.com",
    projectId: "attendancesystem-26595",
    storageBucket: "attendancesystem-26595.appspot.com",
    messagingSenderId: "900914331888",
    appId: "1:900914331888:web:92b10b7b018672f9934235"
  };

const app= initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
