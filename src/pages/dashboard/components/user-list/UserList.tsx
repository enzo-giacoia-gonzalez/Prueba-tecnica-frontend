import { useUsers } from '../../hooks/useUsers';
import { UserListItem } from './UserListItem';

export const UserList = () => {

    const { users, loading, error, deleteUser, updateUser } = useUsers();

    


    return (
        <div>
            
            <h1>Lista de Usuarios</h1>
            {error && <p className="error">{error}</p>}

            {loading && <p>Loading...</p>}

            <ul className="user-list">
                {
                    users.map((user) => (
                        <UserListItem
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            status={user.status}
                            role={user.role}
                            deleteUser={deleteUser}
                            updateUser={updateUser} />
                    ))
                }
            </ul>
        </div>
    )
}
