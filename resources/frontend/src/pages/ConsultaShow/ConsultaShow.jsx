import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
    Calendar,
    User,
    UserCircle,
    Edit,
    Trash2,
    AlertCircle,
    ChevronLeft,
    Clock,
    CheckCircle,
    XCircle,
    AlertTriangle,
} from "lucide-react";
/* import AppointmentForm from '../components/AppointmentForm';*/
/* import ConfirmDialog from '../components/ConfirmDialog';*/
import { ConsultasContext } from "../../contexts/ConsultaProvider";
import ConfirmDialog from "../../components/ConfirmDialog";
import ConsultaForm from "../../components/ConsultaForm/ConsultaForm";
import { getHora, getData } from "../../utils/dataHora";
import { PacientesContext } from "../../contexts/PacienteProvider";

const statusColors = {
    agendada: "bg-blue-100 text-blue-800",
    finalizada: "bg-green-100 text-green-800",
    cancelada: "bg-red-100 text-red-800",
    faltou: "bg-yellow-100 text-yellow-800",
};

const ConsultaShow = () => {
    const { id } = useParams();
    const {
        data,
        setData,
        isLoaded,
        setIsLoaded,
        loadConsultas,
        editConsulta,
        deleteConsulta,
    } = useContext(ConsultasContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [consulta, setConsulta] = useState(location.state?.consulta ?? null);
    const { editPaciente } = useContext(PacientesContext);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isAtendimento, setIsAtendimento] = useState(false);
    const [atendimentoTab, setatendimentoTab] = useState("atendimento");

    const [atendimentoData, setAtendimentoData] = useState({
        bloodPressure: "",
        heartRate: "",
        temperature: "",
        weight: "",
        height: "",
        symptoms: "",
        diagnosis: "",
        prescription: "",
        notes: "",
    });
    const [saudeMedicaData, setSaudeMedicaData] = useState({
        allergies: "",
        chronicDiseases: "",
        currentMedications: "",
        previousSurgeries: "",
        familyHistory: "",
        notes: "",
    });
    const [saudeOdontologicaData, setSudeOdontologicaData] = useState({
        lastVisit: "",
        brushingFrequency: "",
        flossing: "",
        currentIssues: "",
        previousTreatments: "",
        prosthetics: "",
        notes: "",
    });
    /*const [message, setMessage] = useState(null); */
    useEffect(() => {
        loadConsultas();
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded && data) {
            const foundConsulta = Array.isArray(data)
                ? data.find((consulta) => consulta.id === parseInt(id))
                : data?.data?.find((consulta) => consulta.id === parseInt(id));
            setConsulta(foundConsulta);
        }
    }, [isLoaded, data, id]);

    const handleStatusChange = async (status) => {
        try {
            const updatedConsulta = { ...consulta, status };
            const message = await editConsulta(consulta.id, updatedConsulta);
            console.log(message || "Consulta atualizada com sucesso!");

            setData(updatedConsulta);
        } catch (error) {
            console.error("Erro ao atualizar a consulta:", error);
            alert("Erro ao atualizar a consulta");
        }
    };

    const handleAtendimentoDataChange = (field, value) => {
        setAtendimentoData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaudeMedicaDataChange = (field, value) => {
        setSaudeMedicaData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaudeOdontologicaDataChange = (field, value) => {
        setSudeOdontologicaData((prev) => ({ ...prev, [field]: value }));
    };

    console.log(consulta);
    if (!consulta) {
        return <div>Loading...</div>;
    }

    const handleDelete = () => {
        deleteConsulta(consulta);
        navigate("/calendario");
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center">
                <Link
                    to="/calendario/"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Voltar para calendario
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
                                    statusColors[consulta.status]
                                }`}
                            >
                                {consulta.status.charAt(0).toUpperCase() +
                                    consulta.status.slice(1)}
                            </span>
                            {/* {isToday && !isPast && consulta.status === 'agendada' && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Hoje
                </span>
              )} */}
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => setIsDeleteDialogOpen(true)}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
                    {console.log(consulta.observacao)}
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
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                    Atender consulta
                                </button>
                                <button
                                    onClick={() =>
                                        handleStatusChange("cancelada")
                                    }
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <XCircle className="-ml-1 mr-2 h-4 w-4" />
                                    Cancelar consulta
                                </button>
                            </div>
                        </div>
                    )}

                    {consulta.status !== "agendada" && (
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <button
                                onClick={() => handleStatusChange("agendada")}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <AlertTriangle className="-ml-1 mr-2 h-4 w-4" />
                                Atualizar status
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
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Cancelar atendimento
                                </button>
                            </div>

                            <div className="border-b border-gray-200 mb-6">
                                <nav className="flex -mb-px">
                                    <button
                                        onClick={() =>
                                            setatendimentoTab("atendimento")
                                        }
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab === "atendimento"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    >
                                        Consulta
                                    </button>
                                    <button
                                        onClick={() =>
                                            setatendimentoTab("saudeMedica")
                                        }
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab === "saudeMedica"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    >
                                        Saúde Médica
                                    </button>
                                    <button
                                        onClick={() =>
                                            setatendimentoTab(
                                                "saudeOdontologica"
                                            )
                                        }
                                        className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            atendimentoTab ===
                                            "saudeOdontologica"
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
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
                                                            atendimentoData.bloodPressure
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "bloodPressure",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                            atendimentoData.heartRate
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "heartRate",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                            atendimentoData.temperature
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "temperature",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                            atendimentoData.weight
                                                        }
                                                        onChange={(e) =>
                                                            handleAtendimentoDataChange(
                                                                "weight",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                value={atendimentoData.symptoms}
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "symptoms",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                    atendimentoData.diagnosis
                                                }
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "diagnosis",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                value={atendimentoData.notes}
                                                onChange={(e) =>
                                                    handleAtendimentoDataChange(
                                                        "notes",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizeConsultation
                                                }
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                Finalizar Consulta
                                            </button>
                                        </div>
                                    </>
                                )}

                                {/* MEDICAL HEALTH TAB */}
                                {atendimentoTab === "saudeMedica" && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Alergias
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Descreva alergias conhecidas..."
                                                value={
                                                    saudeMedicaData.allergies
                                                }
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "allergies",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Doenças Crônicas
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Doenças crônicas do paciente..."
                                                value={
                                                    saudeMedicaData.chronicDiseases
                                                }
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "chronicDiseases",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Medicamentos em Uso
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Medicamentos atuais..."
                                                value={
                                                    saudeMedicaData.currentMedications
                                                }
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "currentMedications",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Cirurgias Anteriores
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Histórico de cirurgias..."
                                                value={
                                                    saudeMedicaData.previousSurgeries
                                                }
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "previousSurgeries",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Histórico Familiar
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Histórico médico familiar..."
                                                value={
                                                    saudeMedicaData.familyHistory
                                                }
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "familyHistory",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Observações
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Observações adicionais..."
                                                value={saudeMedicaData.notes}
                                                onChange={(e) =>
                                                    handleSaudeMedicaDataChange(
                                                        "notes",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizeConsultation
                                                }
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                Finalizar Consulta
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* DENTAL HEALTH TAB */}
                                {atendimentoTab === "saudeOdontologica" && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Última Consulta Odontológica
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Ex: 15/08/2024"
                                                value={
                                                    saudeOdontologicaData.lastVisit
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "lastVisit",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Frequência de Escovação
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Ex: 3 vezes ao dia"
                                                value={
                                                    saudeOdontologicaData.brushingFrequency
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "brushingFrequency",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Uso de Fio Dental
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Ex: Diariamente, Ocasionalmente"
                                                value={
                                                    saudeOdontologicaData.flossing
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "flossing",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Problemas Dentários Atuais
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Problemas dentários atuais..."
                                                value={
                                                    saudeOdontologicaData.currentIssues
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "currentIssues",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Tratamentos Anteriores
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Histórico de tratamentos dentários..."
                                                value={
                                                    saudeOdontologicaData.previousTreatments
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "previousTreatments",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Próteses/Aparelhos
                                            </label>
                                            <textarea
                                                rows="2"
                                                placeholder="Próteses, aparelhos ou implantes..."
                                                value={
                                                    saudeOdontologicaData.prosthetics
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "prosthetics",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Observações
                                            </label>
                                            <textarea
                                                rows="3"
                                                placeholder="Observações adicionais..."
                                                value={
                                                    saudeOdontologicaData.notes
                                                }
                                                onChange={(e) =>
                                                    handleSaudeOdontologicaDataChange(
                                                        "notes",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="flex justify-end gap-3 pt-4">
                                            <button
                                                onClick={() =>
                                                    setIsAtendimento(false)
                                                }
                                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={
                                                    handleFinalizeConsultation
                                                }
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                                Finalizar Consulta
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
                    title="Delete Appointment"
                    message={`Are you sure you want to delete this consulta? This action cannot be undone.`}
                    confirmText="Delete"
                    cancelText="Cancel"
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleteDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default ConsultaShow;
