
import { AuthResponse } from "../../../../models";

interface AuthProps {
    email: string;
    password: string;
}

export const loginService = async (authLogin: AuthProps): Promise<AuthResponse> => {
    try {
        const response = await fetch("http://localhost:4000/users/login", {
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