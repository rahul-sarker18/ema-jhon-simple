import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export  const Authcontext = createContext();
const auth =getAuth(app)

const UserContext = ({children}) => {

    const [usre , setUser]= useState(null);
    const [loder ,setLoder] = useState(true);

    const signup =(email ,password)=>{
        return createUserWithEmailAndPassword(auth ,email ,password)
    }

    const login =(email ,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth ,email ,password)
    }
    const signut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoder(false)
        })
        return ()=>{
            unsubscrib();
        }
    }, [])

    const authinfo ={signup , login , signut, usre , loder };

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;