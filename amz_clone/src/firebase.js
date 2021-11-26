import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDiZ0C158rnufzy8d7d8y9kp9qTYXp01xw",
    authDomain: "amazing-amazo.firebaseapp.com",
    projectId: "amazing-amazo",
    storageBucket: "amazing-amazo.appspot.com",
    messagingSenderId: "217336514734",
    appId: "1:217336514734:web:1fa9af626f449a6601c53f",
    measurementId: "G-D84HBGMBBW",
  

});


const auth = firebase.auth()

export {auth}