import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PacientesContext } from "../../contexts/PacienteProvider";
import ConfirmDialog from '../../components/ConfirmDialog';

import {
  Calendar, Edit, Trash2, ChevronLeft,
  FilePlus, ClipboardList, UserCircle, ArrowUpRight
} from 'lucide-react';

const PacienteShow = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoaded, loadPacientes, deletePaciente, loadConsultas } = useContext(PacientesContext);
    const [paciente, setPaciente] = useState(null);
    const [consultas, setConsultas] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    useEffect(() => {
        loadPacienteData();
    }, [id]);

    const loadPacienteData = async () => {
        setLoading(true);
        try {
            // Carrega dados do paciente específico
            await loadPacientes(id);
        } catch (error) {
            console.error("Erro ao carregar dados do paciente:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const foundPaciente = data.find(p => p.id === parseInt(id));
            setPaciente(foundPaciente);

            // Carrega consultas separadamente
            if (foundPaciente) {
                loadConsultasData(foundPaciente.id);
            }
        }
    }, [data, id]);

    const loadConsultasData = async (pacienteId) => {
        try {
            const consultasData = await loadConsultas(pacienteId);
            setConsultas(consultasData.consultas);
            console.log("Consultas carregadas:", consultasData);
        } catch (error) {
            console.error("Erro ao carregar consultas:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePaciente(paciente.id);
            navigate("/pacientes");
        } catch (error) {
            console.error("Erro ao deletar paciente:", error);
        }
    };

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!paciente) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Paciente não encontrado</p>
                <Link to="/pacientes" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                    Voltar para a lista
                </Link>
            </div>
        );
    }

    const idade = calculateAge(paciente.user.data_nascimento);

    return (
        <div className="space-y-6 animate-fadeIn">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between">
                <Link to="/pacientes" className="text-blue-600 hover:text-blue-700 flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Voltar para lista de pacientes
                </Link>
            </div>

            {/* Informações do Paciente */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Informações do paciente
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Dados pessoais e informações de contato
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            title="Editar paciente"
                        >
                            <Edit className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setIsDeleteDialogOpen(true)}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            title="Excluir paciente"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row">
                        <div className="py-6 px-6 bg-blue-50 flex items-center justify-center sm:w-48">
                            <div className="bg-white rounded-full p-3 shadow-sm">
                                <UserCircle className="h-16 w-16 text-blue-600" />
                            </div>
                        </div>
                        <div className="px-6 py-6 flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {paciente.user.name}
                            </h2>
                            <p className="text-gray-600 mt-1">
                                {idade} anos • {paciente.user.sexo === 'M' ? 'Masculino' : 'Feminino'}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                CPF: {paciente.user.cpf}
                            </p>
                        </div>
                    </div>

                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 px-6 py-4">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Data de Nascimento</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {new Date(paciente.user.data_nascimento).toLocaleDateString('pt-BR')}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900">{paciente.user.email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Telefones</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {paciente.user.fone_celular && `Celular: ${paciente.user.fone_celular}`}
                                {paciente.user.fone_fixo && paciente.user.fone_celular && <br />}
                                {paciente.user.fone_fixo && `Fixo: ${paciente.user.fone_fixo}`}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Tipo de Paciente</dt>
                            <dd className="mt-1 text-sm text-gray-900 capitalize">
                                {paciente.tipo_paciente?.replace('_', ' ') || 'Não informado'}
                            </dd>
                        </div>
                        {paciente.matricula && (
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Matrícula</dt>
                                <dd className="mt-1 text-sm text-gray-900">{paciente.matricula}</dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>

            {/* Seção de Consultas */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Consultas
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Histórico de atendimentos
                        </p>
                    </div>
                    <button
                        onClick={() => setIsAppointmentModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <FilePlus className="-ml-1 mr-2 h-4 w-4" />
                        Nova Consulta
                    </button>
                </div>

                {consultas.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {consultas.map(consulta => {
                            const statusColors = {
                                agendada: 'bg-blue-100 text-blue-800',
                                finalizada: 'bg-green-100 text-green-800',
                                cancelada: 'bg-red-100 text-red-800',
                                confirmada: 'bg-yellow-100 text-yellow-800'
                            };

                            return (
                                <li key={consulta.id}>
                                    <Link
                                        to={`/consultas/${consulta.id}`}
                                        className="block hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <Calendar className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-blue-600">
                                                            {consulta.profissional?.user?.name || 'Profissional não informado'}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {new Date(consulta.data_hora).toLocaleString('pt-BR')}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        statusColors[consulta.status] || 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {consulta.status?.charAt(0).toUpperCase() + consulta.status?.slice(1) || 'Status desconhecido'}
                                                    </span>
                                                    <ArrowUpRight className="ml-2 h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                            {consulta.notes && (
                                                <div className="mt-2">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <ClipboardList className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                        {consulta.notes.length > 100
                                                            ? consulta.notes.substring(0, 100) + '...'
                                                            : consulta.notes
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="px-4 py-12 text-center text-gray-500">
                        <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-4">Nenhuma consulta encontrada para este paciente</p>
                    </div>
                )}
            </div>

            {/* Modais e Diálogos */}
            {isEditModalOpen && (
                <PatientForm
                    paciente={paciente}
                    onClose={() => setIsEditModalOpen(false)}
                    onSuccess={loadPacienteData}
                />
            )}

            {isAppointmentModalOpen && (
                <AppointmentForm
                    patientId={paciente.id}
                    onClose={() => setIsAppointmentModalOpen(false)}
                    onSuccess={() => loadConsultasData(paciente.id)}
                />
            )}

            {isDeleteDialogOpen && (
                <ConfirmDialog
                    title="Excluir Paciente"
                    message={`Tem certeza que deseja excluir ${paciente.user.name}? Esta ação não pode ser desfeita.`}
                    confirmText="Excluir"
                    cancelText="Cancelar"
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleteDialogOpen(false)}
                    variant="danger"
                />
            )}
        </div>
    );
};

export default PacienteShow;
