

export const deleteUserService = async (userId: string): Promise<void | Error> => {
    const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(`Error: ${data.message}`);
    }

    return await response.json();
};