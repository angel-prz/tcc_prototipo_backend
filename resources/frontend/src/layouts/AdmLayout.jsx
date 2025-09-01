import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';
import logoutIcon from '../assets/logout.svg';


const Dashboard = () => {

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/logout");
  };

  return (
    <>
        <header className="dashboard__header">
            <div className="logo">
                <Link to="/">
                    {/* <img src={appLogo} /> */}
                </Link>
            </div>
            {/* </DefaultLogo> */}
            <div>
                Bem vindo,{user?.name} !
            </div>
            <div className="logout">
                <a href="#" onClick={onLogout}>
                    <img src={logoutIcon} />
                </a>
            </div>
        </header>
        <main className="flex flex-grow">
            <aside className="w-64 bg-[#0064a2] text-white p-4 flex flex-col space-y-2">
                {/*<Link to="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-700
                    transition-colors duration-200">Dashboard</Link> */}
                <Link to="/users" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors duration-200">Users</Link>
                <Link to="/adm/consultas" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors duration-200">Consultas</Link>
                {/* <Link to="/cadastro" className="block py-2 px-3 rounded hover:bg-gray-700
                    transition-colors duration-200">Novo User</Link> */}
            </aside>
            <section className="flex-1 p-6 bg-gray-100 overflow-auto">
                <Outlet />
            </section>
        </main>
    </>
  );
};

export default Dashboard;
