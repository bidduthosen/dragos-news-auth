import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import authentication from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(authentication, email, pass);
    };

    const loginUserEmail = (emaii, pass) => {
        return signInWithEmailAndPassword(authentication, emaii, pass);
    }

    const logOutUser = () => {
        return signOut(authentication);
    }





    useEffect(() => {
        const unSubsribe = onAuthStateChanged(authentication, currentUser => {
            setUser(currentUser);
        })
        return () => unSubsribe()
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUserEmail,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;