import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7BxRl9LumkXjcVct25ttvCff7cWFY_kY",
  authDomain: "satisfactory-item-calculator.firebaseapp.com",
  projectId: "satisfactory-item-calculator",
  storageBucket: "satisfactory-item-calculator.firebasestorage.app",
  messagingSenderId: "162645621086",
  appId: "1:162645621086:web:5523ff8a7cb4c60e92b7cf"
};

export const app = initializeApp(firebaseConfig);