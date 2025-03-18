import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import authentication from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, pass) => {
        setLoader(true);
        return createUserWithEmailAndPassword(authentication, email, pass);
    };

    const loginUserEmail = (emaii, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(authentication, emaii, pass);
    }

    const logOutUser = () => {
        setLoader(true)
        return signOut(authentication);
    }





    useEffect(() => {
        const unSubsribe = onAuthStateChanged(authentication, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => unSubsribe()
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUserEmail,
        logOutUser,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;