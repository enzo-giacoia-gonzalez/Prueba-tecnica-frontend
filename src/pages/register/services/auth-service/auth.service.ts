import { RegisterResponse } from '../../../../models/auth-model/register.model';
import { RegisterProps } from '../../interfaces/registerProps';


export const registerService = async (data: RegisterProps): Promise<RegisterResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
        const data = await response.json();
        throw new Error(`Error: ${data.message}`);
    }
    
    return response.json();
};