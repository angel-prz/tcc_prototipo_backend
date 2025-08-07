import { createContext, useState } from 'react';
import { mockedPacientes } from '../data/mockedPacientes';

const MAX_TIMEOUT = 100;
const MOCKED_PACIENTES = mockedPacientes.reverse();

export const PacientesContext = createContext({
  paciente: {},
  listPacientes: [],
  setPaciente: () => {},
  loadPacientes: () => {},
  filterPacientes: () => {},
  findPacienteById: () => {},
});

const PacientesProvider = ({ children }) => {
  const [paciente, setPaciente] = useState({});
  const [listPacientes, setListPacientes] = useState([]);

  const loadPacientes = () => {
    setTimeout(() => setListPacientes(MOCKED_PACIENTES), MAX_TIMEOUT);
  };

  const findById = (id) => {
    let paciente = MOCKED_PACIENTES.find((paciente) => paciente.id === +id);
    setPaciente(paciente);
    return paciente;
  };

  const filterPacientes = (searchTerm) => {
    const filteredPacientes = MOCKED_PACIENTES.filter((paciente) => {
      return paciente.nome.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListPacientes(filteredPacientes);
  };

  return (
    <PacientesContext.Provider
      value={{
        paciente,
        listPacientes,
        setPaciente,
        loadPacientes,
        filterPacientes,
        findPacienteById: findById,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesProvider;
