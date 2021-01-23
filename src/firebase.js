// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyBOEOHsYsIqamOoGhhPZnKNmWTUBpidAyc",
  authDomain: "clone-akshay.firebaseapp.com",
  databaseURL: "https://clone-akshay-default-rtdb.firebaseio.com",
  projectId: "clone-akshay",
  storageBucket: "clone-akshay.appspot.com",
  messagingSenderId: "693836821879",
  appId: "1:693836821879:web:409eeeb1c6a0345c821d72",
  measurementId: "G-2HQKCB3QP0",
};

const firebaseApp= firebase.initializeApp(firebaseConfig);


const db=firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth};