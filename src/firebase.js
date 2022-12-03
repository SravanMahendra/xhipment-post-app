import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPfz96LhHeqnLSHgo4mnfVxf2p5ALr368",
  authDomain: "xhipmentbysravan.firebaseapp.com",
  projectId: "xhipmentbysravan",
  storageBucket: "xhipmentbysravan.appspot.com",
  messagingSenderId: "607718344556",
  appId: "1:607718344556:web:b82d9a8a74c20fe45d9549",
  measurementId: "G-5N5VNTBDHS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
