import { Link } from 'react-router-dom';
const PacienteRow = ({ paciente }) => {
  return (
    <tr>
      <td>
        <Link to={`/paciente/${paciente.id}`}>{paciente.id}</Link>
      </td>
      <td>{paciente.name}</td>
      <td>{paciente.data_nascimento}</td>
      <td>{paciente.cpf}</td>
      <td>{paciente.sexo}</td>
      <td>{paciente.email}</td>
      <td>{paciente.telefone}</td>
      <td>{paciente.data_consulta}</td>
    </tr>
  );
};

export default PacienteRow;
