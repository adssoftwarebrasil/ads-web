import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { Filter, Search } from 'lucide-react';
import { properties } from '../data/properties';

export default function Properties() {
  const [filterType, setFilterType] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter((property) => {
    const matchesType = filterType === 'todos' || property.tipo === filterType;
    const matchesSearch =
      property.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.localizacao.bairro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.localizacao.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.descricaoCurta?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.descricaoCompleta?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.tipoImovel.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    /* Espaçamento responsivo: pt-24 no mobile e pt-32 no desktop (md:) */
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 md:pt-32">
      
      <div className="relative bg-gradient-to-r from-[#cfa165] to-[#b88a4d] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Nossos Imóveis</h1>
          <p className="text-xl text-white/90">
            Encontre o imóvel perfeito para você
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por localização, tipo (casa, village)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cfa165] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cfa165] focus:border-transparent bg-white cursor-pointer outline-none"
              >
                <option value="todos">Todos os Negócios</option>
                <option value="venda">Venda</option>
                <option value="aluguel">Aluguel</option>
                <option value="venda_ou_aluguel">Venda ou Aluguel</option>
              </select>
            </div>
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar seus filtros ou busca
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600 flex justify-between items-center">
              <p className="text-lg">
                Exibindo <span className="font-semibold text-gray-800">{filteredProperties.length}</span>
                {filteredProperties.length === 1 ? ' imóvel' : ' imóveis'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}