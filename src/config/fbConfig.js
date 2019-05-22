import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
   apiKey: "AIzaSyAo01dMtDlUUb5IhIM-JBwnTWD-7jnMWoA",
   authDomain: "appointment-e7896.firebaseapp.com",
   databaseURL: "https://appointment-e7896.firebaseio.com",
   projectId: "appointment-e7896",
   storageBucket: "appointment-e7896.appspot.com",
   messagingSenderId: "145339694491",
   appId: "1:145339694491:web:a877447ec47c0e88"
 };
 firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({ timestampsInSnapshots: true })
 
 export default firebase;