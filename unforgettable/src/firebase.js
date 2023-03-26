import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyA3POZOPvHf84O--ReoyOqlV0uTUiSYgFY",
    authDomain: "unforgettable-f0259.firebaseapp.com",
    projectId: "unforgettable-f0259",
    storageBucket: "unforgettable-f0259.appspot.com",
    messagingSenderId: "221556768505",
    appId: "1:221556768505:web:7427c46e26112d2ce3ac28",
    measurementId: "G-C48SP4DX6X"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);