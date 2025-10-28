/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import axiosClient from "../utils/axios-client";

export const PacientesContext = createContext({
    data: [],
    isLoaded: false,
    setIsLoaded: () => {},
    setData: () => {},
    loadPacientes: () => {},
    editPaciente: () => {},
    deletePaciente: () => {},
    addPaciente: () => {},
});

const PacienteProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadPacientes = async (id = null) => {
        setIsLoaded(false);
        const url = id ? `/pacientes/${id}` : `/pacientes`;
        try {
            const {data} = await axiosClient.get(url);
            const _data = data?.data;
            console.log({_data});

            if(!_data) throw new Error("Erro ao carregar pacientes");

            Array.isArray(_data) && _data.reverse();
            setData(_data);
            setIsLoaded(true);
        } catch (error) {
            console.log(error);
        }
    };

    const editPaciente = () => {
        return true; //TODO
    };

    const deletePaciente = () => {
        return true; //TODO
    };

    const addPaciente = async (paciente=null) => {
        try{
            if(!paciente) throw Error("Paciente não informado");
            console.log(`Cadastrar novo paciente: `, {paciente});
            //TODO: ajustar para rota POST pacientes depois
            const {data} = await axiosClient.post(`/pacientes`, paciente);
            if(!data) throw new Error("Erro ao cadastrar paciente");
            const _data = data?.data;
            const {message} = data;
            console.log({_data, message});
            loadPacientes();
            return ({_data, message});
        } catch(error) {
            console.error(error);
            return error?.response?.data?.message || "Erro ao cadastrar paciente";
        }
    };
    /* const addPaciente = async (paciente = null) => {
        try {
            if (!paciente) throw new Error("Paciente não informado");

            console.log("Cadastrar novo paciente:", paciente);

            // Single API call to create everything
            const { data: response } = await axiosClient.post(`/pacientes`, {
                name: paciente.name,
                email: paciente.email,
                cpf: paciente.cpf,
                password: paciente.password,
                data_nascimento: paciente.data_nascimento,
                sexo: paciente.sexo,
                fone_celular: paciente.fone_celular,
                fone_fixo: paciente.fone_fixo,
                tipo_paciente: paciente.tipo_paciente,
                matricula: paciente.matricula,
                tipo_funcionario: paciente.tipo_funcionario,
            });

            const newPaciente = response?.data;
            if (!newPaciente) throw new Error("Erro ao criar paciente");

            console.log("Paciente criado:", newPaciente);

            // Refresh local list
            await loadPacientes();

            return { message: "Paciente cadastrado com sucesso!" };

        } catch (error) {
            console.error("Erro ao cadastrar paciente:", error);
            return error?.response?.data?.message || "Erro ao cadastrar paciente";
        }
    }; */

    return (
        <PacientesContext.Provider
            value={{
                data,
                setData,
                isLoaded,
                setIsLoaded,
                loadPacientes,
                editPaciente,
                deletePaciente,
                addPaciente,
            }}
        >
            {children}
        </PacientesContext.Provider>
    );
};

export default PacienteProvider;
