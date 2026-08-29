import { Link } from 'react-router-dom';
import { Home, Bed, Car, Maximize, MapPin } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const mainImage = property.imagens && property.imagens.length > 0
    ? property.imagens[0]
    : 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <Link to={`/imoveis/${property.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={mainImage}
            alt={property.titulo}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {property.destaque && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destaque
            </div>
          )}
          <div className="absolute top-4 right-4 bg-[#cfa165] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.tipo === 'venda' ? 'Venda' : property.tipo === 'aluguel' ? 'Aluguel' : 'Venda/Aluguel'}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/imoveis/${property.id}`}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-800 hover:text-[#cfa165] transition-colors">
              {property.titulo}
            </h3>
          </div>
        </Link>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.localizacao.bairro}, {property.localizacao.cidade}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center text-gray-700">
            <Bed className="w-5 h-5 mr-2 text-[#cfa165]" />
            <span className="text-sm font-medium">{property.detalhes.quartos} quartos</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Home className="w-5 h-5 mr-2 text-[#cfa165]" />
            <span className="text-sm font-medium">{property.detalhes.suites} suítes</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Car className="w-5 h-5 mr-2 text-[#cfa165]" />
            <span className="text-sm font-medium">{property.detalhes.vagas} vagas</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Maximize className="w-5 h-5 mr-2 text-[#cfa165]" />
            <span className="text-sm font-medium">{property.detalhes.areaConstruida}</span>
          </div>
        </div>

        {property.comodidades && property.comodidades.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {property.comodidades.slice(0, 3).map((comodidade, index) => (
                <span
                  key={index}
                  className="bg-[#cfa165]/10 text-[#b88a4d] px-3 py-1 rounded-full text-xs font-medium"
                >
                  {comodidade}
                </span>
              ))}
              {property.comodidades.length > 3 && (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                  +{property.comodidades.length - 3} mais
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-end justify-between">
          <div>
            {property.precos.venda && (
              <div className="mb-1">
                <span className="text-sm text-gray-600">Venda</span>
                <p className="text-2xl font-bold text-[#cfa165]">
                  {formatPrice(property.precos.venda)}
                </p>
              </div>
            )}
            {property.precos.aluguel && (
              <div>
                <span className="text-sm text-gray-600">Aluguel</span>
                <p className="text-xl font-bold text-[#b88a4d]">
                  {formatPrice(property.precos.aluguel)}/mês
                </p>
              </div>
            )}
          </div>
          <Link
            to={`/imoveis/${property.id}`}
            className="bg-[#cfa165] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b88a4d] transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
