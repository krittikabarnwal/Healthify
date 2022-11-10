import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB586ekEXTQqqYPzSBNQLkyUQY-8SRKk8A",
  authDomain: "healthyify-krittika.firebaseapp.com",
  projectId: "healthyify-krittika",
  storageBucket: "healthyify-krittika.appspot.com",
  messagingSenderId: "517838651634",
  appId: "1:517838651634:web:714c0d817aee3234df906b",
  measurementId: "G-P0MV69599R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = app.firestore;
console.log(db);
