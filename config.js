import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCDJzpJCzoWwTHOcvCA65IT0yQievLklAg",
  authDomain: "wily-13a5a.firebaseapp.com",
  projectId: "wily-13a5a",
  storageBucket: "wily-13a5a.appspot.com",
  messagingSenderId: "171944514039",
  appId: "1:171944514039:web:a5852a8494dfe75f4c5ef2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
