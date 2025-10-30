import { Outlet, Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Activity size={48} className="text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Prontuario Eletrônico do Paciente - IFSul
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Outlet />
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500 text-center">
        <Link to="/profissionais">Profissionais</Link>
        <br></br>
        <Link to="/horarios">Horários Profissionais</Link>
      </div>
    </div>
  );
};

export default AuthLayout;