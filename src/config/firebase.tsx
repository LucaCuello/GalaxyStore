import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_BnNLrIvZdQwDAxpfqS-A6B1Grrj19ok",
  authDomain: "galaxystore-36f85.firebaseapp.com",
  projectId: "galaxystore-36f85",
  storageBucket: "galaxystore-36f85.appspot.com",
  messagingSenderId: "889476586606",
  appId: "1:889476586606:web:da401199fc6ce839fc9a7f",
  measurementId: "G-QVKFJBX7ZX",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
