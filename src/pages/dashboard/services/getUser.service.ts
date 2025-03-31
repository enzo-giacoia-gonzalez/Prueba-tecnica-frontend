import { User } from '../models/user.model';


export const getUsersService = async (): Promise<User[]> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(`Error: ${data.message}`);
    }

    return await response.json();
    
    
};