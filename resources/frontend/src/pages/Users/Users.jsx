import UserTable from '../../components/UserTable/UserTable';

const Users = () => {
return (
    <div className="overflow-x-auto">
        <h1>Lista de Usuarios</h1>
          <UserTable />
    </div>
  );
};

export default Users;