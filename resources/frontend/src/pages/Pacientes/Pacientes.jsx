import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, UserCircle, ArrowUpRight } from "lucide-react";
import { PacientesContext } from "../../contexts/PacienteProvider";
import ModalAddPaciente from "./ModalAddPaciente";

const Pacientes = () => {
    const { data, isLoaded, loadPacientes } = useContext(PacientesContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        loadPacientes();
        console.log(data);
    }, []);

    const filteredPacientes = data.filter((paciente) => {
        const name =
            `${paciente.user.name} ${paciente.user.name}`.toLowerCase();
        return (
            name.includes(searchTerm.toLowerCase()) ||
            paciente.user.email
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) /* ||
            paciente.aluno.matricula.includes(searchTerm) ||
            paciente.funcionario.tipo_funcionario.includes(searchTerm) */
        );
    });

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold leading-tight text-gray-800">
                        Pacientes
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Gerenciar registros dos pacientes
                    </p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                        type="button"
                        onClick={openModal}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Plus className="-ml-1 mr-2 h-4 w-4" />
                        Add Paciente
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="relative rounded-md shadow-sm max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pesquise pacientes por nome, e-mail ou telefone"
                />
            </div>

            {/* Patient List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {filteredPacientes.length > 0 ? (
                        filteredPacientes.map((paciente) => (
                            <li key={paciente.id}>
                                <Link
                                    to={`/pacientes/${paciente.id}`}
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
                                                        {paciente.user.name}
                                                    </p>
                                                    <div className="flex space-x-2 text-xs text-gray-500 mt-1">
                                                        <span>
                                                            {paciente.user.sexo}
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            Nascimento:{" "}
                                                            {new Date(
                                                                paciente.user.data_nascimento
                                                            ).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-4 text-right">
                                                    <p className="text-sm text-gray-900">
                                                        {
                                                            paciente.user
                                                                .fone_celular
                                                        }
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {paciente.user.email}
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
                            {searchTerm
                                ? "No pacientes match your search"
                                : "No pacientes found"}
                        </li>
                    )}
                </ul>
            </div>

            {/* Add Patient Modal */}
            {isModalOpen && <ModalAddPaciente onClose={closeModal} />}
        </div>
    );
};

export default Pacientes;
