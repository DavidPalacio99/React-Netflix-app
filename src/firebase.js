import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUqtGeba82eu-0WG9IFEjCuUVDHY9myOQ",
  authDomain: "netflix-clone-f483d.firebaseapp.com",
  projectId: "netflix-clone-f483d",
  storageBucket: "netflix-clone-f483d.appspot.com",
  messagingSenderId: "177707047962",
  appId: "1:177707047962:web:07a3fa2f4b5c26ba8805a3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
