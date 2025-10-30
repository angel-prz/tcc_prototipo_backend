import { createContext, useState, useEffect } from "react";
import axiosClient from "../utils/axios-client";


export const UsersContext = createContext({
  data: [],
  isLoaded: false,
  loadUsers: () => {},
  setIsLoaded:()=>{},
  setData: () => {},
  editUser: () => {},
  deleteUser: () => {},
  createUser: () => {},
});

const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  const loadUsers = async (id = null) => {
    const url = id ? `/users/${id}` : `/users`;
    try {
      const {data} = await axiosClient.get(url);
      const _data = data?.data;
      console.log({_data});

      if (!_data) 
        throw new Error("Erro ao carregar usuarios");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = () => {
    return true; //TODO
  };

  const deleteUser = () => {
    return true; //TODO
  };

  const createUser = () => {
    return true; //TODO
  };

  useEffect(()=>{
    data && setIsLoaded(true)
    return ()=>setIsLoaded(false)
  },[data])

  return (
    <UsersContext.Provider
      value={{
        data,
        isLoaded,
        setIsLoaded,
        loadUsers,
        setData,
        editUser,
        deleteUser,
        createUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
