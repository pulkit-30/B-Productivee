import firebase from "firebase";

console.log(process.env.FIREBASE_API_KEY);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fireaseapp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});
const auth = firebase.auth();
const storage = firebase.storage();
const db = fireaseapp.firestore();
export { db, auth, storage };
