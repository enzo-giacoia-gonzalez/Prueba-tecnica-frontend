import { User } from '../models/user.model';


export const getUsersService = async (): Promise<User[]> => {
    const response = await fetch("http://localhost:4000/users", {
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