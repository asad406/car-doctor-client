/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
      setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser.email)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
           return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        logIn        
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;