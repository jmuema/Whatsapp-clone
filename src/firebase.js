import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZq9Oqx6SUeP2UMWgmyfNRJA-M17KD4SQ",
    authDomain: "whatsapp-clone-c230a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c230a.firebaseio.com",
    projectId: "whatsapp-clone-c230a",
    storageBucket: "whatsapp-clone-c230a.appspot.com",
    messagingSenderId: "816585331699",
    appId: "1:816585331699:web:60c6020453096c2e40b886",
    measurementId: "G-4CHNDCPQ3H"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;