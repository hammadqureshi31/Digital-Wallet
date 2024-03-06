import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

export const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyBBsaa9O4EhfV2liag5GfnOHSdERKc0Oi8",
    authDomain: "digital-wallet-9135b.firebaseapp.com",
    projectId: "digital-wallet-9135b",
    storageBucket: "digital-wallet-9135b.appspot.com",
    messagingSenderId: "577900436949",
    appId: "1:577900436949:web:f9b6a6a4759c0f4d40b15c"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider



export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)
    const [credential, setcredential] = useState('')

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(true)
            else setUser(null)
        })
    }, [user])


    const signupUserWithEmailAndPass = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const loginUserWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const sendEmailForgotPass = (email) => {
        sendPasswordResetEmail(firebaseAuth, email).then(() => navigate('/reset'))
            .catch((err) => console.log(err.message))
    }
    const isLogin = user ? true : false

    const signinWithGoogle = async () => {
        const resp = await signInWithPopup(firebaseAuth, googleProvider)
        return resp
    }

    return <FirebaseContext.Provider value={{
        signupUserWithEmailAndPass,
        loginUserWithEmailAndPass,
         isLogin, 
         signOut, 
         firebaseAuth,
          sendEmailForgotPass, 
          credential, 
          setcredential,
          signinWithGoogle
    }}>
        {props.children}
    </FirebaseContext.Provider>
}

export const useFirebase = () => {
    const navigate = useNavigate()
    return useContext(FirebaseContext)
}