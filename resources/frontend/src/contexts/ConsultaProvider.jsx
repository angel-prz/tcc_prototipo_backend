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
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadConsultas = async (id = null) => {
        const url = id ? `/consultas/${id}` : `/consultas`;
        try {
            const { data } = await axiosClient.get(url);
            const _data = data?.data;
            console.log({ _data });

            if (!_data) throw new Error("Erro ao carregar usuarios");

            Array.isArray(_data) && _data.reverse();
            setData(_data);
        } catch (error) {
            console.log(error);
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

    const editConsulta = () => {
        return true; //TODO
    };

    const deleteConsulta = async (consulta = null) => {
        console.log(`Remove consulta id: ${consulta.id}`);
        const data = await axiosClient.delete(`/consultas/${consulta.id}`);
        console.log({ data });
        loadConsultas();
        return message;
    };

    const createConsulta = () => {
        return true; //TODO
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
