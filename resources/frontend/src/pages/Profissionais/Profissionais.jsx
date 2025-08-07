import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ProfissionaisContext } from "../../contexts/ProfissionalProvider";

const API_URL = import.meta.env.VITE_API_URL;

const Profissionais = () => {
  const { data, isLoaded, loadProfissionais } = useContext(ProfissionaisContext);

  useEffect(() => {
    loadProfissionais();
  }, []);

  console.log('url', API_URL);
  console.log(data);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Profissionais</h2>
      <table className="min-w-full bg-white border border-gray-200 text-sm text-left shadow-md rounded-lg overflow-hidden">
        <thead className='bg-gray-100 text-gray-700 uppercase tracking-wider'>
          <tr>
            <th className='px-4 py-3 border-b-2 border-gray-200'>ID</th>
            <th className='px-4 py-3 border-b-2 border-gray-200'>Nome</th>
            <th className='px-4 py-3 border-b-2 border-gray-200'>Tipo</th>
            <th className='px-4 py-3 border-b-2 border-gray-200'>Opcoes</th>
          </tr>
        </thead>
        <tbody>
          {isLoaded ? (
            data && data.length > 0 ? (
              data.map((profissional) => (
                <tr key={profissional.id} className='hover:bg-gray-50 transition duration-150 ease-in-out'>
                  <td className='px-4 py-3 border-b border-gray-200'>
                    <Link to={`/profissional/${profissional.id}`} className="text-blue-600 hover:underline">
                      {profissional.id}
                    </Link>
                  </td>
                  <td className='px-4 py-3 border-b border-gray-200'>
  {profissional.user.name}
</td>
<td className='px-4 py-3 border-b border-gray-200'>
  {profissional.tipo_profissional}
</td>
                  <td className='px-4 py-3 border-b border-gray-200'>
                    <button
                      onClick={() => console.log('Editar', profissional.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => console.log('Deletar', profissional.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                  Nenhum profissional encontrado.
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-4 text-center text-gray-500">
                Carregando profissionais...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profissionais;
