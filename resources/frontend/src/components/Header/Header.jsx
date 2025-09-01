import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthProvider';
import { Bell, Menu } from 'lucide-react';

export const Header = () => {

    const { user } = useAuthContext();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <header className="bg-white border-b border-gray-200 shadow-sm z-10">
                <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                    <button
                        onClick={toggleSidebar}
                        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Menu size={24} />
                    </button>
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-blue-600 font-bold text-xl">PEP IFSul</span>
                    </div>
                    </div>

                    <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span className="sr-only">View notifications</span>
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
        </>
    );
};
