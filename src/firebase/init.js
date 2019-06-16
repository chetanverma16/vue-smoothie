import firebase from 'firebase';
import firestore from 'firebase/firestore';

var Config = {
    apiKey: "AIzaSyCMtoMwAO3GfDWVu-1PRE5OceBThLaFXn8",
    authDomain: "vue-smoothie-3b96c.firebaseapp.com",
    databaseURL: "https://vue-smoothie-3b96c.firebaseio.com",
    projectId: "vue-smoothie-3b96c",
    storageBucket: "",
    messagingSenderId: "680882870323",
    appId: "1:680882870323:web:a04645327bd1545a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(Config);

export default firebaseApp.firestore();