import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/tourist.firebase';

export const AuthContext = createContext();
const auth = getAuth( app )

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( 'Mahfuj' )


    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;