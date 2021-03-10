import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEf43DSaR3Ry0IAofHhi_Rns85-ZqJTtA",
  authDomain: "deals-of-the-day-leo.firebaseapp.com",
  databaseURL: "https://deals-of-the-day-leo-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
