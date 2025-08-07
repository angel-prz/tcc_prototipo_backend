import { Link } from 'react-router-dom';
import { PacientesContext } from '../../context/PacienteProvider';
import { useState, useEffect, useContext } from 'react';
import { UserCircle, ArrowUpRight } from 'lucide-react';

const PacienteList = () => {
  const { listPacientes, loadPacientes } = useContext(PacientesContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      loadPacientes();
      setIsLoaded(true);
    }
  }, [loadPacientes, isLoaded]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {listPacientes.length > 0 ? (
          listPacientes.map((paciente) => (
            <li key={paciente.id}>
              <Link
                to={`/paciente/${paciente.id}`}
                className="block hover:bg-gray-50"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <UserCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">
                          {paciente.nome}
                        </p>
                        <div className="flex space-x-2 text-xs text-gray-500 mt-1">
                          <span>{paciente.sexo}</span>
                          <span>•</span>
                          <span>
                            DOB:{' '}
                            {new Date(
                              paciente.data_nascimento
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 text-right">
                        <p className="text-sm text-gray-900">
                          {paciente.telefone}
                        </p>
                        <p className="text-sm text-gray-500">
                          {paciente.email}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="px-4 py-5 text-center text-gray-500">
            {isLoaded ? 'No pacientes found' : 'Loading...'}
          </li>
        )}
      </ul>
    </div>
  );
};

export default PacienteList;