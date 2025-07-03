import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7BxRl9LumkXjcVct25ttvCff7cWFY_kY",
  authDomain: "satisfactory-item-calculator.firebaseapp.com",
  projectId: "satisfactory-item-calculator",
  storageBucket: "satisfactory-item-calculator.firebasestorage.app",
  messagingSenderId: "162645621086",
  appId: "1:162645621086:web:5523ff8a7cb4c60e92b7cf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}