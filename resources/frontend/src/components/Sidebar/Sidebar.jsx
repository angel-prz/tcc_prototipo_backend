import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  X, Home, Users, UserRound, Calendar, ClipboardList,
  LogOut,
} from 'lucide-react';

const NavLink = ({ to, icon, label, isActive, onClick = () => {} }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${typeof isActive === 'function' ? isActive(to) : isActive} group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  );
};

export const Sidebar = (/* { layoutType } */) => {

    const isActive = (path) => {
        return location.pathname === path ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-600';
    };

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/logout");
    };

    return (
        <>
            {/* Sidebar for mobile */}
            <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'transform-none' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-blue-800">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                                onClick={toggleSidebar}
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                            <span className="sr-only">
                                Close sidebar
                            </span>
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                            <span className="text-white font-bold text-xl">PEP IFSul</span>
                        </div>
                        <nav className="mt-5 px-2 space-y-1">
                            <NavLink to="/ProfissionalDashboard" icon={<Home size={20} />} label="Dashboard" isActive={isActive('/ProfissionalDashboard')} onClick={toggleSidebar} />
                            <NavLink to="/pacientes" icon={<Users size={20} />} label="Pacientes" isActive={isActive('/pacientes')} onClick={toggleSidebar} />
                            <NavLink to="/profissionais" icon={<UserRound size={20} />} label="Profissionais da Saúde" isActive={isActive('/profissionais')} onClick={toggleSidebar} />
                            <NavLink to="/consultas" icon={<ClipboardList size={20} />} label="Consultas" isActive={isActive('/consultas')} onClick={toggleSidebar} />
                            <NavLink to="/calendario" icon={<Calendar size={20} />} label="Calendario" isActive={isActive('/calendario')} onClick={toggleSidebar} />
                        </nav>
                    </div>

                    <div className="flex-shrink-0 flex border-t border-blue-700 p-4">
                        <button
                            onClick={onLogout}
                            className="flex items-center text-blue-100 hover:text-white w-full"
                        >
                            <LogOut size={20} className="mr-3" />
                            <span>
                                Sair
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 bg-blue-800">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <span className="text-white font-bold text-xl">PEP IFSul</span>
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1">
                            <NavLink to="/ProfissionalDashboard" icon={<Home size={20} />} label="Dashboard" isActive={isActive('ProfissionalDashboard')} />
                            <NavLink to="/pacientes" icon={<Users size={20} />} label="Pacientes" isActive={isActive('/pacientes')} />
                            <NavLink to="/profissionais" icon={<UserRound size={20} />} label="Profissionais da Saúde" isActive={isActive('/profissionais')} />
                            <NavLink to="/consultas" icon={<ClipboardList size={20} />} label="Consultas" isActive={isActive('/consultas')} />
                            <NavLink to="/calendario" icon={<Calendar size={20} />} label="Calendario" isActive={isActive('/calendario')} />
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-blue-700 p-4">
                        <button
                            onClick={onLogout}
                            className="flex items-center text-blue-100 hover:text-white w-full"
                        >
                            <LogOut size={20} className="mr-3" />
                            <span>
                                Sair
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
