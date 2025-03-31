
import { AuthResponse } from "../../../../models";

interface AuthProps {
    email: string;
    password: string;
}

export const loginService = async (authLogin: AuthProps): Promise<AuthResponse> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authLogin),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(`Error: ${data.message}`);
        }

        const data: AuthResponse = await response.json();
        return data;

    } catch (error) {
        
        console.error("Error in loginService:", error);
        throw error;
    }
};