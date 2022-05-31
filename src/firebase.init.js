// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_r0UQunGBE9D8LIRzgbOaCojo6LJ2GZo",
    authDomain: "diu-transport.firebaseapp.com",
    projectId: "diu-transport",
    storageBucket: "diu-transport.appspot.com",
    messagingSenderId: "621771967921",
    appId: "1:621771967921:web:5036f4f325861d9f5b0190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;