import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
    Calendar,
    Edit,
    Trash2,
    AlertCircle,
    ChevronLeft,
    FilePlus,
    ClipboardList,
    UserCircle,
    ArrowUpRight,
} from "lucide-react";
/* import ProfessionalForm from "../components/ProfessionalForm";
import AppointmentForm from "../components/AppointmentForm";*/
import ConfirmDialog from "../../components/ConfirmDialog";
import { ProfissionaisContext } from "../../contexts/ProfissionalProvider";

const ShowProfissional = () => {
    const { id } = useParams();

    const {
        data,
        setData,
        isLoaded,
        setIsLoaded,
        editProfissional,
        deleteProfissional,
        loadProfissionais,
    } = useContext(ProfissionaisContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [profissional, setProfissional] = useState(
        location.state?.profissional ?? null
    );

    useEffect(() => {
        loadProfissionais();
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded && data) {
            const foundProfissional = data.find(
                (profissional) => profissional.id === parseInt(id)
            );
            setProfissional(foundProfissional);
        }
    }, [isLoaded, data, id]);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDelete = () => {
        deleteProfissional(id);
        navigate("/profissionais");
    };

    if (!profissional) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                        Profissional não encontrado
                    </h3>
                    <div className="mt-6">
                        <Link
                            to="/professionals"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            Voltar à lista de profissionais
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center">
                <Link
                    to="/professionals"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Voltar para profissionais
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Informação do Profissional
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Detalhes do profissionais e cronograma
                        </p>
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
                <div className="border-t border-gray-200">
                    <div className="flex">
                        <div className="py-4 px-6 bg-teal-50 flex items-center justify-center">
                            <div className="bg-white rounded-full p-3 shadow-sm">
                                <UserCircle className="h-12 w-12 text-teal-600" />
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:p-6 flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {profissional.user.name}
                            </h2>
                            <p className="text-gray-600">
                                {profissional.tipo_profissional}
                            </p>
                        </div>
                    </div>

                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 px-6 py-4">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {profissional.user.email}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Telefone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {profissional.user_telefone}
                            </dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                                Disponibilidade
                            </dt>
                            {/* <dd className="mt-1 text-sm text-gray-900">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {Object.entries(
                                        profissional.availability
                                    ).map(([day, times]) => (
                                        <div
                                            key={day}
                                            className="bg-gray-50 px-4 py-3 rounded-md"
                                        >
                                            <p className="font-medium text-gray-700">
                                                {day}
                                            </p>
                                            <ul className="mt-2 space-y-1">
                                                {times.map((time, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-gray-600"
                                                    >
                                                        {time.start} -{" "}
                                                        {time.end}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </dd> */}
                        </div>
                    </dl>
                </div>
            </div>

            {/* Appointments Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Consultas
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Historico de consultas
                        </p>
                    </div>
                    <button
                        onClick={() => setIsAppointmentModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <FilePlus
                            className="-ml-1 mr-2 h-4 w-4"
                            aria-hidden="true"
                        />
                        Nova Consulta
                    </button>
                </div>

                {/* {professionalAppointments.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {professionalAppointments.map((appointment) => {
                            const statusColors = {
                                agendada: "bg-blue-100 text-blue-800",
                                finalizada: "bg-green-100 text-green-800",
                                cancelada: "bg-red-100 text-red-800",
                            };

                            return (
                                <li key={appointment.id}>
                                    <Link
                                        to={`/appointments/${appointment.id}`}
                                        className="block hover:bg-gray-50"
                                    >
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <Calendar className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-blue-600 truncate">
                                                            {getPatientName(
                                                                appointment.patientId
                                                            )}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {appointment.date} •{" "}
                                                            {
                                                                appointment.startTime
                                                            }{" "}
                                                            -{" "}
                                                            {
                                                                appointment.endTime
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                            statusColors[
                                                                appointment
                                                                    .status
                                                            ]
                                                        }`}
                                                    >
                                                        {appointment.status
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            appointment.status.slice(
                                                                1
                                                            )}
                                                    </span>
                                                    <ArrowUpRight className="ml-2 h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <ClipboardList className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                        {appointment.notes
                                                            .length > 50
                                                            ? appointment.notes.substring(
                                                                  0,
                                                                  50
                                                              ) + "..."
                                                            : appointment.notes}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                        Nenhuma consulta encontrada para este profissional
                    </div>
                )} */}
            </div>

            {/* Edit Professional Modal */}
            {isEditModalOpen && (
                <ProfessionalForm
                    profissional={profissional}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}

            {/* New Appointment Modal */}
            {isAppointmentModalOpen && (
                <AppointmentForm
                    professionalId={profissional.id}
                    onClose={() => setIsAppointmentModalOpen(false)}
                />
            )}

            {/* Delete Confirmation Dialog */}
            {isDeleteDialogOpen && (
                <ConfirmDialog
                    title="Excluir Profissional"
                    message={`Tem certeza de que deseja excluir . ${profissional.firstName} ${profissional.lastName}? Esta ação não pode ser desfeita.`}
                    confirmText="Excluir"
                    cancelText="Cancelar"
                    onConfirm={handleDelete}
                    onCancel={() => setIsDeleteDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default ShowProfissional;
