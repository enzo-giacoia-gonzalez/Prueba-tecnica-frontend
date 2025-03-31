import { UseAuthContext } from '../../context/Auth/UseAuthContext';
import { UserList } from './components/user-list/UserList';


export const Dashboard = () => {
  const { logout } = UseAuthContext()

  return (
    <>

      <nav className='navbar'>
        <button onClick={logout}>Logout</button>
      </nav>
      <UserList />
    </>
  )
}
