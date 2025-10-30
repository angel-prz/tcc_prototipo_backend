/* import './TabelaGenerica.css'; */
import LinhaGenerica from '../LinhaGenerica/LinhaGenerica';

const TabelaGenerica = ({ dados, colunas, titulos, tipoDados }) => {
  return (
    <div className="flex  flex-wrap justify-center w-full overflow-x-auto mt-20">
      <table className="w-full border-collapse border-gray-600 border-solid mt-20 bg-white">
        <thead className='p-2 text-left border-collapse  bg-white font-semibold'>
          <tr>
            {titulos.map((titulo, index) => (
              <th className="justify-center"
              key={index}>
                {titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {dados.map((item, index) => (
            <LinhaGenerica
              key={`${tipoDados}-${index}`}
              linha={item}
              colunas={colunas}
              tipoDados={tipoDados}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaGenerica;