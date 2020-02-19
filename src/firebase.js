import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpn3qlTMIs5834e-OWxdjp1OFkwHVSBE8",
    authDomain: "crud-udemy-fa34f.firebaseapp.com",
    databaseURL: "https://crud-udemy-fa34f.firebaseio.com",
    projectId: "crud-udemy-fa34f",
    storageBucket: "crud-udemy-fa34f.appspot.com",
    messagingSenderId: "145619705575",
    appId: "1:145619705575:web:b531f7b79328c17c8e0c42"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore()