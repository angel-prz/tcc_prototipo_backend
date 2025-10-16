import { useEffect, useState, useRef  } from "react"
import { Search, Filter } from 'lucide-react';


const SearchBar = ( onSearch, onFilter ) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Envia os valores para o componente pai quando mudam
    useEffect(() => {
        if (typeof onSearch === 'function') {
            onSearch(searchTerm);
        }
        if (typeof onFilter === 'function') {
            onFilter(statusFilter);
        }
    }, [searchTerm, statusFilter, onSearch, onFilter]);

    return(
        <>
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="relative rounded-md shadow-sm flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Pesquisar consulta"
                />
                </div>
                <div className="flex items-center space-x-2">
                <Filter size={18} className="text-gray-500" />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                    <option value="all">Todas</option>
                    <option value="agendada">Agendada</option>
                    <option value="finalizada">Finalizada</option>
                    <option value="cancelada">Cancelada</option>
                </select>
                </div>
            </div>
      </>
    )
}

export default SearchBar;
