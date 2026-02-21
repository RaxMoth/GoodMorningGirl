import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * Firebase Configuration
 *
 * To set up Firebase:
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project
 * 3. Get your credentials from Project Settings
 * 4. Replace the values below with your actual Firebase config
 * 5. Enable required services (Auth, Firestore, Storage) in Firebase Console
 */

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
    authDomain:
        process.env.VITE_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
    storageBucket:
        process.env.VITE_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
    messagingSenderId:
        process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
    appId: process.env.VITE_FIREBASE_APP_ID || "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
