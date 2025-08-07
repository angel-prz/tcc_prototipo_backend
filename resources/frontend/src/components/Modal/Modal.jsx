import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './modal.scss';

//modal provisorio , feito com ajuda do chatgpt // REFATORAR 
const Modal = ({ pacienteData }) => {
  const navigate = useNavigate();

  const [nome, setNome] = useState(pacienteData.nome);
  const [email, setEmail] = useState(pacienteData.email);
  const [cpf, setCpf] = useState(pacienteData.cpf);
  const [dataNascimento, setDataNascimento] = useState(pacienteData.data_nascimento);
  const [telefone, setTelefone] = useState(pacienteData.telefone);
  const [dataConsulta, setDataConsulta] = useState(pacienteData.data_consulta);

  // Handlers to update the state
  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCpfChange = (e) => setCpf(e.target.value);
  const handleDataNascimentoChange = (e) => setDataNascimento(e.target.value);
  const handleTelefoneChange = (e) => setTelefone(e.target.value);
  const handleDataConsultaChange = (e) => setDataConsulta(e.target.value);

  //teste: temporario
  const onSubmit = (e) => 
    {
      e.preventDefault();
      console.log({
        nome,
        email,
        cpf,
        dataNascimento,
        telefone,
        dataConsulta,
      });
    }
  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="form_modal">
        <h3>Ficha de Paciente</h3>
        <span className="close" onClick={() => navigate('/pacientes')}>&times;</span>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          id="formCadastroUsuario"
          onSubmit={onSubmit}
        >
          <p>
            <label htmlFor="ficha_nome">Nome:</label>{' '}
            <input 
              type="text" 
              name="ficha_nome" 
              id="ficha_nome" 
              value={pacienteData.nome}
              onChange={handleNomeChange}
              
            />
          </p>
          <p>
            <label htmlFor="ficha_email">Email:</label>{' '}
            <input 
              type="email" 
              name="ficha_email" 
              id="ficha_email" 
              value={pacienteData.email}
              onChange={handleEmailChange}
            />
          </p>
          <p>
            <label htmlFor="ficha_cpf">CPF:</label>{' '}
            <input
              type="text"
              name="ficha_cpf"
              id="ficha_cpf"
              className="campoCPF"
              maxLength="11"
              value={pacienteData.cpf}
              onChange={handleCpfChange}
            />
          </p>
          <p>
            <label htmlFor="ficha_datanascimento">Data de Nascimento:</label>{' '}
            <input
              type="date"
              name="ficha_datanascimento"
              id="ficha_datanascimento"
              value={pacienteData.data_nascimento}
              onChange={handleDataNascimentoChange}
            />
          </p>
          <p>
            <label htmlFor="ficha_telefone">Telefone:</label>{' '}
            <input
              type="text"
              name="ficha_telefone"
              id="ficha_telefone"
              className="campoTelefone"
              value={pacienteData.telefone}
              onChange={handleTelefoneChange}
            />
          </p>
          <p>
            <label>Sexo: </label>
            <span>{pacienteData.sexo}</span>
          </p>
          <p>
            <label htmlFor="ficha_dataconsulta">Data da Consulta:</label>{' '}
            <input
              type="date"
              name="ficha_dataconsulta"
              id="ficha_dataconsulta"
              value={pacienteData.data_consulta}
              onChange={handleDataNascimentoChange}
            />
          </p>
          {/* TODO: Botão de Excluir: adicionar confirmação (digitar o nome do paciente para confirmar exclusão)  */}
          <Link to="/Pacientes">
             <button className="bt_excluir"> Excluir </button>
          </Link>
         
          {/* TODO: Editar no próprio modal, arrumar os campos para ser editaveis  */}
          <Link to="/Pacientes">
            <button className="bt_ficha"> Editar </button>
          </Link>
          
          <Link to="/Pacientes">
            <button className=""> Voltar </button>
          </Link>
        
        </form>
      </div>
    </div>
  );
};

export default Modal;