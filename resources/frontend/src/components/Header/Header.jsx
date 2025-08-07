import './header.css';
import { Link } from 'react-router-dom';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img
                src="imagens/prontuario.png"
                alt="Logo Prontuario"
                className="logo-img"
              />
            </Link>
          </div>
          <div className="header_dataHora" id="header_dataHora"></div>
          <HeaderDropdown />
        </div>
      </header>
    </>
  );
};
