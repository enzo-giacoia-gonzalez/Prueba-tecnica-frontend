import { useState } from 'react';
import CustomForm from '../../../../components/custom-form/CustomForm';
import InputForm from '../../../../components/custom-form/components/custom-input/CustomInput';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormValuesEditModel, schemaUpdate } from '../../models/form.edit.model';
import { UserUpdateModel } from '../../models/user.update.model';

interface Props {
    id: string,
    email: string,
    status: boolean,
    role: string,
    deleteUser(id: string): void,
    updateUser(id: string, user: UserUpdateModel): void
}

export const UserListItem = ({ id, email, status, role, deleteUser, updateUser }: Props) => {

    const [editing, setEditing] = useState(false);

    const { handleSubmit, control, formState: { errors } } = useForm<FormValuesEditModel>({
        resolver: zodResolver(schemaUpdate),
        mode: "onBlur",
        defaultValues: {
            email: email,
            role: role as "ADMIN" | "USER" | undefined,
        }
    });

    const handleDelete = async (userId: string) => {
        if (window.confirm("¿Estás seguro de que deseas borrar este usuario?")) {
            deleteUser(userId);
        }
    };

    const onSubmit: SubmitHandler<FormValuesEditModel> = async (data: UserUpdateModel) => {
        if (window.confirm("¿Estás seguro de que deseas guardar los cambios?")) {
            console.log(data)
            updateUser(id, data);
            setEditing(false);
        }
    }



    return (

        <li className="user-list-item" key={id}>
            {editing ?
                <CustomForm onSubmit={handleSubmit(onSubmit)}>
                    <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
                    <InputForm name="role" control={control} label="Rol" disabled={localStorage.getItem("role") !== "ADMIN"} type="text" error={errors.role} />

                    <div className='actions'>
                        <button type='submit'>Guardar</button>
                        <button onClick={() => setEditing(false)}>Cancelar</button>
                    </div>
                </CustomForm>
                :
                <>
                    <p><strong>email:</strong> {email}</p>
                    <p><strong>status:</strong> {status ? "Habilitado" : "Deshabilitado"}</p>
                    <p><strong>Rol:</strong> {role}</p>

                    <div className='actions'>
                        {localStorage.getItem("role") === "ADMIN" && <button onClick={() => handleDelete(id)}>Borrar</button>}
                        {(localStorage.getItem("role") === "ADMIN"
                            ||
                            localStorage.getItem("userID") === id) && <button onClick={() => setEditing(true)}>Editar</button>}
                    </div>
                </>
            }
        </li>
    )
}
