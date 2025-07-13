import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: <your_api_key>,
//   authDomain: <add_yours>,
//   projectId: <add_project_id>,
//   storageBucket: <add_storage_bucket>,
//   messagingSenderId: <add_sender_id>,
//   appId: <add_api_id>
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };