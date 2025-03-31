import  { createContext, useState } from "react";


import { loginService } from '../../pages/login/services/login-service/login.service';
import { AuthResponse } from '../../models/auth-model/auth.model';
import { useNavigate } from 'react-router-dom';


export interface AuthContextProps {
    loading: boolean;
    error: string;
    data: AuthResponse | null;
    login: (email: string, password: string) => Promise<AuthResponse | undefined>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<AuthResponse | null>(null);

    const navigate = useNavigate(); 

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError("");


        try {
            const response = await loginService({ email, password });
            
            if (!response) {
                throw new Error("No se pudo iniciar sesión");
            }
            
            localStorage.setItem("token", response.token);
            localStorage.setItem("role", response.user.role);
            localStorage.setItem("userID", response.user.id);

            setData(response);

            navigate("/dashboard");

            return response;

        } catch (err) {
            setError((err as Error).message || "Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("userID");
        setData(null);
        navigate("/auth/login");
    };

    return (
        <AuthContext.Provider value={{ loading, error, data, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
    
};