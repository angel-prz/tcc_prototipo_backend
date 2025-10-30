import './PacienteTable.css';
import PacienteRow from '../PacienteRow/PacienteRow';
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const PacienteTable = () => {
   const [listPacientes, setListPacientes] = useState([]);

  console.log(API_URL);

  useEffect(() => {
  const loadData = async () => {
      try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        console.log(data)
        setListPacientes(data.data);
      } catch (error) {
        console.error(error)
      } finally {
        console.log("Exemplo com async/await!!")
      }
    }
    loadData();
  }, [])
  
  console.log(listPacientes);
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
          {listPacientes.map((paciente, key) => (
            <PacienteRow key={`paciente-${key}`} paciente={paciente} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteTable;
