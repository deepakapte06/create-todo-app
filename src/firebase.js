
  import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyB7DJJEEauI2ECRzqAM6Awbjud7mZui1s8",
    authDomain: "todo-app-cp-6e051.firebaseapp.com",
    projectId: "todo-app-cp-6e051",
    storageBucket: "todo-app-cp-6e051.appspot.com",
    messagingSenderId: "576639804618",
    appId: "1:576639804618:web:3d247fe94749ff51520033",
    measurementId: "G-H3X8J7VCPN"
  });

  const db = firebaseApp.firestore();

//  export{db};
export default db;