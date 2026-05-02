function ShowSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'block'

    const btn = document.querySelector(".clickbtn")
    btn.style.display = 'none'
}

function CloseSide() {
    const Side = document.querySelector(".nav-ul")
    Side.style.display = 'none'

    const btn = document.querySelector(".clickbtn")
    btn.style.display = 'block'
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7wDbZ7i-HAT5GHQB8jp2nRRn3E6xbO-w",
    authDomain: "hayawebsite123.firebaseapp.com",
    projectId: "hayawebsite123",
    storageBucket: "hayawebsite123.firebasestorage.app",
    messagingSenderId: "923917095943",
    appId: "1:923917095943:web:9fddda0c7df2f09afa06a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseConfig.firestore();

