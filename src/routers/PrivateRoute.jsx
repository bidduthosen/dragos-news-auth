import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation()
    
    
    if(loader) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={'/auth'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;