import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4hOWrjb1ZvTo4cTOOTyTBSPQAJMYr7K4",
  authDomain: "bharatsetu-567b3.firebaseapp.com",
  projectId: "bharatsetu-567b3",
  storageBucket: "bharatsetu-567b3.firebasestorage.app",
  messagingSenderId: "97864290872",
  appId: "1:97864290872:web:30bf9161cb7ebceba34ccd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };