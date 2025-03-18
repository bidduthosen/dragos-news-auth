// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1sW7cqoJs3UD5X39n9obc34S1F-8P2EM",
  authDomain: "dragon-news-auth-dac7a.firebaseapp.com",
  projectId: "dragon-news-auth-dac7a",
  storageBucket: "dragon-news-auth-dac7a.firebasestorage.app",
  messagingSenderId: "355993140527",
  appId: "1:355993140527:web:2c65f1809368a02bbf75da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
export default authentication;