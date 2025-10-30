import { useState, useEffect } from "react";
import axios from "axios";

const ConsultaCountCard = () => {
    const [consultaCount, setConsultaCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConsultaCount = async () => {
            try {
                const response = await axios.get("/api/consultas/count");
                setConsultaCount(response.data);
                setLoading(false);
            } catch (err) {
                setError("Erro ao carregar o número de consultas");
                setLoading(false);
            }
        };

        fetchConsultaCount();
    }, []);

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Total de Consultas
            </h3>
            <p className="text-3xl font-bold text-blue-600">{consultaCount}</p>
        </div>
    );
};

export default ConsultaCountCard;
