import { useState, useEffect, useContext, } from "react";
import { Link } from "react-router-dom";
import {
    format,
    addDays,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    addMonths,
    subMonths,
    isToday,
    parseISO,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import {
    ChevronLeft,
    ChevronRight,
    User,
    AlertCircle,
    Plus,
} from "lucide-react";
import { ConsultasContext } from "../../contexts/ConsultaProvider";
import { getData, getHora } from "../../utils/dataHora";
import ConsultaForm from "../../components/ConsultaForm/ConsultaForm";
import SearchBar from "../../components/SearchBar/SearchBar";


//TODO: Organizar essa gambiarra em componentes
const Calendario = () => {
    const { data, isLoaded, loadConsultas } = useContext(ConsultasContext);
    const [view, setView] = useState("today"); // week, month
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarDays, setCalendarDays] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    /* const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all"); */

    useEffect(() => {
        loadConsultas();
        console.log(data);
    }, []);

    //TODO: revisar logica IA
    // Generate calendar days based on view and current date
    useEffect(() => {
        if (view === "week") {
            const start = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
            const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
            setCalendarDays(days);
        } else if (view === "month") {
            const start = startOfMonth(currentDate);
            const end = endOfMonth(currentDate);

            // Get the first day of the month
            const firstDayOfMonth = start.getDay();

            // Calculate the first day to display (to fill the calendar grid)
            const startDay = addDays(
                start,
                -((firstDayOfMonth === 0 ? 7 : firstDayOfMonth) - 1)
            );

            // Calculate days needed for the calendar (max 42 cells - 6 weeks)
            const daysInView = 42;
            const days = Array.from({ length: daysInView }, (_, i) =>
                addDays(startDay, i)
            );

            setCalendarDays(days);
        }
    }, [view, currentDate]);

    const handlePrevious = () => {
        if (view === "week") {
            setCurrentDate((prev) => addDays(prev, -7));
        } else if (view === "month") {
            setCurrentDate((prev) => subMonths(prev, 1));
        }
    };

    const handleNext = () => {
        if (view === "week") {
            setCurrentDate((prev) => addDays(prev, 7));
        } else if (view === "month") {
            setCurrentDate((prev) => addMonths(prev, 1));
        }
    };

    const getAppointmentsForDate = (date) => {
        if (!data || !Array.isArray(data)) {
            console.log("Dados inválidos:", data);
            return [];
        }

        const dateString = format(date, "yyyy-MM-dd");
        console.log("Buscando consultas para:", dateString);

        /* const filtered = data.filter((consulta) => {
            const consultaDate = consulta.data_hora.split(" ")[0];
            console.log("Comparando:", {
                consultaData: consultaDate,
                dateString: dateString,
            });
            return consultaDate === dateString;
        }); */
        const filtered = data.filter((consulta) => {
            // Verifica se data_hora existe
            if (!consulta.data_hora) {
                console.log("Consulta sem data:", consulta);
                return false;
            }

            try {
                // Converte a string da data da consulta para objeto Date
                const consultaDate = parseISO(consulta.data_hora);
                // Formata para comparar apenas a data (sem hora)
                const consultaDateString = format(consultaDate, "yyyy-MM-dd");

                console.log("Comparando datas:", {
                    consultaData: consultaDateString,
                    dateString: dateString,
                    match: consultaDateString === dateString,
                });

                return consultaDateString === dateString;
            } catch (error) {
                console.error("Erro ao processar data da consulta:", error);
                return false;
            }
        });
        console.log("Consultas filtradas:", filtered);
        return filtered;
    };

    const getPatientName = (consulta) => {
        return consulta.paciente?.user?.name || "Unknown Patient";
    };

    const getProfessionalName = (consulta) => {
        return consulta.profissional?.user?.name || "Unknown Doctor";
    };

    //TODO: fazer um componente para cores de status
    const getStatusColor = (status) => {
        switch (status) {
            case "agendada":
                return "bg-blue-100 border-blue-200";
            case "finalizada":
                return "bg-green-100 border-green-200";
            case "cancelada":
                return "bg-red-100 border-red-200";
            default:
                return "bg-gray-100 border-gray-200";
        }
    };

    const statusLabels = {
        agendada: "Agendada",
        finalizada: "Finalizada",
        cancelada: "Cancelada",
    };

    const renderMonthView = () => {
        const startDate = startOfMonth(currentDate);
        const endDate = endOfMonth(currentDate);
        const monthTitle = format(currentDate, "MMMM 'de' yyyy", {
            locale: ptBR,
        });

        return (
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    {monthTitle}
                </h2>
                <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                    {/* Day headers */}
                    {[
                        "Segunda",
                        "Terça",
                        "Quarta",
                        "Quinta",
                        "Sexta",
                        "Sábado",
                        "Domingo",
                    ].map((day) => (
                        <div
                            key={day}
                            className="bg-gray-50 p-2 text-center text-xs font-medium text-gray-700"
                        >
                            {day.slice(0, 3)}
                        </div>
                    ))}

                    {/* Calendar days */}
                    {calendarDays.map((day, i) => {
                        const dayAppointments = getAppointmentsForDate(day);
                        const isCurrentMonth =
                            day >= startDate && day <= endDate;
                        const isTodayDate = isToday(day);

                        return (
                            <div
                                key={i}
                                className={`min-h-[100px] p-2 ${
                                    isTodayDate ? "bg-blue-50" : "bg-white"
                                }
                ${
                    !isCurrentMonth ? "text-gray-400" : "text-gray-900"
                } overflow-hidden flex flex-col`}
                            >
                                <div className="text-right">
                                    <span
                                        className={`inline-flex items-center justify-center w-6 h-6 text-sm leading-none rounded-full
                    ${
                        isTodayDate ? "bg-blue-600 text-white" : "text-gray-700"
                    }`}
                                    >
                                        {format(day, "d")}
                                    </span>
                                </div>

                                <div className="flex-1 overflow-y-auto mt-1 space-y-1">
                                    {dayAppointments.map((consulta) => (
                                        <Link
                                            key={consulta.id}
                                            to={`/consultas/${consulta.id}`}
                                            className={`block text-xs p-1 rounded border ${getStatusColor(
                                                consulta.status
                                            )} hover:bg-opacity-80 truncate`}
                                        >
                                            <div className="font-medium">
                                                {format(
                                                    parseISO(
                                                        consulta.data_hora
                                                    ),
                                                    "HH:mm"
                                                )}
                                            </div>
                                            <div className="truncate">
                                                {getPatientName(consulta)}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderTodayView = () => {
        const today = new Date();
        const todayAppointments = getAppointmentsForDate(today).sort((a, b) =>
            (a.data_hora || "").localeCompare(b.data_hora || "")
        );

        return (
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Hoje -{" "}
                    {format(today, "EEEE, d 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                    })}
                </h2>
                <div className="bg-white rounded-lg overflow-hidden shadow">
                    {isLoaded && todayAppointments.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {todayAppointments.map((consulta) => (
                                <li
                                    key={consulta.id}
                                    className="odd:bg-gray-100 even:bg-white"
                                >
                                    <Link
                                        to={`/consultas/${consulta.id}`}
                                        className="block hover:bg-gray-200 px-4 py-3"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <User className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {/* {consulta.data_hora} */}
                                                        {format(
                                                            parseISO(
                                                                consulta.data_hora
                                                            ),
                                                            "HH:mm"
                                                        )}
                                                    </p>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        <p>
                                                            <strong>
                                                                {getPatientName(
                                                                    consulta
                                                                )}
                                                            </strong>
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            com{" "}
                                                            <strong>
                                                                {getProfessionalName(
                                                                    consulta
                                                                )}
                                                            </strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${
                                                    consulta.status ===
                                                    "agendada"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : consulta.status ===
                                                          "finalizada"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {statusLabels[
                                                    consulta.status
                                                ] || consulta.status}
                                            </span>
                                        </div>
                                        {consulta.observacao && (
                                            <div className="mt-2 pl-8">
                                                <p className="text-sm text-gray-500 line-clamp-1">
                                                    {consulta.observacao}
                                                </p>
                                            </div>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="px-4 py-6 text-center text-sm text-gray-500 flex flex-col items-center">
                            <AlertCircle className="h-5 w-5 text-gray-400 mb-2" />
                            Nenhuma consulta agendada para hoje
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderWeekView = () => {
        const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
        const endDate = endOfWeek(currentDate, { weekStartsOn: 1 }); // Sunday
        const weekTitle = `${format(startDate, "d 'de' MMMM", {
            locale: ptBR,
        })} - ${format(endDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}`;

        return (
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    {weekTitle}
                </h2>
                <div className="space-y-4">
                    {calendarDays.map((day, i) => {
                        const dayAppointments = getAppointmentsForDate(
                            day
                        ).sort((a, b) =>
                            (a.data_hora || "").localeCompare(b.data_hora || "")
                        );
                        const isTodayDate = isToday(day);

                        return (
                            <div
                                key={i}
                                className="bg-white rounded-lg overflow-hidden shadow"
                            >
                                <div
                                    className={`px-4 py-2 ${
                                        isTodayDate
                                            ? "bg-blue-100"
                                            : "bg-gray-50"
                                    } border-b`}
                                >
                                    <h3 className="font-medium">
                                        {format(day, "EEEE, d 'de' MMMM", {
                                            locale: ptBR,
                                        })}
                                        {isTodayDate && (
                                            <span className="ml-2 text-sm font-semibold text-blue-800">
                                                (Hoje)
                                            </span>
                                        )}
                                    </h3>
                                </div>

                                {dayAppointments.length > 0 ? (
                                    <ul className="divide-y divide-gray-200">
                                        {dayAppointments.map((consulta) => (
                                            <li key={consulta.id}>
                                                <Link
                                                    to={`/consultas/${consulta.id}`}
                                                    className="block hover:bg-gray-50 px-4 py-3"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <User className="h-5 w-5 text-gray-400" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    {getHora(
                                                                        consulta.data_hora
                                                                    )}
                                                                </p>
                                                                <div className="text-sm text-gray-500 mt-1">
                                                                    <p>
                                                                        {getPatientName(
                                                                            consulta
                                                                        )}
                                                                    </p>
                                                                    <p className="text-xs text-gray-400 mt-1">
                                                                        com{" "}
                                                                        {getProfessionalName(
                                                                            consulta
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span
                                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${
                                  consulta.status === "agendada"
                                      ? "bg-blue-100 text-blue-800"
                                      : consulta.status === "finalizada"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                              }`}
                                                        >
                                                            {statusLabels[
                                                                consulta.status
                                                            ] ||
                                                                consulta.status}
                                                        </span>
                                                    </div>
                                                    {consulta.observacao && (
                                                        <div className="mt-2 pl-8">
                                                            <p className="text-sm text-gray-500 line-clamp-1">
                                                                {
                                                                    consulta.observacao
                                                                }
                                                            </p>
                                                        </div>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="px-4 py-6 text-center text-sm text-gray-500 flex flex-col items-center">
                                        <AlertCircle className="h-5 w-5 text-gray-400 mb-2" />
                                        Nenhuma consulta agendada
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold leading-tight text-gray-800">
                        Calendario
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Ver e gerenciar consultas
                    </p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                        type="button"
                        onClick={openModal}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Plus className="-ml-1 mr-2 h-4 w-4" />
                        Add Consulta
                    </button>
                </div>
            </div>
{/*             <SearchBar onSearch={setSearchTerm} onFilter={setStatusFilter} />
 */}            <div className="bg-white p-4 shadow rounded-lg">
                {/* Calendar Controls */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setView("today")}
                            className={`inline-flex items-center px-4 py-2 border ${
                                view === "today"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            } shadow-sm text-sm font-medium
                             rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            Hoje
                        </button>
                        <button
                            disabled={false}
                            type="button"
                            onClick={handlePrevious}
                            className="inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            disabled={false}
                            type="button"
                            onClick={handleNext}
                            className="inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setView("week")}
                            className={`inline-flex items-center px-4 py-2 border ${
                                view === "week"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            } shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            Semana
                        </button>
                        <button
                            onClick={() => setView("month")}
                            className={`inline-flex items-center px-4 py-2 border ${
                                view === "month"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            } shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            Mês
                        </button>
                    </div>
                </div>

                {!isLoaded ? (
                    <div className="flex items-center justify-center p-8">
                        <p className="text-gray-500">Carregando consultas...</p>
                    </div>
                ) : view === "week" ? (
                    renderWeekView()
                ) : view === "month" ? (
                    renderMonthView()
                ) : view === "today" ? (
                    renderTodayView()
                ) : null}
                {/* Calendar View */}
                {/*view === "week" ? renderWeekView() : renderMonthView() */}
            </div>
            {isModalOpen && (
                <ConsultaForm onClose={closeModal} onSuccess={loadConsultas} />
            )}
        </div>
    );
};

export default Calendario;
