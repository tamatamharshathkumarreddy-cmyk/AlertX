// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// Replace the placeholder values below with your actual keys from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyA-ag-4zK5X1BgNA3Pnn1qZncjErBTf4T8",
  authDomain: "alertx-70a3f.firebaseapp.com",
  projectId: "alertx-70a3f",
  storageBucket: "alertx-70a3f.firebasestorage.app",
  messagingSenderId: "68568871330",
  appId: "1:68568871330:web:306cacd042e6014e1c82fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services to be used in your HTML files
export const auth = getAuth(app);
export const db = getFirestore(app);