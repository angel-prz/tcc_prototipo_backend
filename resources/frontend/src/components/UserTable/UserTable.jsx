//import './UserTable.css';
import UserRow from '../UserRow/UserRow';
import { useEffect,  useContext } from 'react';
import { UsersContext } from '../../contexts/UserProvider';

const API_URL = import.meta.env.VITE_API_URL;

const UserTable = () => {
  const { data, isLoaded, loadUsers } = useContext(UsersContext)

  useEffect(() => {
    loadUsers()
  }, [])

  console.log(API_URL);

  console.log(data);
  return (
      <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
        <thead className='bg-gray-100 text-gray-700'>
          <tr>
            <th className='px-4 py-2 border-b'>ID</th>
            <th className='px-4 py-2 border-b'>Nome</th>
            <th className='px-4 py-2 border-b'>Data de Nascimento</th>
            <th className='px-4 py-2 border-b'>Email</th>
            <th className='px-4 py-2 border-b'>Tipo de Usuario</th>
          </tr>
        </thead>
        <tbody className='hover:bg-gray-50'>
          {isLoaded && data?.length ? 
            data.map((user, key) => (
              <UserRow key={`user-${key}`} user={user} />
          ))
          : <tr><td>Carregando...</td></tr>
          }
        </tbody>
      </table>
  );
};

export default UserTable;
