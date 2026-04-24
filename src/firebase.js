import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "graphic-portfolio-database.firebaseapp.com",
  projectId: "graphic-portfolio-database",
  storageBucket: "graphic-portfolio-database.firebasestorage.app",
  messagingSenderId: "133482906530",
  appId: "1:133482906530:web:b4388e545b84580128e8fb",
  measurementId: "G-Z19D26J7TK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
