
import { User } from '../models/user.model';
import { UserUpdateModel } from '../models/user.update.model';

export const updateUserService = async (userId: string, user:UserUpdateModel): Promise<User | Error> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(`Error: ${data.message}`);
    }

    return await response.json();
};