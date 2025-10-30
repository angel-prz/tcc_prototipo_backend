import { useState, useRef, useContext, useEffect } from "react";
import { X } from "lucide-react";
import { PacientesContext } from "../../contexts/PacienteProvider";

const ModalEditPaciente = ({ editedPaciente, onClose }) => {
    const { editPaciente, loadPacientes } = useContext(PacientesContext);
    const [disableButton, setDisableButton] = useState(false);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({ type: "", message: "" });

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        cpf: "",
        data_nascimento: "",
        sexo: "",
        fone_celular: "",
        fone_fixo: "",
        tipo_paciente: "",

        aluno: {
            matricula: "",
            turma: "",
            campus: "",
            curso: "",
            semestre: "",
            ano: "",
            fone_responsavel: "",
        },

        funcionario: {
            tipo_funcionario: "",
            cargo: "",
            setor: "",
            ramal: "",
            turno: "",
        },
    });

    const [showAlunoFields, setShowAlunoFields] = useState(false);
    const [showFuncionarioFields, setShowFuncionarioFields] = useState(false);

    useEffect(() => {
        if (!editedPaciente) return;

        const tipoPaciente = editedPaciente?.tipo_paciente;

        setFormData({
            ...formData,
            id: editedPaciente?.user.id || "",
            name: editedPaciente?.user?.name || "",
            email: editedPaciente?.user?.email || "",
            cpf: editedPaciente?.user?.cpf || "",
            data_nascimento: editedPaciente?.user?.data_nascimento || "",
            sexo: editedPaciente?.user?.sexo?.toLowerCase() || "",
            fone_celular: editedPaciente?.user?.fone_celular || "",
            fone_fixo: editedPaciente?.user?.fone_fixo || "",
            tipo_paciente: tipoPaciente || "",

            aluno:
                tipoPaciente === "aluno" && editedPaciente.aluno
                    ? {
                          matricula: editedPaciente.aluno.matricula || "",
                          turma: editedPaciente.aluno.turma || "",
                          campus: editedPaciente.aluno.campus || "",
                          curso: editedPaciente.aluno.curso || "",
                          semestre: editedPaciente.aluno.semestre || "",
                          ano: editedPaciente.aluno.ano || "",
                          fone_responsavel:
                              editedPaciente.aluno.fone_responsavel || "",
                      }
                    : formData.aluno,

            funcionario:
                tipoPaciente === "funcionario" && editedPaciente.funcionario
                    ? {
                          tipo_funcionario:
                              editedPaciente.funcionario.tipo_funcionario || "",
                          cargo: editedPaciente.funcionario.cargo || "",
                          setor: editedPaciente.funcionario.setor || "",
                          ramal: editedPaciente.funcionario.ramal || "",
                          turno: editedPaciente.funcionario.turno || "",
                      }
                    : formData.funcionario,
        });

        setShowAlunoFields(tipoPaciente === "aluno");
        setShowFuncionarioFields(tipoPaciente === "funcionario");
    }, [editedPaciente]);

    const handleInputChange = (field, value, section = null) => {
        if (section) {
            setFormData((prev) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const validateForm = () => {
        setDisableButton(
            !(
                //TODO: tem jeito melhor mas fodac
                (
                    formData.name.trim().length > 0 &&
                    formData.email.trim().length > 0 &&
                    formData.cpf.trim().length > 0 &&
                    formData.data_nascimento.trim().length > 0 &&
                    formData.sexo.trim().length > 0 &&
                    formData.fone_celular.trim().length > 0 &&
                    formData.fone_fixo.trim().length > 0
                )
            )
        );

        const newErrors = {};

        //TODO: jeito mais limpo / talvez componente
        if (!formData.name) {
            newErrors.name = "Nome é obrigatório";
        }
        if (!formData.email) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email é inválido";
        }
        /*if (formData.password) {
            newErrors.password = "Senha é obrigatória";
        } */
        if (!formData.data_nascimento) {
            newErrors.data_nascimento = "Data de nascimento é obrigatória";
        }
        if (!formData.sexo) {
            newErrors.sexo = "Sexo é obrigatório";
        }
        if (!formData.cpf) {
            newErrors.cpf = "CPF é obrigatório";
        }
        if (!formData.aluno.matricula && formData.tipo_paciente === "aluno") {
            newErrors.aluno_matricula = "Matrícula é obrigatória para alunos";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //FMLFML
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("submit");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setFeedback({ type: "", message: "" });

        try {
            const pacienteData = {
                id: formData.id,
                name: formData.name,
                email: formData.email,
                cpf: formData.cpf,
                data_nascimento: formData.data_nascimento,
                sexo: formData.sexo,
                fone_celular: formData.fone_celular,
                fone_fixo: formData.fone_fixo,
                tipo_paciente: formData.tipo_paciente,
                matricula: formData.aluno.matricula,
                turma: formData.aluno.turma,
                campus: formData.aluno.campus,
                curso: formData.aluno.curso,
                semestre: formData.aluno.semestre,
                ano: formData.aluno.ano,
                fone_responsavel: formData.aluno.fone_responsavel,
                tipo_funcionario: formData.funcionario.tipo_funcionario,
                cargo: formData.funcionario.cargo,
                setor: formData.funcionario.setor,
                ramal: formData.funcionario.ramal,
                turno: formData.funcionario.turno,
            };

            if (editedPaciente) {
                await editPaciente(editedPaciente.id, pacienteData);
                setFeedback({
                    type: "success",
                    message: "Paciente atualizado com sucesso!",
                });
            } else {
                setFeedback({
                    type: "error",
                    message: "Erro ao atualizar paciente!",
                });
            }

            onClose();
        } catch (error) {
            console.error("Erro ao salvar paciente: ", error);
            setErrors((prev) => ({
                ...prev,
                submit: "Erro ao salvar o paciente. Tente novamente.",
            }));
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {/* Editar:  */}
                        {editedPaciente.user.name}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form
                    action=""
                    method="get"
                    onSubmit={onSubmit}
                    className="p-6"
                >
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nome
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.name ? "border-red-300" : ""
                                    }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.email ? "border-red-300" : ""
                                    }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="data_nascimento"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Data de Nascimento
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="data_nascimento"
                                    id="data_nascimento"
                                    value={formData.data_nascimento}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "data_nascimento",
                                            e.target.value
                                        )
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.data_nascimento
                                            ? "border-red-300"
                                            : ""
                                    }`}
                                />
                                {errors.data_nascimento && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.data_nascimento}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="sexo"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Sexo
                            </label>
                            <div className="mt-1">
                                <select
                                    id="sexo"
                                    name="sexo"
                                    value={formData.sexo || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "sexo",
                                            e.target.value
                                        )
                                    }
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Selecione</option>
                                    <option value="m">Masculino</option>
                                    <option value="f">Feminino</option>
                                    <option value="o">Outro</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="cpf"
                                className="block text-sm font-medium text-gray-700"
                            >
                                CPF
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="cpf"
                                    id="cpf"
                                    value={formData.cpf}
                                    onChange={(e) =>
                                        handleInputChange("cpf", e.target.value)
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.cpf ? "border-red-300" : ""
                                    }`}
                                />
                                {errors.cpf && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.cpf}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="fone_fixo"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Número de telefone
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="fone_fixo"
                                    id="fone_fixo"
                                    value={formData.fone_fixo}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "fone_fixo",
                                            e.target.value
                                        )
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.phone ? "border-red-300" : ""
                                    }`}
                                />
                                {/* {errors.phone && (
									<p className="mt-1 text-sm text-red-600">{errors.phone}</p>
								)} */}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="fone_celular"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Número de telefone celular
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="fone_celular"
                                    id="fone_celular"
                                    value={formData.fone_celular}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "fone_celular",
                                            e.target.value
                                        )
                                    }
                                    className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                        errors.phone ? "border-red-300" : ""
                                    }`}
                                />
                                {/* {errors.phone && (
									<p className="mt-1 text-sm text-red-600">{errors.phone}</p>
								)} */}
                            </div>
                        </div>

                        {/* <div className="sm:col-span-6">
							<label htmlFor="address" className="block text-sm font-medium text-gray-700">
								Endereço
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="address"
									id="address"
									value={formData.address}
									onChange={handleChange}
									className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
										errors.address ? 'border-red-300' : ''
									}`}
								/>
								{errors.address && (
									<p className="mt-1 text-sm text-red-600">{errors.address}</p>
								)}
							</div>
						</div> */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="tipo_paciente"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tipo de Paciente
                            </label>
                            <div className="mt-1">
                                <select
                                    disabled
                                    id="tipo_paciente"
                                    name="tipo_paciente"
                                    value={formData.tipo_paciente}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "tipo_paciente",
                                            e.target.value
                                        )
                                    }
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md cursor-not-allowed"
                                >
                                    <option value="">Selecione</option>
                                    <option value="aluno">Aluno</option>
                                    <option value="funcionario">
                                        Funcionario
                                    </option>
                                </select>
                            </div>
                        </div>
                        {showAlunoFields && (
                            <>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_matricula"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Matrícula do Aluno
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_matricula"
                                            id="aluno_matricula"
                                            placeholder="213214421"
                                            value={formData.aluno.matricula}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "matricula",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_matricula && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_matricula}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_turma"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Turma
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_turma"
                                            id="aluno_turma"
                                            value={formData.aluno.turma}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "turma",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_turma && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_turma}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_campus"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Campus
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_campus"
                                            id="aluno_campus"
                                            value={formData.aluno.campus}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "campus",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_campus && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_campus}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_curso"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Curso
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_curso"
                                            id="aluno_curso"
                                            value={formData.aluno.curso}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "curso",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_curso && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_curso}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_semestre"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Semestre
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_semestre"
                                            id="aluno_semestre"
                                            value={formData.aluno.semestre}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "semestre",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_semestre && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_semestre}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_ano"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Ano
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_ano"
                                            id="aluno_ano"
                                            value={formData.aluno.ano}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "ano",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_ano && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_ano}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="aluno_fone_responsavel"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Telefone do Responsável
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="aluno_fone_responsavel"
                                            id="aluno_fone_responsavel"
                                            value={
                                                formData.aluno.fone_responsavel
                                            }
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "fone_responsavel",
                                                    e.target.value,
                                                    "aluno"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.aluno_matricula
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.aluno_fone_responsavel && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.aluno_fone_responsavel}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                        {showFuncionarioFields && (
                            <>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="funcionario_tipo_funcionario"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Tipo de Funcionario
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            disabled
                                            id="funcionario_tipo_funcionario"
                                            name="funcionario_tipo_funcionario"
                                            value={
                                                formData.funcionario
                                                    .tipo_funcionario
                                            }
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "tipo_funcionario",
                                                    e.target.value,
                                                    "funcionario"
                                                )
                                            }
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="docente">
                                                Docente
                                            </option>
                                            <option value="tecnico_administrativo">
                                                Tecnico Administrativo
                                            </option>
                                            <option value="terceirizado">
                                                Terceirizado
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="funcionario_cargo"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Cargo do Funcionario
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="funcionario_cargo"
                                            id="funcionario_cargo"
                                            value={formData.funcionario.cargo}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "cargo",
                                                    e.target.value,
                                                    "funcionario"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.funcionario_tipo
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.funcionario_cargo && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.funcionario_cargo}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="funcionario_setor"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Setor do Funcionario
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="funcionario_setor"
                                            id="funcionario_setor"
                                            value={formData.funcionario.setor}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "setor",
                                                    e.target.value,
                                                    "funcionario"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.funcionario_tipo
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.funcionario_setor && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.funcionario_setor}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="funcionario_ramal"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Ramal
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="funcionario_ramal"
                                            id="funcionario_ramal"
                                            value={formData.funcionario.ramal}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "ramal",
                                                    e.target.value,
                                                    "funcionario"
                                                )
                                            }
                                            className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                                                errors.funcionario_tipo
                                                    ? "border-red-300"
                                                    : ""
                                            }`}
                                        />
                                        {errors.funcionario_ramal && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.funcionario_ramal}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="funcionario_turno"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Turno
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="funcionario_turno"
                                            name="funcionario_turno"
                                            value={formData.funcionario.turno}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "turno",
                                                    e.target.value,
                                                    "funcionario"
                                                )
                                            }
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="matutino">
                                                Matutino
                                            </option>
                                            <option value="noturno">
                                                Noturno
                                            </option>
                                            <option value="Vespertino">
                                                Vespertino
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* <div className="flex items-center justify-between px-6 py-4 border-b">
														<h2 className="text-xl font-semibold text-gray-800">
																Histórico Médico
														</h2>
												</div>
												<div className="sm:col-span-6">
														<label
																htmlFor="alergia"
																className="block text-sm font-medium text-gray-700"
														>
																Histórico Médico
														</label>
														<div className="mt-1">
																<textarea
																		id="alergias"
																		name="alergias"
																		rows={3}
																		ref={inputPacienteAlergias}
																		className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
																		placeholder="Insira qualquer histórico médico relevante"
																/>
														</div>
												</div> */}
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={disableButton}
                            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cadastrar
                        </button>
                        {message && (
                            <p className="mt-2 text-sm text-green-600">
                                {typeof message === "string"
                                    ? message
                                    : message.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditPaciente;
