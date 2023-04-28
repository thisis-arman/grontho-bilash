// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLdlvNXZ_8fow7h432ce7o8g-76LJQEE",
  authDomain: "grontho-bilash.firebaseapp.com",
  projectId: "grontho-bilash",
  storageBucket: "grontho-bilash.appspot.com",
  messagingSenderId: "673629040452",
  appId: "1:673629040452:web:3d1f34fb27641caffd7111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app