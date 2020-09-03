import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8WbZvvZwcWKmbE1APF7aELeL7qtQ7-EQ",
    authDomain: "tinder-clone-20b25.firebaseapp.com",
    databaseURL: "https://tinder-clone-20b25.firebaseio.com",
    projectId: "tinder-clone-20b25",
    storageBucket: "tinder-clone-20b25.appspot.com",
    messagingSenderId: "513906018952",
    appId: "1:513906018952:web:07796f1ebecdec38e5ad3d",
    measurementId: "G-7GNSHXFFF0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;