import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClllUg0MykUuzbzfuFVTpblzjjbDDXJ40",
  authDomain: "graphic-portfolio-6da05.firebaseapp.com",
  projectId: "graphic-portfolio-6da05",
  storageBucket: "graphic-portfolio-6da05.firebasestorage.app",
  messagingSenderId: "64432125527",
  appId: "1:64432125527:web:5388961e541bfbe99bd512",
  measurementId: "G-XP59MTM4C7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
