import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5lsXii0xKUITHBb8xRKs0qCMtNjHSHgM",
  authDomain: "avenue-immo.firebaseapp.com",
  databaseURL:
    "https://avenue-immo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "avenue-immo",
  storageBucket: "avenue-immo.appspot.com",
  messagingSenderId: "1095138669993",
  appId: "1:1095138669993:web:124e0ff01a333b191d80b8",
};

// Vérifier si Firebase a déjà été initialisé
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Get a reference to the auth service
const auth = getAuth();

export { app, auth };
