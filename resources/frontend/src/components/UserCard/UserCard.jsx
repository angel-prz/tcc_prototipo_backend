import { useEffect,  useContext } from 'react';
import { UsersContext } from '../../contexts/UserProvider';

const API_URL = import.meta.env.VITE_API_URL;

const UserCard = () => {

    const { data, isLoaded, loadUsers } = useContext(UsersContext);

    useEffect(() => {
        loadUsers()
    }, [])

    console.log(API_URL);
    console.log(data);

    return (
        <>
      {isLoaded && data?.length ? (
        data.map((user, key) => (
          <div
            key={key}
            className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4"
          >
            <img
              className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
              src={user.avatar || "/img/erin-lindford.jpg"}
              alt={user.name || ""}
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">{user.name}</p>
                <p className="font-medium text-gray-500">{user.tipo_usuario}</p>
              </div>
              <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                Message
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando usuários...</p>
      )}

    </>


    )
}

export default UserCard;
