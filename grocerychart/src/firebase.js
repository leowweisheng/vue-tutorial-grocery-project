import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3lixlN6USsbKi4mEn0TsPfIS5iTDDnnE",
  authDomain: "vue-tutorial-grocery-project.firebaseapp.com",
  databaseURL: "https://vue-tutorial-grocery-project.firebaseio.com",
  projectId: "vue-tutorial-grocery-project",
  storageBucket: "vue-tutorial-grocery-project.appspot.com",
  messagingSenderId: "782942311109",
  appId: "1:782942311109:web:d7689f6453445287a256ac",
  measurementId: "G-TG4LH5X2VH"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;