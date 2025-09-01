import { useContext, useEffect } from "react";
import { ConsultasContext } from '../../contexts/ConsultaProvider';
import { Link } from "react-router-dom";
import { Calendar, Plus, Search, ArrowUpRight, Filter } from 'lucide-react';

const statusColors = {
  agendada: "bg-blue-100 text-blue-800",
  realizada: "bg-green-100 text-green-800",
  cancelada: "bg-red-100 text-red-800",
  faltou: "bg-yellow-100 text-yellow-800"
};

const ConsultasCard = ({ searchTerm, statusFilter }) => {

  const { data, isLoaded, loadConsultas } = useContext(ConsultasContext);

  useEffect(() => {
    loadConsultas();
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
        {isLoaded && data?.length > 0 ? (
          data.map((consulta) => (
                <li key={consulta.id}>
                <Link to={`/consultas/${consulta.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-blue-600">
                            {consulta.paciente.user.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            com {consulta.profissional.user.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 text-right">
                          <p className="text-sm text-gray-900">
                            {consulta.data}
                          </p>
                          <p className="text-sm text-gray-500">
                            {consulta.hora}
                          </p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[consulta.status]}`}>
                          {consulta.status.charAt(0).toUpperCase() + consulta.status.slice(1)}
                        </span>
                        <ArrowUpRight className="ml-2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    {consulta.observacao && (
                      <div className="mt-2 pl-14">
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {consulta.observacao}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-5 text-center text-gray-500">
              {searchTerm || statusFilter !== 'all' ? 'No consultas match your search' : 'No consultas found'}
            </li>
          )}
        </ul>
      </div>

  );
};

export default ConsultasCard;
