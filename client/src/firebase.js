import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqfhn41R1qoubVTGtdkkN92adyatPl37M",
    authDomain: "juice-b0281.firebaseapp.com",
    projectId: "juice-b0281",
    storageBucket: "juice-b0281.appspot.com",
    messagingSenderId: "1008099954370",
    appId: "1:1008099954370:web:fa32eaeb33541b4e5af55b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage }
export default app;