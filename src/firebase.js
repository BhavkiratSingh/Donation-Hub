import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBN-E4D9YCwmbgqnUm_JHbKvks-t8rB_Wo",
  authDomain: "donation-hub-7106e.firebaseapp.com",
  projectId: "donation-hub-7106e",
  storageBucket: "donation-hub-7106e.appspot.com",
  messagingSenderId: "21134492562",
  appId: "1:21134492562:web:f440d8cdc9f71fdc76374b",
  measurementId: "G-LY0XH3ZZ28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
