import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSF4aFt64CYk4axGLSevuC79dF4IdYgDU",
  authDomain: "proyectofinalcoder-188c9.firebaseapp.com",
  projectId: "proyectofinalcoder-188c9",
  storageBucket: "proyectofinalcoder-188c9.appspot.com",
  messagingSenderId: "514273160636",
  appId: "1:514273160636:web:864810842850b2dc664fb9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
