
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAtsAwLQHoy6T-t1zXiDJ_z1cIstvrPJgU",
    authDomain: "linkedin-clone-c59dd.firebaseapp.com",
    projectId: "linkedin-clone-c59dd",
    storageBucket: "linkedin-clone-c59dd.appspot.com",
    messagingSenderId: "113286365196",
    appId: "1:113286365196:web:f930eef87beccc18db6e29",
    measurementId: "G-V3SYYE1LB1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export{db,auth};