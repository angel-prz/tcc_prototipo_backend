import { useState, useEffect, useContext, useMemo } from "react";
import { X } from "lucide-react";
import { UsersContext } from "../../contexts/UserProvider";
import { ConsultasContext } from "../../contexts/ConsultaProvider";
import { Link } from "react-router-dom";

const ConsultaForm = ({ consulta, onClose, onSuccess }) => {
    const { data: users, loadUsers } = useContext(UsersContext);
    const { createConsulta, editConsulta } = useContext(ConsultasContext);
    /*     const [availableTimes, setAvailableTimes] = useState([]); */
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        paciente_id: consulta?.paciente?.id || "",
        profissional_id: consulta?.profissional?.id || "",
        data_hora: consulta?.data_hora || "",
        status: consulta?.status || "",
        observacao: consulta?.observacao || "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({ type: "", message: "" });

    useEffect(() => {
        loadUsers();
    }, []);

    const profissionais = useMemo(
        () =>
            Array.isArray(users)
                ? users.filter((u) => u.tipo_usuario === "profissional")
                : [],
        [users]
    );

    const pacientes = useMemo(
        () =>
            Array.isArray(users)
                ? users.filter((u) => u.tipo_usuario === "paciente")
                : [],
        [users]
    );
    console.log("Profissionais:", profissionais);
    console.log("Pacientes:", pacientes);

    useEffect(() => {
        if (formData.data_hora && formData.profissional_id) {
            loadAvailableTimes(formData.data_hora, formData.profissional_id);
        }
    }, [formData.data_hora, formData.profissional_id]);

    const loadAvailableTimes = async (/* data, profissional_id */) => {
        return true;
        //TODO: Implementar verificação de horários disponíveis
        /* try {
            const response = await fetch(
                `/horarios_profissional?data=${data}&profissional_id=${profissional_id}`
            );
            const times = await response.json();
            setAvailableTimes(times);
        } catch (error) {
            console.error("Erro ao carregar horários disponíveis:", error);
            setAvailableTimes([]);
        } */
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.paciente_id) {
            newErrors.paciente_id = "Selecione um paciente";
        }
        if (!formData.profissional_id) {
            newErrors.profissional_id = "Selecione um profissional";
        }
        if (!formData.data_hora) {
            newErrors.data_hora = "Selecione uma data";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setFeedback({ type: "", message: "" });

        try {
            const consultaData = {
                paciente_id: formData.paciente_id,
                profissional_id: formData.profissional_id,
                data_hora: formData.data_hora,
                status: formData.status,
                observacao: formData.observacao,
            };

            if (consulta) {
                await editConsulta(consulta.id, consultaData);
                setFeedback({
                    type: "success",
                    message: "Consulta atualizada com sucesso!",
                });
            } else {
                await createConsulta(consultaData);
                setFeedback({
                    type: "success",
                    message: "Consulta agendada com sucesso!",
                });
            }

            if (onSuccess) {
                await onSuccess();
            }

            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Erro ao salvar consulta:", error);
            setErrors((prev) => ({
                ...prev,
                submit: "Erro ao salvar a consulta. Tente novamente.",
            }));
        } /* finally {
            setIsSubmitting(false);
        } */
    };

    const getFeedbackStyles = () => {
        if (feedback.type === "success") {
            return "bg-green-100 border-green-400 text-green-700";
        }
        if (feedback.type === "error") {
            return "bg-red-100 border-red-400 text-red-700";
        }
        return "";
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {consulta ? "Editar Consulta" : "Nova Consulta"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {!isSubmitting ? (
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="space-y-6">
                            {feedback.message && (
                                <div
                                    className={`p-4 mb-4 rounded border ${getFeedbackStyles()}`}
                                    role="alert"
                                >
                                    <p className="text-sm">
                                        {feedback.message}
                                    </p>
                                </div>
                            )}

                            {!consulta && (
                                <div>
                                    <label
                                        htmlFor="paciente_id"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Paciente
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="paciente_id"
                                            name="paciente_id"
                                            value={formData.paciente_id}
                                            onChange={handleChange}
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.paciente_id
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        >
                                            <option value="">
                                                Selecionar paciente
                                            </option>
                                            {pacientes.map((paciente) => (
                                                <option
                                                    key={paciente.id}
                                                    value={paciente.id}
                                                >
                                                    {paciente.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.paciente_id && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.paciente_id}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {!consulta && (
                                <div>
                                    <label
                                        htmlFor="profissional_id"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Profissional da Saúde
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="profissional_id"
                                            name="profissional_id"
                                            value={formData.profissional_id}
                                            onChange={handleChange}
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.profissional_id
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        >
                                            <option value="">
                                                Selecionar Profissional
                                            </option>
                                            {profissionais.map(
                                                (profissional) => (
                                                    <option
                                                        key={profissional.id}
                                                        value={profissional.id}
                                                    >
                                                        {profissional.name} (
                                                        {
                                                            profissional.tipo_profissional
                                                        }
                                                        )
                                                    </option>
                                                )
                                            )}
                                        </select>
                                        {errors.profissional_id && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.profissional_id}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="data_hora"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Data e Horario
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="datetime-local"
                                        name="data_hora"
                                        id="data_hora"
                                        value={formData.data_hora}
                                        min={new Date()}
                                        onChange={handleChange}
                                        className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                            errors.data_hora
                                                ? "border-red-300"
                                                : ""
                                        }`}
                                    />
                                    {errors.data_hora && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.data_hora}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {consulta && (
                                <div>
                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Status
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="agendada">
                                                Agendada
                                            </option>
                                            <option value="finalizada">
                                                Finalizada
                                            </option>
                                            <option value="cancelada">
                                                Cancelada
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="observacao"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Observações
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="observacao"
                                        name="observacao"
                                        rows={3}
                                        value={formData.observacao}
                                        onChange={handleChange}
                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Adicione notas ou instruções importantes"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={isSubmitting}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Salvando...
                                    </span>
                                ) : consulta ? (
                                    "Atualizar"
                                ) : (
                                    "Agendar"
                                )}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="flex flex-col items-center">
                            <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-white"></div>
                            <p className="mt-6 text-white text-xl font-bold">
                                Processando...
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ConsultaForm;
