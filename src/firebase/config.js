import * as firebase from "firebase/app"
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration

 var firebaseConfig = {
    apiKey: "AIzaSyAYYqqUxGcoTxnvWgOm2dq9DvXuhQvoKFw",
    authDomain: "hariyoapp.firebaseapp.com",
    databaseURL: "https://hariyoapp.firebaseio.com",
    projectId: "hariyoapp",
    storageBucket: "hariyoapp.appspot.com",
    messagingSenderId: "160440019402",
    appId: "1:160440019402:web:a04e45e44167ebe0f14733",
    measurementId: "G-ELGKXQTHBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore =firebase.firestore();


  export{projectStorage, projectFirestore};