import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDHyrk1Rz3GCf8HebhWB54bdAJr6bEle1k",
    authDomain: "atvsomativa.firebaseapp.com",
    projectId: "atvsomativa",
    storageBucket: "atvsomativa.appspot.com",
    messagingSenderId: "1030342021742",
    appId: "1:1030342021742:web:9e386da5948fe8bf498c7f"
  };

  if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
  }

  export default firebase;