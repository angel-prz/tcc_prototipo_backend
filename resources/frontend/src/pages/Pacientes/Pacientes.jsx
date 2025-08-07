import './pacientes.css';
import PacienteTable from '../../components/PacienteTable/PacienteTable';

const Pacientes = () => {
return (
    <div className="pacientes-container">
        <h1>Lista de Pacientes</h1>
          <PacienteTable />
    </div>
  );
};

export default Pacientes;