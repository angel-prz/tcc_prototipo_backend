import { createContext, useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const HorariosProfissionalContext = createContext({
  data: null,
  setData: () => {},
  loadHorariosProfissional: () => {},
  editHorariosProfissional: () => {},
  deleteHorariosProfissional: () => {},
  createHorariosProfissional: () => {},
  isLoaded: false,
});

const HorariosProfissionalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadHorariosProfissional = async (id = null) => {
    const url = id ? `${API_URL}/horarios_profissional/${id}` : `${API_URL}/horarios_profissional`;
    setIsLoaded(false);
    try {
     const response = await fetch(url);
      if (response.status !== 200)
        throw new Error("Erro ao carregar horarios!!");

      const {data} = await response.json();
      console.log({data})
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editHorariosProfissional = () => {
    return true;
  };

  const deleteHorariosProfissional = () => {
    return true;
  };

  const createHorariosProfissional = () => {
    return true; //TODO
  };

   useEffect(()=>{
    data && setIsLoaded(true)
    return ()=>setIsLoaded(false)
  },[data])

  return (
    <HorariosProfissionalContext.Provider
      value={{
        data,
        loadHorariosProfissional,
        editHorariosProfissional,
        deleteHorariosProfissional,
        createHorariosProfissional,
        isLoaded,
      }}
    >
      {children}
    </HorariosProfissionalContext.Provider>
  )
};

export default HorariosProfissionalProvider;
