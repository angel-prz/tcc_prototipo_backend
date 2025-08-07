import { Link } from 'react-router-dom';
const UserRow = ({ user }) => {
  return (
    <tr className='hover:bg-gray-50'>
      {/* <td>
        <Link to={`/user/${user.id}`}>{user.id}</Link>
      </td> */}
      <td className='px-4 py-2 border-b'>{user.id}</td>
      <td className='px-4 py-2 border-b'>{user.name}</td>
      <td className='px-4 py-2 border-b'>{user.data_nascimento}</td>
      <td className='px-4 py-2 border-b'>{user.email}</td>
      <td className='px-4 py-2 border-b'>{user.tipo_usuario}</td>
    </tr>
  );
};

export default UserRow;
  