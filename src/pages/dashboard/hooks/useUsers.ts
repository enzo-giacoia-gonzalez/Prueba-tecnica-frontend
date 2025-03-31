import { useState, useEffect } from "react";
import { getUsersService } from "../services/getUser.service";
import { deleteUserService } from "../services/deleteUser.service";
import { updateUserService } from "../services/updateUser.service";
import { User } from "../models/user.model";
import { UserUpdateModel } from '../models/user.update.model';



export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");
    
    const fetchUsers = async () => {
        setLoading(true);
        setError("");

        try {
            const data = await getUsersService();
            setUsers(data);
        } catch (err) {
            setError((err as Error).message || "Error al obtener los usuarios");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const updateUser = async (userId: string, user: UserUpdateModel) => {
        setLoading(true);
        setError("");

        try {
            await updateUserService(userId, user);
            fetchUsers();
        } catch (err) {
            setError((err as Error).message || "Error al borrar el usuario");
        } finally {
            setLoading(false);
        }
    }

    const deleteUser = async (userId: string) => {
        setLoading(true);
        setError("");

        try {
            await deleteUserService(userId);
            fetchUsers();
        } catch (err) {
            setError((err as Error).message || "Error al borrar el usuario");
        } finally {
            setLoading(false);
        }
    };

    return { users, loading, error, deleteUser, updateUser };
};