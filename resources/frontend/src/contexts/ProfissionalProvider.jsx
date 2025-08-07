import { createContext, useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const ProfissionaisContext = createContext({
  data: null,
  setData: () => {},
  loadProfissionais: () => {},
  editProfissional: () => {},
  deleteProfissional: () => {},
  createProfissional: () => {},
  isLoaded: false,
});

const ProfissionaisProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadProfissionais = async (id = null) => {
    const url = id ? `${API_URL}/profissionais/${id}` : `${API_URL}/profissionais`;
    setIsLoaded(false);
    try {
     const response = await fetch(url);
      if (response.status !== 200)
        throw new Error("Erro ao carregar profissionais!!");

      const {data} = await response.json();
      console.log({data})
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editProfissional = () => {
    return true;
  };

  const deleteProfissional = () => {
    return true;
  };

  const createProfissional = () => {
    return true; //TODO
  };

   useEffect(()=>{
    data && setIsLoaded(true)
    return ()=>setIsLoaded(false)
  },[data])

  return (
    <ProfissionaisContext.Provider
      value={{
        data,
        loadProfissionais,
        editProfissional,
        deleteProfissional,
        createProfissional,
        isLoaded,
      }}
    >
      {children}
    </ProfissionaisContext.Provider>
  )
};

export default ProfissionaisProvider;
