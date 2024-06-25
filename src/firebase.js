// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "golfproject-10d9b.firebaseapp.com",
  databaseURL: "https://golfproject-10d9b-default-rtdb.firebaseio.com",
  projectId: "golfproject-10d9b",
  storageBucket: "golfproject-10d9b.appspot.com",
  messagingSenderId: "1090298400054",
  appId: "1:1090298400054:web:d39e24c6db73ea4fd4b797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;