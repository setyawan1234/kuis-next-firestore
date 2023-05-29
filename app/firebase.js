// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaX5hBPRpYh7HDVB3vRcxkNkxgt63ajfE",
  authDomain: "kuis2-1cc60.firebaseapp.com",
  projectId: "kuis2-1cc60",
  storageBucket: "kuis2-1cc60.appspot.com",
  messagingSenderId: "587137646776",
  appId: "1:587137646776:web:634826911309932d43f44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
