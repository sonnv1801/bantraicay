import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWJ4HXDrGZpbkWM6CdobInmxqT4AkjKc8",
    authDomain: "conectfire-e5964.firebaseapp.com",
    projectId: "conectfire-e5964",
    storageBucket: "conectfire-e5964.appspot.com",
    messagingSenderId: "96006965570",
    appId: "1:96006965570:web:e88f49666bdf6c11d860db",
    measurementId: "G-GLJX43X7JF"
};
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

