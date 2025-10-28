import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfissionaisContext } from "../../contexts/ProfissionalProvider";
import { Plus, Search, UserCircle, ArrowUpRight } from "lucide-react";
import ModalAddProfissional from "./ModalAddProfissional";

/* const API_URL = import.meta.env.VITE_API_URL;
 */
const Profissionais = () => {
    const { data, isLoaded, loadProfissionais } =
        useContext(ProfissionaisContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        loadProfissionais();
    }, []);

    /*     console.log("url", API_URL);
     */ console.log(data);

    const filteredProfissionais = data.filter((profissional) => {
        const name =
            `${profissional.user.name} ${profissional.user.name}`.toLowerCase();
        return (
            name.includes(searchTerm.toLowerCase()) ||
            profissional.user.email
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            profissional.numero_conselho?.includes(searchTerm.toLowerCase())
        );
    });
    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold leading-tight text-gray-800">
                        Profissionais de Saúde
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Gerenciar profissionais de saúde
                    </p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                        type="button"
                        onClick={openModal}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Plus className="-ml-1 mr-2 h-4 w-4" />
                        Adicionar Profissional
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="relative rounded-md shadow-sm max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pesquise por nome, numero do conselho ou e-mail"
                />
            </div>

            {/* Professional List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {isLoaded && data.length > 0 ? (
                        filteredProfissionais.map((profissional) => (
                            <li key={profissional.id}>
                                <Link
                                    to={`/profissionais/${profissional.id}`}
                                    className="block hover:bg-gray-50"
                                >
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                                                    <UserCircle className="h-6 w-6 text-teal-600" />
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-teal-600">
                                                        {profissional.user.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {
                                                            profissional.tipo_profissional
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-4 text-right">
                                                    <p className="text-sm text-gray-900">
                                                        {
                                                            profissional.sigla_conselho
                                                        }{" "}
                                                        /{" "}
                                                        {
                                                            profissional.uf_conselho
                                                        }
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {
                                                            profissional.numero_conselho
                                                        }
                                                    </p>
                                                </div>
                                                <ArrowUpRight className="h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-5 text-center text-gray-500">
                            {searchTerm
                                ? "Nenhum profissional corresponde à sua pesquisa"
                                : "Nenhum profissional encontrado"}
                        </li>
                    )}
                </ul>
            </div>

            {/* Add Professional Modal */}
            {isModalOpen && <ModalAddProfissional onClose={closeModal} />}
        </div>
    );
};

export default Profissionais;
