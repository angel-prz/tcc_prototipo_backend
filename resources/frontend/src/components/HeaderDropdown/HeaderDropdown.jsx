import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HeaderDropdown.css';

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  /* const { theme } = useTheme(); */

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   const onLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn" id="dropbtn">
        User
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <Link to="/profile">Perfil</Link>
        <Link to="/consultas">Consultas</Link>
        <div className="logout">
          <a onClick={onLogout}>
            {' '}
            Sair
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
