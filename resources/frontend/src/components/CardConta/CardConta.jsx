import { useEffect, useContext } from 'react';
import { ConsultasContext } from '../../contexts/ConsultaProvider';


const CardConta = () => {

  const {data, countConsultas} = useContext(ConsultasContext);

  useEffect(() => {
    countConsultas()
  }, []);

  console.log(data.count);
  console.log(data);

  return (
    <h1>Consultas: {data.count}</h1> 
  );

}

export default CardConta;