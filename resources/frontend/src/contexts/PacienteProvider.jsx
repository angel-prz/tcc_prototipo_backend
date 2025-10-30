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
    loadConsultas: () => {},
});

const PacienteProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadPacientes = async (id = null) => {
        setIsLoaded(false);
        const url = id ? `/pacientes/${id}` : `/pacientes`;
        try {
            const { data: response } = await axiosClient.get(url);
            const _data = response?.data;

            if(!_data) throw new Error("Erro ao carregar pacientes");

            if(Array.isArray(_data)) {
                _data.reverse();
                setData(_data);
            } else {
                // Se for um único paciente
                setData([_data]);
            }
            setIsLoaded(true);
        } catch (error) {
            console.error("Erro ao carregar pacientes:", error);
            setIsLoaded(true);
        }
    };

    const editPaciente = async (id, paciente) => {
        try {
            const { data: response } = await axiosClient.put(`/pacientes/${id}`, paciente);
            await loadPacientes();
            return response;
        } catch (error) {
            console.error("Erro ao editar paciente:", error);
            throw error;
        }
    };

    const deletePaciente = async (id) => {
        try {
            await axiosClient.delete(`/pacientes/${id}`);
            await loadPacientes(); // Recarrega a lista
            return true;
        } catch (error) {
            console.error("Erro ao deletar paciente:", error);
            throw error;
        }
    };

    const addPaciente = async (paciente = null) => {
        try {
            if (!paciente) throw new Error("Paciente não informado");

            const { data: response } = await axiosClient.post(`/pacientes`, paciente);
            const _data = response?.data;
            const { message } = response;

            await loadPacientes();
            return { _data, message };
        } catch (error) {
            console.error(error);
            throw error?.response?.data?.message || "Erro ao cadastrar paciente";
        }
    };

    //TODO: Implementar a função para adicionar um novo paciente
    /* const addPaciente = async (paciente=null) => {
        try{
             if(!paciente) throw new Error("Paciente não informado");
            console.log(`Cadastrar novo paciente: `, {paciente});
            const { data } = await axiosCliente.post(`/pacientes`, paciente);
            if(!data) throw new Error("Erro ao cadastrar paciente");
            const _data = data?.data;
            const {message} = data;

            console.log({_data, message});
            loadPacientes();
            return message;
        } catch (error) {
            console.error(error);
            return error?.response?.data?.message || "Erro ao cadastrar paciente";
        }
    } */

    const loadConsultas = async (id) => {
        try {
            const { data: response } = await axiosClient.get(`/pacientes/${id}/consultas`);
            return response?.data || [];
        } catch (error) {
            console.error("Erro ao carregar consultas:", error);
            return [];
        }
    };

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
                loadConsultas,
            }}
        >
            {children}
        </PacientesContext.Provider>
    );
};

export default PacienteProvider;
