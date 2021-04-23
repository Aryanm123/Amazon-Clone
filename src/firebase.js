import firebase from 'firebase';
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBiIXycfy6UK3BDVyevYyjeFrALYu-8raU",
    authDomain: "clone-44cf4.firebaseapp.com",
    projectId: "clone-44cf4",
    storageBucket: "clone-44cf4.appspot.com",
    messagingSenderId: "689765794358",
    appId: "1:689765794358:web:d8e1f8eb2f15f3425b0e97",
    measurementId: "G-KZF07Q10ND"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export { db, auth, provider };