import './sidebar.css';
import { Link } from 'react-router-dom';

export const Sidebar = ({ layoutType }) => {
  return (
    <nav id="menu" className="menu">
      <div>
        <p className="pMenu">Menu</p>
        <div className="sidebar" id="sidebar">
          {/* Links para AdmLayout */}
          {layoutType === 'adm' && (
            <>
              <Link to="/users">Usuarios</Link>
            </>
          )}
          {/* Links para GuestLayout */}
          {layoutType === 'guest' && (
            <>
              {/* <Link to="/">Home</Link> */}
              <Link to="/login">Login</Link>
              <Link to="/profissionais">Profissionais</Link>
              <Link to="/horarios">Horários Profissionais</Link>
            </>
          )}
          {layoutType === 'paciente' && (
            <>
               <Link to="/">Home</Link>
              <Link to="/pacientes">Pacientes</Link>
              <Link to="/consultas">Consultas</Link>
            </>
          )}  
        </div>
      </div>
    </nav>
  );
};
