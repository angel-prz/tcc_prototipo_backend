import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar"; */
import { useAuthContext } from "../contexts/AuthProvider";
import {
    X,
    Home,
    Users,
    UserRound,
    Calendar,
    ClipboardList,
    LogOut,
    Menu,
    Bell,
} from "lucide-react";

const NavLink = ({ to, icon, label, isActive, onClick = () => {} }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`${
                typeof isActive === "function" ? isActive(to) : isActive
            } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
        >
            {icon}
            <span className="ml-3">{label}</span>
        </Link>
    );
};

const ProfissionalLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const { token, user /* verifyLogin */ } = useAuthContext();
    const intervalLogin = useRef(null);
    console.log(token, user);
    const navigate = useNavigate();

    useEffect(() => {
        console.log({ user });
        intervalLogin?.current && clearInterval(intervalLogin.current);
        intervalLogin.current = setInterval(async () => {
            /*             console.log("Verificando login...");
             */
            /* verifyLogin().then((isLogged) => !isLogged && navigate("/login")); */
        }, 10000);
        return () => clearInterval(intervalLogin.current);
    }, [token]);

    const isActive = (path) => {
        return location.pathname === path
            ? "bg-blue-700 text-white"
            : "text-blue-100 hover:bg-blue-600";
    };

    const onLogout = () => {
        navigate("/logout");
    };

    if (!token) return <Navigate to="/login" />;

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <header className="bg-white border-b border-gray-200 shadow-sm z-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <button
                                    onClick={toggleSidebar}
                                    className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
                                >
                                    <span className="sr-only">
                                        Open sidebar
                                    </span>
                                    <Menu size={24} />
                                </button>
                                <div className="flex-shrink-0 flex items-center">
                                    <span className="text-blue-600 font-bold text-xl">
                                        PEP IFSul
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <Bell size={20} />
                                    </button>
                                </div>

                                <div className="relative">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                                <span className="text-white font-medium text-sm">
                                                    {user?.name[0].toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-gray-700 truncate max-w-[120px] hidden sm:block">
                                            {user?.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Sidebar for mobile */}
                <div
                    className={`fixed inset-0 flex z-40 md:hidden ${
                        sidebarOpen ? "transform-none" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-blue-800">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                onClick={toggleSidebar}
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Close sidebar</span>
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <span className="text-white font-bold text-xl">
                                    PEP IFSul
                                </span>
                            </div>
                            <nav className="mt-5 px-2 space-y-1">
                                <NavLink
                                    to="/calendario"
                                    icon={<Calendar size={20} />}
                                    label="Calendario"
                                    isActive={isActive("/calendario")}
                                    onClick={toggleSidebar}
                                />
                                <NavLink
                                    to="/pacientes"
                                    icon={<Users size={20} />}
                                    label="Pacientes"
                                    isActive={isActive("/pacientes")}
                                    onClick={toggleSidebar}
                                />
                                <NavLink
                                    to="/profissionais"
                                    icon={<UserRound size={20} />}
                                    label="Profissionais da Saúde"
                                    isActive={isActive("/profissionais")}
                                    onClick={toggleSidebar}
                                />
                                {/* <NavLink
                                    to="/ProfissionalDashboard"
                                    icon={<Home size={20} />}
                                    label="Dashboard"
                                    isActive={isActive(
                                        "/ProfissionalDashboard"
                                    )}
                                    onClick={toggleSidebar}
                                /> */}

                                {/* <NavLink
                                    to="/consultas"
                                    icon={<ClipboardList size={20} />}
                                    label="Consultas"
                                    isActive={isActive("/consultas")}
                                    onClick={toggleSidebar}
                                /> */}
                            </nav>
                        </div>

                        <div className="flex-shrink-0 flex border-t border-blue-700 p-4">
                            <button
                                onClick={onLogout}
                                className="flex items-center text-blue-100 hover:text-white w-full"
                            >
                                <LogOut size={20} className="mr-3" />
                                <span>Sair</span>
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
                                <span className="text-white font-bold text-xl">
                                    PEP IFSul
                                </span>
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1">
                                <NavLink
                                    to="/calendario"
                                    icon={<Calendar size={20} />}
                                    label="Calendario"
                                    isActive={isActive("/calendario")}
                                />
                                <NavLink
                                    to="/pacientes"
                                    icon={<Users size={20} />}
                                    label="Pacientes"
                                    isActive={isActive("/pacientes")}
                                />
                                <NavLink
                                    to="/profissionais"
                                    icon={<UserRound size={20} />}
                                    label="Profissionais da Saúde"
                                    isActive={isActive("/profissionais")}
                                />
                                {/* <NavLink
                                    to="/ProfissionalDashboard"
                                    icon={<Home size={20} />}
                                    label="Dashboard"
                                    isActive={isActive("ProfissionalDashboard")}
                                /> */}

                                {/* <NavLink
                                    to="/consultas"
                                    icon={<ClipboardList size={20} />}
                                    label="Consultas"
                                    isActive={isActive("/consultas")}
                                /> */}
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-blue-700 p-4">
                            <button
                                onClick={onLogout}
                                className="flex items-center text-blue-100 hover:text-white w-full"
                            >
                                <LogOut size={20} className="mr-3" />
                                <span>Sair</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ProfissionalLayout;
