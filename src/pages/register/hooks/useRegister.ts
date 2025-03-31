import { useState } from "react";
import { registerService } from '../services/auth-service/auth.service';
import { RegisterResponse } from '../../../models/auth-model/register.model';
import { RegisterProps } from '../interfaces/registerProps';

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<RegisterResponse | null>(null);

    const register = async (data: RegisterProps) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await registerService(data);
            setData(response);
        } catch (err) {
            setError(new Error(error?.message || "Error al registrarse"));
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error, data };
};