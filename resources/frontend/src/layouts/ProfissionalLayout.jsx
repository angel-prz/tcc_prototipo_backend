import { Link, Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

const ProfissionalLayout = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <Sidebar />
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

    )
}

export default ProfissionalLayout;

