import { Link } from 'react-router-dom';

const LinhaGenerica = ({ linha, colunas, tipoDados }) => {
  return (
    <tr className='hover:bg-amber-50'>
      {colunas.map((coluna) => (
        <td key={coluna} className='color-blue decoration-none p-12px text-left border-b border-gray-300'>
          {coluna === 'id' && tipoDados ? (
            <Link to={`/${tipoDados}/${linha.id}`} className='text-blue-600 decoration-0 hover: underline'>{linha[coluna]}</Link>
          ) : (
            linha[coluna]
          )}
        </td>
      ))}
    </tr>
  );
};

export default LinhaGenerica;