import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PacientesContext } from "../../contexts/PacienteProvider";
import ConfirmDialog from "../../components/ConfirmDialog";
import ModalEditPaciente from "../Pacientes/ModalEditPaciente";
import { useAuthContext } from "../../contexts/AuthProvider";

import {
    Calendar,
    Edit,
    Trash2,
    ChevronLeft,
    FilePlus,
    ClipboardList,
    UserCircle,
    ArrowUpRight,
} from "lucide-react";

const PacienteShow = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoaded, loadPacientes, deletePaciente, loadConsultas } =
        useContext(PacientesContext);
    const [paciente, setPaciente] = useState(null);
    const [consultas, setConsultas] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { user } = useAuthContext();

    const [activeTab, setActiveTab] = useState("informacao");

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
            const foundPaciente = data.find((p) => p.id === parseInt(id));
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

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
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
                <Link
                    to="/pacientes"
                    className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                >
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
                <Link
                    to="/pacientes"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                >
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
                                {idade} anos •{" "}
                                {paciente.user.sexo === "M"
                                    ? "Masculino"
                                    : "Feminino"}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                CPF:{" "}
                                {user.id === paciente.user.id
                                    ? paciente.user.cpf
                                    : "************"}
                            </p>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px px-6">
                            <button
                                onClick={() => setActiveTab("informacao")}
                                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                    activeTab === "informacao"
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            >
                                Informações Gerais
                            </button>
                            <button
                                onClick={() => setActiveTab("medica")}
                                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                    activeTab === "medica"
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            >
                                Saúde Médica
                            </button>
                            {user.tipo_usuario !== "bolsista" && (
                                <button
                                    onClick={() => setActiveTab("odontologica")}
                                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === "odontologica"
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                                >
                                    Saúde Bucal
                                </button>
                            )}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="px-6 py-6">
                        {activeTab === "informacao" && (
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Data de Nascimento
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(
                                            paciente.user.data_nascimento
                                        ).toLocaleDateString()}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Endereço de Email
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {paciente.user.email}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Telefone
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        Fixo: {paciente.user.fone_fixo} <br />
                                        Celular: {paciente.user.fone_celular}
                                    </dd>
                                </div>
                                {/* <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Endereço
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {paciente.user.endereco}
                                    </dd>
                                </div> */}
                            </dl>
                        )}

                        {activeTab === "medica" && (
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-md font-medium text-gray-900 mb-4">
                                        Histórico de Saúde Médica
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Alergias
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_medica
                                                    ?.alergias ||
                                                    "Nenhuma alergia registrada"}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Doenças Crônicas
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_medica
                                                    ?.ulcera ||
                                                    "Não tem ulcera"}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Cirurgias
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_medica
                                                    ?.cirurgias ||
                                                    "Nenhuma cirurgia registrada"}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Tonturas / Convulsões / Desmaios
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_medica
                                                    ?.tonturas_convulsoes_desmaios ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Medicação
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.medicacao ||
                                                    "Nenhuma medicacao registrada"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Problema Cardiaco
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.problema_cardiaco ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Problema Coagulação
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.problema_coagulacao ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Febre Reumatica
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.febre_reumatica ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Psicopatias
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.psicopatias ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Medico
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.medico ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Hepatite
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.hepatite ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className=" bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Diabete
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.diabete ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Problemas respiratórios
                                            </h5>
                                            <p className="text-sm text-gray-600 whitespace-pre-line">
                                                {paciente?.saude_medica
                                                    ?.problemas_respiratorios ||
                                                    "Nada registrado"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "odontologica" && (
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-md font-medium text-gray-900 mb-4">
                                        Histórico de Saúde Bucal
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Gengivite
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_odontologica
                                                    ?.gengivite ||
                                                    "Não registrado"}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Periodontite
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_odontologica
                                                    ?.periodontite ||
                                                    "Não registrado"}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                                Outras Patologias
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                {paciente?.saude_odontologica
                                                    ?.outras_patologias ||
                                                    "Não registrado"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                            Tratamentos Anteriores
                                        </h5>
                                        <p className="text-sm text-gray-600 whitespace-pre-line">
                                            {paciente?.saudeOdontologica
                                                ?.tratamentos_anteriores ||
                                                "Nenhum tratamento anterior registrado"}
                                        </p>
                                    </div>
                                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                            Próteses/Aparelhos
                                        </h5>
                                        <p className="text-sm text-gray-600 whitespace-pre-line">
                                            {paciente?.saudeOdontologica
                                                ?.proteses_aparelhos ||
                                                "Nenhuma prótese ou aparelho registrado"}
                                        </p>
                                    </div>
                                    {/* <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2">
                                            Observações Adicionais
                                        </h5>
                                        <p className="text-sm text-gray-600 whitespace-pre-line">
                                            {paciente.dentalHealth?.notes ||
                                                "Nenhuma observação adicional"}
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        )}
                    </div>
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
                        {consultas.map((consulta) => {
                            const statusColors = {
                                agendada: "bg-blue-100 text-blue-800",
                                finalizada: "bg-green-100 text-green-800",
                                cancelada: "bg-red-100 text-red-800",
                                confirmada: "bg-yellow-100 text-yellow-800",
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
                                                            {consulta
                                                                .profissional
                                                                ?.user?.name ||
                                                                "Profissional não informado"}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {new Date(
                                                                consulta.data_hora
                                                            ).toLocaleString(
                                                                "pt-BR"
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                            statusColors[
                                                                consulta.status
                                                            ] ||
                                                            "bg-gray-100 text-gray-800"
                                                        }`}
                                                    >
                                                        {consulta.status
                                                            ?.charAt(0)
                                                            .toUpperCase() +
                                                            consulta.status?.slice(
                                                                1
                                                            ) ||
                                                            "Status desconhecido"}
                                                    </span>
                                                    <ArrowUpRight className="ml-2 h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                            {consulta.notes && (
                                                <div className="mt-2">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <ClipboardList className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                        {consulta.notes.length >
                                                        100
                                                            ? consulta.notes.substring(
                                                                  0,
                                                                  100
                                                              ) + "..."
                                                            : consulta.notes}
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
                        <p className="mt-4">
                            Nenhuma consulta encontrada para este paciente
                        </p>
                    </div>
                )}
            </div>

            {/* Modais e Diálogos */}
            {isEditModalOpen && (
                <ModalEditPaciente
                    editedPaciente={paciente}
                    onClose={() => setIsEditModalOpen(false)}
                    onSuccess={loadPacienteData}
                />
            )}

            {/* {isAppointmentModalOpen && (
                <ConsultaForm
                    paciente_id={paciente.id}
                    onClose={() => setIsAppointmentModalOpen(false)}
                    onSuccess={() => loadConsultas(paciente.id)}
                />
            )} */}

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
