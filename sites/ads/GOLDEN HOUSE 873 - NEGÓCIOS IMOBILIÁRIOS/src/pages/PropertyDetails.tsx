import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { properties } from '../data/properties';
import {
  Home,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Imóvel não encontrado</h2>
          <Link to="/imoveis" className="text-[#cfa165] hover:text-[#b88a4d] font-semibold">
            Voltar para imóveis
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.imagens.length - 1 : prev - 1
    );
  };

  const whatsappMessage = `Olá! Tenho interesse no imóvel: ${property.titulo} - ${property.localizacao.bairro}, ${property.localizacao.cidade}`;
  const whatsappUrl = `https://wa.me/${property.telefoneContato}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/imoveis"
          className="inline-flex items-center text-[#cfa165] hover:text-[#b88a4d] font-semibold mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Voltar para imóveis
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96 md:h-[500px] bg-gray-900">
            <img
              src={property.imagens[currentImageIndex]}
              alt={`${property.titulo} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {property.imagens.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.imagens.length}
                </div>
              </>
            )}

            {property.destaque && (
              <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Destaque
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#cfa165] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {property.tipo === 'venda' ? 'Venda' : property.tipo === 'aluguel' ? 'Aluguel' : 'Venda/Aluguel'}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {property.tipoImovel}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.titulo}</h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-[#cfa165]" />
                  <span className="text-lg">
                    {property.localizacao.bairro}, {property.localizacao.cidade} - {property.localizacao.estado}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Bed className="w-8 h-8 text-[#cfa165]" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.detalhes.quartos}</p>
                  <p className="text-sm text-gray-600">Quartos</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Home className="w-8 h-8 text-[#cfa165]" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.detalhes.suites}</p>
                  <p className="text-sm text-gray-600">Suítes</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Car className="w-8 h-8 text-[#cfa165]" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.detalhes.vagas}</p>
                  <p className="text-sm text-gray-600">Vagas</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Maximize className="w-8 h-8 text-[#cfa165]" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.detalhes.areaConstruida}</p>
                  <p className="text-sm text-gray-600">Área Construída</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Imóvel</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{property.descricaoCurta}</p>
                <p className="text-gray-700 leading-relaxed">{property.descricaoCompleta}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Comodidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.comodidades.map((comodidade, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#cfa165] flex-shrink-0" />
                      <span className="text-gray-700">{comodidade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {property.diferenciais.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Diferenciais</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.diferenciais.map((diferencial, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#b88a4d] flex-shrink-0" />
                        <span className="text-gray-700">{diferencial}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.condominio.lazer.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Lazer do Condomínio</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.condominio.lazer.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#cfa165] flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhes Técnicos</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área Construída</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.areaConstruida}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área do Terreno</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.areaTerreno}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Quartos</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.quartos}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Suítes</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.suites}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Banheiros</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.banheiros}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Vagas de Garagem</span>
                    <span className="text-gray-900 font-semibold">{property.detalhes.vagas}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-[#cfa165]/10 to-[#b88a4d]/10 rounded-2xl p-6 shadow-lg mb-6">
                  <div className="mb-6">
                    {property.precos.venda && (
                      <div className="mb-4">
                        <span className="text-gray-600 text-sm block mb-1">Valor de Venda</span>
                        <p className="text-3xl font-bold text-[#cfa165]">
                          {formatPrice(property.precos.venda)}
                        </p>
                      </div>
                    )}
                    {property.precos.aluguel && (
                      <div>
                        <span className="text-gray-600 text-sm block mb-1">Valor de Aluguel</span>
                        <p className="text-2xl font-bold text-[#b88a4d]">
                          {formatPrice(property.precos.aluguel)}/mês
                        </p>
                      </div>
                    )}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg mb-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>

                  <a
                    href={`tel:+${property.telefoneContato}`}
                    className="w-full bg-[#cfa165] hover:bg-[#b88a4d] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#cfa165]" />
                    Localização
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Bairro:</span> {property.localizacao.bairro}</p>
                    <p><span className="font-semibold">Cidade:</span> {property.localizacao.cidade}</p>
                    <p><span className="font-semibold">Estado:</span> {property.localizacao.estado}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
