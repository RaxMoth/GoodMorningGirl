/**
 * Firebase (OPTIONAL integration)
 * ===============================
 * This file is NOT imported anywhere by default, so Firebase is never bundled
 * unless you use it. To enable it:
 *   1. Create a project at https://console.firebase.google.com
 *   2. Copy your web app credentials into `.env` (see `.env.example`)
 *   3. Import `auth` / `db` / `storage` from this file where you need them.
 *
 * `isFirebaseConfigured` lets you guard code paths so the demo keeps working
 * with the mock auth store (`src/stores/useAuthStore.ts`) until you're ready.
 */

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/** True once the required env vars are present. */
export const isFirebaseConfigured = Boolean(
    firebaseConfig.apiKey && firebaseConfig.projectId,
);

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

if (isFirebaseConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
} else if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info(
        "[firebase] Not configured — using mock auth. Add VITE_FIREBASE_* vars to enable.",
    );
}

export { app, auth, db, storage };
