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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    /*const [message, setMessage] = useState(null); */
    useEffect(() => {
        loadConsultas();
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded && data) {
            const foundConsulta = data.find(
                (consulta) => consulta.id === parseInt(id)
            );
            setConsulta(foundConsulta);
        }
    }, [isLoaded, data, id]);

    const handleStatusChange = (status) => {
        editConsulta(id, { status });
        setData({ ...consulta, status });
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
                                    onClick={() =>
                                        handleStatusChange("completed")
                                    }
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <CheckCircle className="-ml-1 mr-2 h-4 w-4" />
                                    Finalizar consulta
                                </button>
                                <button
                                    onClick={() =>
                                        handleStatusChange("cancelled")
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
