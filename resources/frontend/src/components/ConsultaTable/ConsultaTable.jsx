//import './ConsultaTable.css';
import ConsultaRow from '../ConsultaRow/ConsultaRow';
import { useEffect,  useContext } from 'react';
import { ConsultasContext } from '../../contexts/ConsultaProvider';

const API_URL = import.meta.env.VITE_API_URL;

const ConsultaTable = () => {
  const { data, isLoaded, loadConsultas } = useContext(ConsultasContext);

  useEffect(() => {
    loadConsultas()
  }, []);

  console.log(API_URL);

  console.log(data);
  return (
      <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
        <thead className='bg-gray-100 text-gray-700'>
          <tr>
            <th className='px-4 py-2 border-b'>ID</th>
            <th className='px-4 py-2 border-b'>Paciente</th>
            <th className='px-4 py-2 border-b'>Profissional</th>

            <th className='px-4 py-2 border-b'>observacao</th>
            <th className='px-4 py-2 border-b'>Status</th>
          </tr>
        </thead>
        <tbody className=''>
          {isLoaded && data?.length ?
            data.map((consulta, key) => (
              <ConsultaRow key={`consulta-${key}`} consulta={consulta} />
          ))
          : <tr><td>Carregando...</td></tr>
          }
        </tbody>
      </table>
  );
};

export default ConsultaTable;
