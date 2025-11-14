import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvh9mW8xJq_RjMF9hEJDQQdxAR5rtQ6PQ",
  authDomain: "flipflow-d4d69.firebaseapp.com",
  projectId: "flipflow-d4d69",
  storageBucket: "flipflow-d4d69.appspot.com",
  messagingSenderId: "407824699584",
  appId: "1:407824699584:web:3c074ff3d0ecaf77375d25",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
