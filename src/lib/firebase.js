import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d29f4.firebaseapp.com",
  projectId: "reactchat-d29f4",
  storageBucket: "reactchat-d29f4.appspot.com",
  messagingSenderId: "824180803107",
  appId: "1:824180803107:web:eb02100636ffe60f53d396",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
