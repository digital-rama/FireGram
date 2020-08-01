import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";



var firebaseConfig = {
  apiKey: "AIzaSyBjY6UCoPiqb_-2u7zT5kI2r0lZokZ_q5k",
  authDomain: "firegram-8751d.firebaseapp.com",
  databaseURL: "https://firegram-8751d.firebaseio.com",
  projectId: "firegram-8751d",
  storageBucket: "firegram-8751d.appspot.com",
  messagingSenderId: "142947508311",
  appId: "1:142947508311:web:72a76508b35780464ec312"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
