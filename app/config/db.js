import Firebase from 'firebase';
import 'firebase/firestore';

let config = {
  apiKey: "AIzaSyDyraE-pVx-GUKLJKxPCykCFR7sHA9eRfQ",
   authDomain: "producto-3-9a6bf.firebaseapp.com",
   projectId: "producto-3-9a6bf",
   storageBucket: "producto-3-9a6bf.appspot.com",
   messagingSenderId: "365123402089",
   appId: "1:365123402089:web:03ca6b5506fa51507125f8",
   measurementId: "G-69HZ9PZRFD"
};
let app = Firebase.initializeApp(config);
export const db = app.firestore();
