import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC7Yux_n9uE3mHQRiJaDaldmFvgSj6T2M",
  authDomain: "healthify-iitism.firebaseapp.com",
  databaseURL: "https://healthify-iitism-default-rtdb.firebaseio.com",
  projectId: "healthify-iitism",
  storageBucket: "healthify-iitism.appspot.com",
  messagingSenderId: "494035061715",
  appId: "1:494035061715:web:c3b7210815eb323d1b7d26",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
