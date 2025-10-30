import { CalendarioTeste } from '../../components/CalendarioTeste/CalendarioTeste';
import CardConta from '../../components/CardConta/CardConta';
import './home.css';
import { Link } from 'react-router-dom';
//import { CalendarioTeste}  from '../../components/CalendarioTeste/CalendarioTeste';

//TODO: mostrar graficos ? dados de consultas, pacientes atendidos no dia, profissionais em plantão etc.., tipo dashboard.
const Home = () => {
  return (
    <div>
      <CardConta />
      <h1>Welcome Home</h1>
      <Link to="/pacientes"> Lista de Pacientes</Link>
      <br></br>
      <Link to="/consultas"> Lista de Consultas</Link>
      
    </div>
  );
};

export default Home;
