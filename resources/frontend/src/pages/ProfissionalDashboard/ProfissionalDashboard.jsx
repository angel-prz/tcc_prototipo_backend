import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConsultasContext } from "../../contexts/ConsultaProvider";
import StatsCard from "../../components/StatsCard/StatsCard";
import {
    Users,
    UserRound,
    Calendar,
    ClipboardList,
    ArrowUpRight,
} from "lucide-react";
import { useAuthContext } from "../../contexts/AuthProvider";

const ProfissionalDashboard = () => {
    const { data, isLoaded, countConsultas, loadConsultas } =
        useContext(ConsultasContext);
    const { user } = useAuthContext();

    useEffect(() => {
        countConsultas();
    }, []);

    console.log(isLoaded, data, data.length);

    return isLoaded /* && data?.length > 0 */ ? (
        <>
            <div className="space-y-6 animate-fadeIn">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-2xl font-semibold leading-tight text-gray-800">
                            Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Bem vindo, {user?.name}!
                        </p>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Pacientes"
                        /* value={} */
                        icon={<Users className="h-6 w-6 text-blue-600" />}
                        linkTo="/pacientes"
                    />
                    <StatsCard
                        title="Profissionais da Saúde"
                        /* value={} */
                        icon={<UserRound className="h-6 w-6 text-teal-600" />}
                        linkTo="/profissionais"
                    />
                    <StatsCard
                        title="Consultas"
                        value={data.total}
                        icon={
                            <ClipboardList className="h-6 w-6 text-purple-600" />
                        }
                        linkTo="/consultas"
                    />
                    <StatsCard
                        title="Próximas Consultas"
                        /* value={} */
                        icon={<Calendar className="h-6 w-6 text-indigo-600" />}
                        linkTo="/calendario"
                    />
                </div>

                {/* Upcoming appointments section */}
                <div className="bg-white shadow overflow-hidden sm:rounded-md mt-6">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Próximas consultas
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Sua agenda para os próximos dias
                        </p>
                    </div>
                    {/* <ul className="divide-y divide-gray-200">
                        {upcomingAppointments.length > 0 ? (
                            upcomingAppointments.map((appointment) => (
                                <li key={appointment.id}>
                                    <Link
                                        to={`/appointments/${appointment.id}`}
                                        className="block hover:bg-gray-50"
                                    >
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="sm:flex sm:justify-between w-full">
                                                    <div>
                                                        <p className="text-sm font-medium text-blue-600 truncate">
                                                            {getPatientName(
                                                                appointment.patientId
                                                            )}
                                                        </p>
                                                        <p className="mt-1 flex items-center text-sm text-gray-500">
                                                            <UserRound className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                            {getProfessionalName(
                                                                appointment.professionalId
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="mt-2 sm:mt-0">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {formatDate(
                                                                appointment.date
                                                            )}
                                                        </p>
                                                        <p className="mt-1 text-sm text-gray-500">
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
                                                <div className="ml-5 flex-shrink-0">
                                                    <ArrowUpRight className="h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
                                Sem consultas marcadas
                            </li>
                        )}
                    </ul> */}
                    <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <Link
                            to="/consultas"
                            className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center justify-center"
                        >
                            Ver todas as consultas
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

export default ProfissionalDashboard;
