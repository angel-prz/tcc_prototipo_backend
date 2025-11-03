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
    createAtendimento: () => {},
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

        try {
            const { data } = await axiosClient.get(url);
            console.log({ data });

            // usa o próprio data
            if (!data)
                throw new Error("Erro ao carregar contagem de consultas");

            // Aqui estão as chaves corretas
            console.log("Agendadas:", data.por_status.agendada);
            console.log("Total:", data.total);

            // se quiser salvar tudo no estado
            setData(data);
            setIsLoaded(true);
        } catch (error) {
            console.error("Erro ao carregar consultas:", error);
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

    const createAtendimento = async (id, consulta) => {
        try {
            console.log(`Atualizar atendimento da consulta id: ${id}`, {
                consulta,
            });
            const { data } = await axiosClient.put(
                `/consultas/${id}/atendimento`
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
                createAtendimento,
            }}
        >
            {children}
        </ConsultasContext.Provider>
    );
};

export default ConsultaProvider;
