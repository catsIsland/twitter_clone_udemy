import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNjhrAgLFJWj17Qyj7h0L4qt4Eo2YcDBY",
  authDomain: "twitter-clone-udemy-1785d.firebaseapp.com",
  projectId: "twitter-clone-udemy-1785d",
  storageBucket: "twitter-clone-udemy-1785d.appspot.com",
  messagingSenderId: "885908057920",
  appId: "1:885908057920:web:ecc013df0f5b5152cf14a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;