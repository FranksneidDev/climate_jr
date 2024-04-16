import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';
import {alertSuccess} from "../Utils/AlertSuccess.tsx";
import {alertError} from "../Utils/AlertError.tsx";



const firebaseConfig = {
    apiKey: "AIzaSyBuv4XkSWIxPThHoo2LzPTwUEBUmTogFrg",
    authDomain: "climate-216b4.firebaseapp.com",
    projectId: "climate-216b4",
    storageBucket: "climate-216b4.appspot.com",
    messagingSenderId: "939836034882",
    appId: "1:939836034882:web:d5301381fba9bac51242db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export async function uploadFile(file:any, nameFile:string) {
    const storageRef = ref(storage, nameFile);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}

export async function DeleteFIle(nameFile:string) {
    const desertRef = ref(storage, nameFile);
    // Delete the file
deleteObject(desertRef).then(() => {
    // File deleted successfully
    console.log('se ha eliminado correctamente');
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error, 'ha ocurrido un error');
  });
}
// auth.currentUser?.getIdTokenResult().then((idTokenResult) => {
//     if (!idTokenResult.)
// });

export function register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then((userLog) => {
        console.log(userLog.user);
        alertSuccess('Registro exitoso')
    }).catch((error) => {
        console.log(error.message);
        alertError(error.message);
    })
}

export async function login(email: string, password: string) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user.user;
    } catch (error) {
        return error;
    }
}