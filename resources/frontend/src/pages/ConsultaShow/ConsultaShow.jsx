import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
    Calendar,
    User,
    UserCircle,
    Edit,
    Trash2,
    ChevronLeft,
    Clock,
    CheckCircle,
    XCircle,
    AlertTriangle,
} from "lucide-react";
import { ConsultasContext } from "../../contexts/ConsultaProvider";
import { PacientesContext } from "../../contexts/PacienteProvider";
import ConfirmDialog from "../../components/ConfirmDialog";
import ConsultaForm from "../../components/ConsultaForm/ConsultaForm";
import { getHora, getData } from "../../utils/dataHora";

const statusColors = {
    agendada: "bg-blue-100 text-blue-800",
    finalizada: "bg-green-100 text-green-800",
    cancelada: "bg-red-100 text-red-800",
    faltou: "bg-yellow-100 text-yellow-800",
};

const statusLabels = {
    agendada: "Agendada",
    finalizada: "Finalizada",
    cancelada: "Cancelada",
    /* faltou: "Faltou", */
};

const ConsultaShow = () => {
    const { id } = useParams();
    const { data, isLoaded, loadConsultas, editConsulta, deleteConsulta } =
        useContext(ConsultasContext);
    const { editPaciente } = useContext(PacientesContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [consulta, setConsulta] = useState(location.state?.consulta ?? null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isAtendimento, setIsAtendimento] = useState(false);
    const [atendimentoTab, setAtendimentoTab] = useState("atendimento");
    const [isUpdating, setIsUpdating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [atendimentoData, setAtendimentoData] = useState({
        pressao_arterial: "",
        frequencia_cardiaca: "",
        temperatura: "",
        peso: "",
        altura: "",
        queixa_principal: "",
        diagnostico: "",
        problema_cardiaco: "",
    });

    const [saudeMedicaData, setSaudeMedicaData] = useState({
        alergias: "",
        ulcera: "",
        cirurgias: "",
        tonturas_convulsoes_desmaios: "",
        medicacao: "",
        problema_cardiaco: "",
        problema_coagulacao: "",
        febre_reumatica: "",
        psicopatias: "",
        medico: "",
        hepatite: "",
        diabete: "",
        problemas_respiratorios: "",
    });

    const [saudeOdontologicaData, setSaudeOdontologicaData] = useState({
        gengivite: "",
        outras_patologias: "",
        periodontite: "",
        tratamentos_anteriores: "",
        proteses_aparelhos: "",
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                if (location.state?.consulta) {
                    setConsulta(location.state.consulta);
                    setIsLoading(false);
                    return;
                }

                if (!data || data.length === 0) {
                    await loadConsultas();
                }
            } catch (error) {
                console.error("Erro ao carregar consulta:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, [id]);

    useEffect(() => {
        if ((isLoaded && data) || (data && data.length > 0)) {
            const foundConsulta = Array.isArray(data)
                ? data.find((item) => item.id === parseInt(id))
                : null;

            if (foundConsulta && !consulta) {
                setConsulta(foundConsulta);
            }
        }
    }, [isLoaded, data, id, consulta]);

    if (isLoading || !consulta) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg">Carregando consulta...</div>
            </div>
        );
    }

    const handleStatusChange = async (status) => {
        if (isUpdating) return;

        setIsUpdating(true);
        try {
            const updatedConsulta = {
                ...consulta,
                status: status,
            };

            const message = await editConsulta(consulta.id, updatedConsulta);
            console.log(message || "Consulta atualizada com sucesso!");

            setConsulta(updatedConsulta);
        } catch (error) {
            console.error("Erro ao atualizar a consulta:", error);
            alert("Erro ao atualizar a consulta");
        } finally {
            setIsUpdating(false);
        }
    };

    const handleAtendimentoDataChange = (field, value) => {
        setAtendimentoData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaudeMedicaDataChange = (field, value) => {
        setSaudeMedicaData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaudeOdontologicaDataChange = (field, value) => {
        setSaudeOdontologicaData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFinalizarConsulta = async () => {
        if (isUpdating) return;

        setIsUpdating(true);
        try {
            const consultaFinalizada = {
                ...consulta,
                status: "finalizada",
                atendimento: {
                    ...atendimentoData,
                    saude_medica: saudeMedicaData,
                    saude_odontologica: saudeOdontologicaData,
                },
            };

            console.log("Dados a serem enviados:", consultaFinalizada);

            const message = await editConsulta(consulta.id, consultaFinalizada);
            console.log(message || "Consulta finalizada com sucesso!");

            setConsulta(consultaFinalizada);
            setIsAtendimento(false);

            alert("Consulta finalizada com sucesso!");
        } catch (error) {
            console.error("Erro ao finalizar consulta:", error);
            alert("Erro ao finalizar a consulta");
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteConsulta(consulta);
            navigate("/calendario");
        } catch (error) {
            console.error("Erro ao deletar consulta:", error);
            alert("Erro ao deletar a consulta");
        }
    };

    if (!consulta) {
        return (
            <div className="flex justify-center items-center h-64">
                <div>Carregando...</div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center">
                <Link
                    to="/calendario/"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Voltar para calendário
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Detalhes da consulta
                        </h3>
                        <div className="mt-1 flex items-center">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    statusColors[consulta.status] ||
                                    statusColors.agendada
                                }`}
                            >
                                {statusLabels[consulta.status] ||
                                    consulta.status}
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            disabled={isUpdating}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => setIsDeleteDialogOpen(true)}
                            disabled={isUpdating}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                        >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="text-lg font-medium text-gray-900">
                                    Data e hora
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600 flex items-center">
                                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                {getHora(consulta.data_hora)} -{" "}
                                {getData(consulta.data_hora)}
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                                <User className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="text-lg font-medium text-gray-900">
                                    Paciente
                                </h3>
                            </div>
                            <Link
                                to={`/pacientes/${consulta.paciente.id}`}
                                className="text-blue-600 font-medium hover:text-blue-800"
                            >
                                {consulta.paciente.user.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                                {consulta.paciente.user.email}
                            </p>
                            <p className="text-sm text-gray-600">
                                {consulta.paciente.user.fone_celular}
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                                <UserCircle className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="text-lg font-medium text-gray-900">
                                    Profissional
                                </h3>
                            </div>
                            <Link
                                to={`/profissionais/${consulta.profissional.id}`}
                                className="text-blue-600 font-medium hover:text-blue-800"
                            >
                                Dr. {consulta.profissional.user.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                                {consulta.profissional.tipo_profissional}
                            </p>
                            <p className="text-sm text-gray-600">
                                {consulta.profissional.numero_conselho}/
                                {consulta.profissional.uf_conselho}
                            </p>
                        </div>
                    </div>

                    {consulta.observacao && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Observações
                            </h3>
                            <div className="bg-gray-50 p-4 rounded-md">
                                <p className="text-sm text-gray-600 whitespace-pre-line">
                                    {consulta.observacao}
                                </p>
                            </div>
                        </div>
                    )}

                    {consulta.status === "agendada" && (
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-3">
                                Atualizar Status
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setIsAtendimento(true)}
                                    disabled={isUpdating}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                >
                                    <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                    {isUpdating
                                        ? "Carregando..."
                                        : "Atender consulta"}
                                </button>
                                <button
                                    onClick={() =>
                                        handleStatusChange("cancelada")
                                    }
                                    disabled={isUpdating}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                                >
                                    <XCircle className="-ml-1 mr-2 h-4 w-4" />
                                    {isUpdating
                                        ? "Carregando..."
                                        : "Cancelar consulta"}
                                </button>
                            </div>
                        </div>
                    )}

                    {consulta.status !== "agendada" && (
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <button
                                onClick={() => handleStatusChange("agendada")}
                                disabled={isUpdating}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                <AlertTriangle className="-ml-1 mr-2 h-4 w-4" />
                                {isUpdating
                                    ? "Carregando..."
                                    : "Reagendar consulta"}
                            </button>
                        </div>
                    )}
                    {consulta.status !== "agendada" && (
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <button
                                onClick={() => handleStatusChange("agendada")}
                                disabled={isUpdating}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                <AlertTriangle className="-ml-1 mr-2 h-4 w-4" />
                                {isUpdating
                                    ? "Carregando..."
                                    : "Reagendar consulta"}
                            </button>
                        </div>
                    )}

                    {/* Medical Data Form */}
                    {isAtendimento && (
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Atendimento da Consulta
                                </h3>
                                <button
                                    onClick={() => setIsAtendimento(false)}
                                    disabled={isUpdating}
                                    className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                >
                                    Cancelar atendimento
                                </button>
                            </div>

                            <div className="border-b border-gray-200 mb-6">
                                <nav className="flex -mb-px">
                                    <button
                                        onClick={() =>
                                            setAtendimentoTab("atendimento")
                                        }
                                        disabled={isUpdating}
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab === "atendimento"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        } disabled:opacity-50`}
                                    >
                                        Consulta
                                    </button>
                                    <button
                                        onClick={() =>
                                            setAtendimentoTab("saudeMedica")
                                        }
                                        disabled={isUpdating}
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab === "saudeMedica"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        } disabled:opacity-50`}
                                    >
                                        Saúde Médica
                                    </button>
                                    <button
                                        onClick={() =>
                                            setAtendimentoTab(
                                                "saudeOdontologica"
                                            )
                                        }
                                        disabled={isUpdating}
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab ===
                                            "saudeOdontologica"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        } disabled:opacity-50`}
                                    >
                                        Saúde Bucal
                                    </button>
                                </nav>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                                {/* CONSULTATION TAB */}
                                {atendimentoTab === "atendimento" && (
                                    <>
                                        {/* Vital Signs */}
                                        <div>
                                            <h4 className="text-md font-medium text-gray-900 mb-4">
                                                Sinais Vitais
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Pressão Arterial
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="120/80 mmHg"
                                                        value={
                                                            atendimentoData.pressao_arterial
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "pressao_arterial",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={isUpdating}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Frequência Cardíaca
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="75 bpm"
                                                        value={
                                                            atendimentoData.frequencia_cardiaca
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "frequencia_cardiaca",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={isUpdating}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Temperatura
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="36.5°C"
                                                        value={
                                                            atendimentoData.temperatura
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "temperatura",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={isUpdating}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Peso
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="70 kg"
                                                        value={
                                                            atendimentoData.peso
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "peso",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={isUpdating}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Symptoms */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Sintomas
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Descreva os sintomas apresentados pelo paciente..."
                                                value={
                                                    atendimentoData.queixa_principal
                                                }
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "queixa_principal",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Diagnosis */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Diagnóstico
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Diagnóstico médico..."
                                                value={
                                                    atendimentoData.diagnostico
                                                }
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "diagnostico",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Prescription */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Prescrição Médica
                                            </label>
                                            <textarea
                                                rows="4"
                                                placeholder="Medicamentos prescritos, dosagem, duração do tratamento..."
                                                value={
                                                    atendimentoData.prescription
                                                }
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "prescription",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Additional Notes */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Observações Adicionais
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Outras observações sobre a consulta..."
                                                value={
                                                    atendimentoData.problema_cardiaco
                                                }
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "problema_cardiaco",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                disabled={isUpdating}
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizarConsulta
                                                }
                                                disabled={isUpdating}
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                {isUpdating
                                                    ? "Finalizando..."
                                                    : "Finalizar Consulta"}
                                            </button>
                                        </div>
                                    </>
                                )}

                                {/* MEDICAL HEALTH TAB */}
                                {atendimentoTab === "saudeMedica" && (
                                    <div className="space-y-6">
                                        {/* ... (resto do código das abas permanece igual, apenas adicione disabled={isUpdating} nos inputs e botões) */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Alergias
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Descreva alergias conhecidas..."
                                                value={saudeMedicaData.alergias}
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "alergias",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* ... outros campos da saúde médica com disabled={isUpdating} */}

                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                disabled={isUpdating}
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizarConsulta
                                                }
                                                disabled={isUpdating}
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                {isUpdating
                                                    ? "Finalizando..."
                                                    : "Finalizar Consulta"}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* DENTAL HEALTH TAB */}
                                {atendimentoTab === "saudeOdontologica" && (
                                    <div className="space-y-6">
                                        {/* ... (campos da saúde odontológica com disabled={isUpdating}) */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Última Consulta Odontológica
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Ex: 15/08/2024"
                                                value={
                                                    saudeOdontologicaData.gengivite
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "gengivite",
                                                        e.target.value
                                                    )
                                                }
                                                disabled={isUpdating}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* ... outros campos da saúde odontológica */}

                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                disabled={isUpdating}
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizarConsulta
                                                }
                                                disabled={isUpdating}
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                {isUpdating
                                                    ? "Finalizando..."
                                                    : "Finalizar Consulta"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Appointment Modal */}
            {isEditModalOpen && (
                <ConsultaForm
                    consulta={consulta}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}

            {/* Delete Confirmation Dialog */}
            {isDeleteDialogOpen && (
                <ConfirmDialog
                    title="Excluir Consulta"
                    message={`Tem certeza que deseja excluir esta consulta? Esta ação não pode ser desfeita.`}
                    confirmText="Excluir"
                    cancelText="Cancelar"
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleteDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default ConsultaShow;
