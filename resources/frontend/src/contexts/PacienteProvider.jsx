/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import axiosClient from "../utils/axios-client";

export const PacientesContext = createContext({
    data: [],
    setData: () => {},
    isLoaded: false,
    loadPacientes: () => {},
    editPaciente: () => {},
    deletePaciente: () => {},
    addPaciente: () => {},
});

const PacienteProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadPacientes = async (id = null) => {
        const url = id ? `/pacientes/${id}` : `/pacientes`;
        try {
            const response = await axiosClient.get(url);
            console.log({ response });
            const { data } = response;
            const _data = data?.data;
            console.log(_data);
            if (!_data) throw new Error("Erro ao carregar pacientes");

            setData(_data);
        } catch (error) {
            if (error.status === 500)
                console.error("Erro ao comunicar com a API!!!");
            console.log(error);
        }
    };

    const editPaciente = () => {
        return true; //TODO
    };

    const deletePaciente = () => {
        return true; //TODO
    };

    const addPaciente = () => {
        return true; //TODO
    };

    return (
        <PacientesContext.Provider
            value={{
                data,
                isLoaded,
                setData,
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
