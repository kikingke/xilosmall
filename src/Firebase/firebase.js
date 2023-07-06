import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Initialize Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAZk07QZP2CFnqE0m6IPcYpQmJa6JYx404',
	authDomain: 'xilostats.firebaseapp.com',
	projectId: 'xilostats',
	storageBucket: 'xilostats.appspot.com',
	messagingSenderId: '464160355794',
	appId: '1:464160355794:web:d7c763279e71300185440b'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth();


export {firebaseApp, db, auth, collection, getDocs}
