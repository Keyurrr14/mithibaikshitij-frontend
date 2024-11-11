import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBja2OqSDp_KgRmPH9H7Nd8YP6s7W9Roxw",
    authDomain: "mithibai-kshitij.firebaseapp.com",
    databaseURL: "https://mithibai-kshitij-default-rtdb.firebaseio.com",
    projectId: "mithibai-kshitij",
    storageBucket: "mithibai-kshitij.firebasestorage.app",
    messagingSenderId: "74708424992",
    appId: "1:74708424992:web:597da26fbd0fe12d31df45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };