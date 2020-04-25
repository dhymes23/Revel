import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAHD2Nz0sO-D7pzh5-mO69eMf1X5Tz55JM",
  authDomain: "https://revel-6a7ab.firebaseio.com",
  databaseURL: "https://revel-6a7ab.firebaseio.com",
  projectId: "revel-6a7ab"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
