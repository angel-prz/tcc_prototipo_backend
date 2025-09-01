/* import { ProfissionalProvider } from './contexts/ProfissionalProvider'; */
/* import { PacienteProvider } from './contexts/PacienteProvider'; */
import ConsultaProvider from '../contexts/ConsultaProvider';
import ProfissionalDashboard from '../pages/ProfissionalDashboard/ProfissionalDashboard';

const ProfissionalDashboardWrapper = () => (
/*  <ProfissionalProvider> */
    /* <PacienteProvider> */
      <ConsultaProvider>
        <ProfissionalDashboard />
      </ConsultaProvider>
    /* </PacienteProvider> */
/*  </ProfissionalProvider>
 */
);

export default ProfissionalDashboardWrapper;
