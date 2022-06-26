// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHs9DgAfFMZMZz1XbFAo9JM5yXCR-9l4c",
  authDomain: "travel-master-c95cb.firebaseapp.com",
  projectId: "travel-master-c95cb",
  storageBucket: "travel-master-c95cb.appspot.com",
  messagingSenderId: "927494560085",
  appId: "1:927494560085:web:148fd9310e62850905b7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;