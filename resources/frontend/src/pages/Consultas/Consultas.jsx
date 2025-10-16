import { Plus, Search, ArrowUpRight, Filter } from 'lucide-react';

import ConsultasList from '../../components/ConsultasList.jsx/ConsultasCard';

const Consultas = () => {

  return (
        <div className="space-y-6 animate-fadeIn">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold leading-tight text-gray-800">
                        Consultas
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Gerenciar consultas para pacientes e profissionais de saúde
                    </p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                        type="button"
                        /* onClick={openModal} */
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Plus className="-ml-1 mr-2 h-4 w-4" />
                        Add Consulta
                    </button>
                </div>
            </div>
            <ConsultasList />
        </div>
    );
};

export default Consultas;
