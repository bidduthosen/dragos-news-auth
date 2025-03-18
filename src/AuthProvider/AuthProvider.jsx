import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import authentication from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(authentication, email, pass);
    }

    useEffect(() => {
        const unSubsribe = onAuthStateChanged(authentication, currentUser => {
            setUser(currentUser);
        })
        return () => unSubsribe()
    }, [])

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;