/* eslint-disable react-hooks/exhaustive-deps */
//import './PacienteApiTable.css';
import { useContext, useEffect } from 'react';
import PacienteRow from '../PacienteRow/PacienteRow';
import { PacientesContext } from '../../contexts/PacientesApiProvider';

const PacienteApiTable = () => {
  const { data, loadPacientes } = useContext(PacientesContext)


  useEffect(() => {
    loadPacientes()
  }, [])

  return (
    <div className="pacientes-container">
      <table className="pacientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Sexo</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Data da Consulta</th>
          </tr>
        </thead>
        <tbody>
          {!data?.lenght
            ? <p>Carregando...</p> 
            : data.map.map((paciente, key) => (
            <PacienteRow key={`paciente-${key}`} paciente={paciente} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteApiTable;
