import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ( { children } ) => {
    const { user, loading } = useContext( AuthContext )
    const location = useLocation();

    if ( loading ) {
        return <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    }

    if ( user ) {
        return children;
    }
    return <Navigate to='/login' state={ { from: location } } replace></Navigate>
};

export default PrivateRoute;
