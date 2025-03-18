import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    
    if(loader) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to={'/auth'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;