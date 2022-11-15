import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB586ekEXTQqqYPzSBNQLkyUQY-8SRKk8A",
  databaseURL:
    "https://healthyify-krittika-default-rtdb.asia-southeast1.firebasedatabase.app",
  authDomain: "healthyify-krittika.firebaseapp.com",
  projectId: "healthyify-krittika",
  storageBucket: "healthyify-krittika.appspot.com",
  messagingSenderId: "517838651634",
  appId: "1:517838651634:web:714c0d817aee3234df906b",
  measurementId: "G-P0MV69599R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getDatabase();
