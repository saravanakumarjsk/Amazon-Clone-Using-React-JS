import firebase from 'firebase';
// firebase.initializeApp();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAf97FtKGcuzwMBStN-EiOLxQHFVSbBmmI",
    authDomain: "clone-b50ff.firebaseapp.com",
    databaseURL: "https://clone-b50ff.firebaseio.com",
    projectId: "clone-b50ff",
    storageBucket: "clone-b50ff.appspot.com",
    messagingSenderId: "657333712996",
    appId: "1:657333712996:web:4bb762d9f66ba3faf54771",
    measurementId: "G-C1V4JH7367"
  });



const auth = firebase.auth();

export { auth };