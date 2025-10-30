import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
import Modal from '../../components/Modal/Modal';
import './show.css';

const Show = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { pacientes } = useData();

  useEffect(() => {
    const [paciente] = pacientes.filter((paciente) => paciente.id === +id);
    if (!paciente) {
      navigate('/notfound');
      return;
    }
    setData(paciente);
  }, [id, navigate, pacientes]);

  return (
    <div className="show__main_content">
      <div className="show__container">
        {!data?.nome ? (
          <p>Carregando...</p>
        ) : (
          <Modal pacienteData={data} />
        )}
      </div>
    </div>
  );
};

export default Show;