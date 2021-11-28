import React, { createContext } from 'react';
import useAddClass from '../hooks/useAddClass';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const addClass = useAddClass();

    return (
        <AuthContext.Provider value={addClass}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;