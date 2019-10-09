import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDNFoUzcRLHRP-S54EwXFqGBBvxsujyHPo",
  authDomain: "slack-clone-f4f4f.firebaseapp.com",
  databaseURL: "https://slack-clone-f4f4f.firebaseio.com",
  projectId: "slack-clone-f4f4f",
  storageBucket: "slack-clone-f4f4f.appspot.com",
  messagingSenderId: "1072430685299",
  appId: "1:1072430685299:web:11bace75b3a227e079de06",
  measurementId: "G-JW38QQ1YPF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
