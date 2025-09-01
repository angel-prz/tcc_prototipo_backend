import { useContext, useEffect } from "react";
import { ConsultasContext } from '../../contexts/ConsultaProvider';
import  StatsCard  from '../../components/StatsCard/StatsCard';
import { ClipboardList } from 'lucide-react';

const ProfissionalDashboard = () => {

    const { data, isLoaded, countConsultas } = useContext(ConsultasContext);

    useEffect(() => {
        countConsultas();
    }, []);

    return (
        isLoaded && data?.length > 0 ? (
            <StatsCard
                title="Consultas"
                value={data}
                icon={<ClipboardList className="h-6 w-6 text-purple-600" />}
                linkTo="/consultas"
            />
        ) : null
    );
}

export default ProfissionalDashboard;
