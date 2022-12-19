import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "",
  databaseURL: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getDatabase();
