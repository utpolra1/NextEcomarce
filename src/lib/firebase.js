import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAWw_AV4X70mq2iZDprDk9b_WVQCVPaAk",
  authDomain: "crytonext-b6938.firebaseapp.com",
  projectId: "crytonext-b6938",
  storageBucket: "crytonext-b6938.firebasestorage.app",
  messagingSenderId: "628372371499",
  appId: "1:628372371499:web:10d6d128a7ee739f9b126e"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };