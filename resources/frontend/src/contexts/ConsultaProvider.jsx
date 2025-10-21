import { createContext, useState, useEffect } from "react";
import axiosClient from "../utils/axios-client";

export const ConsultasContext = createContext({
    data: [],
    isLoaded: false,
    loadConsultas: () => {},
    countConsultas: () => {},
    setIsLoaded: () => {},
    setData: () => {},
    editConsulta: () => {},
    deleteConsulta: () => {},
    createConsulta: () => {},
});

const ConsultaProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadConsultas = async (id = null) => {
        setIsLoaded(false);
        const url = id ? `/consultas/${id}` : `/consultas`;
        try {
            const { data } = await axiosClient.get(url);
            const _data = data?.data;
            console.log({ _data });

            if (!_data) throw new Error("Erro ao carregar consultas");

            Array.isArray(_data) && _data.reverse();
            setData(_data);
            setIsLoaded(true);
        } catch (error) {
            console.log(error);
            setIsLoaded(true);
        }
    };

    const countConsultas = async () => {
        const url = "/consultas/count";

        console.log(url);
        try {
            const { data } = await axiosClient.get(url);
            console.log({ data });
            const _data = data?.data;
            console.log({ _data });

            if (!_data) throw new Error("Erro ao carregar usuarios");

            Array.isArray(_data) && _data.reverse();
            setData(_data);
        } catch (error) {
            console.log(error);
        }
    };

    const editConsulta = async (id, consulta = null) => {
        /* return true; //TODO */
        try {
            console.log(`Atualizar consulta id: ${id}`, { consulta });
            const { data } = await axiosClient.put(
                `/consultas/${id}`,
                consulta
            );
            if (!data) throw new Error("Error ao atualizar consulta");
            const _data = data?.data;
            const { message } = data;

            console.log({ _data, message });
            loadConsultas();
            return message;
        } catch (error) {
            console.error(error);
            return (
                error?.response?.data?.message || "Erro ao atualizar a consulta"
            );
        }
    };

    const deleteConsulta = async (consulta = null) => {
        console.log(`Remove consulta id: ${consulta.id}`);
        const data = await axiosClient.delete(`/consultas/${consulta.id}`);
        console.log({ data });
        loadConsultas();
        return true;
    };

    const createConsulta = async (consulta = null) => {
        try {
            if (!consulta) throw Error("Consulta inválida");
            console.log(`Criar nova consulta`, { consulta });
            const data = axiosClient.post("/consultas", consulta);
            if (!data) throw new Error("Erro ao criar consulta");
            const _data = data?.data;
            const { message } = data;

            console.log({ data }, message);
            loadConsultas();
            return message;
        } catch (error) {
            console.error(error);
            return error?.response?.data?.message || "Erro ao criar a cosnulta";
        }
    };

    useEffect(() => {
        data && setIsLoaded(true);
        return () => setIsLoaded(false);
    }, [data]);

    return (
        <ConsultasContext.Provider
            value={{
                data,
                isLoaded,
                setIsLoaded,
                loadConsultas,
                countConsultas,
                setData,
                editConsulta,
                deleteConsulta,
                createConsulta,
            }}
        >
            {children}
        </ConsultasContext.Provider>
    );
};

export default ConsultaProvider;
