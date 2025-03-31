import { AuthContextProps, AuthContext } from './AuthContext';
import { useContext } from 'react';

export const UseAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};