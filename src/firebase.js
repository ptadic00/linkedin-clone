import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDe42Cc9K0JJ0yfrGgVeoOfl-Q2LoSIg-E",
  authDomain: "linkedin-clone-b9283.firebaseapp.com",
  projectId: "linkedin-clone-b9283",
  storageBucket: "linkedin-clone-b9283.appspot.com",
  messagingSenderId: "31170734435",
  appId: "1:31170734435:web:5ec8865d6f69e44a11cb56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
