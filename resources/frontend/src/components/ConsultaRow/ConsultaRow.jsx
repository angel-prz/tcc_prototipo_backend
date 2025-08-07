import { Link } from 'react-router-dom';
const ConsultaRow = ({ consulta }) => {

	//console.log(consulta.paciente.user.name);

  return (
    <tr className='hover:bg-gray-50'>
      {/* <td>
        <Link to={`/consulta/${consulta.id}`}>{consulta.id}</Link>
      </td> */}
      <td className='px-4 py-2 border-b'>{consulta.id}</td>
			<td className='px-4 py-2 border-b'>{consulta.paciente.user.name}</td>
      <td className='px-4 py-2 border-b'>{consulta.profissional.user.name}</td>
      <td className='px-4 py-2 border-b'>{consulta.observacao}</td>
			<td className='px-4 py-2 border-b'>{consulta.status}</td>
    </tr>
  );
};

export default ConsultaRow;
