import { useState } from 'react';
import { Download, FileText, MessageCircle, Search, Package } from 'lucide-react';

const catalogs = [
  {
    title: 'Catálogo Arquitech 2025',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FCatalogo%20Arquitech%202025.pdf',
    brand: 'Arquitech',
  },
  {
    title: 'Catálogo Vexa',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FCatalogo_Vexa.pdf',
    brand: 'Vexa',
  },
  {
    title: 'Catálogo Eliane 2025',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FCata%CC%81logo%20Eliane%202025_.pdf',
    brand: 'Eliane',
  },
  {
    title: 'Catálogo Geral Elizabeth',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FCata%CC%81logo%20Geral%20Elizabeth.pdf',
    brand: 'Elizabeth',
  },
  {
    title: 'Catálogo Elleve',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FElleve%20-%20Cata%CC%81logo%20digital%20-%20co%CC%81d.%2011814.pdf',
    brand: 'Elleve',
  },
  {
    title: 'OBI - Cobogós',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2FOBI%20REVESTIMENTOS%20-%20CATA%CC%81LOGO%20DIGITAL%20COBOGO%CC%81S.pdf',
    brand: 'OBI',
  },
  {
    title: 'Catálogo Gauss 2025',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fcatalogo%20gauss%202025.pdf',
    brand: 'Gauss',
  },
  {
    title: 'Eliane Floor 2025',
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fcatalogo-eliane-floor-2025-web%201.pdf',
    brand: 'Eliane',
  },
];

export default function Catalogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCatalogs = catalogs.filter(catalog =>
    catalog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    catalog.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showNoResults = searchTerm && filteredCatalogs.length === 0;

  return (
    <section id="catalogos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Catálogos Digitais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Baixe nossos catálogos e conheça toda a linha de produtos disponíveis
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por marca ou produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
            />
          </div>
        </div>

        {showNoResults && (
          <div className="text-center mb-12 p-8 bg-white rounded-2xl border-2 border-dashed border-gray-300">
            <Package className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-bold text-black mb-2">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Temos mais opções disponíveis! Entre em contato conosco.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCatalogs.map((catalog, index) => (
            <a
              key={index}
              href={catalog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-black rounded-xl flex items-center justify-center transition-colors duration-300">
                  <FileText className="text-black group-hover:text-white transition-colors" size={24} />
                </div>
                <Download className="text-gray-400 group-hover:text-black transition-colors" size={20} />
              </div>

              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                {catalog.title}
              </h3>

              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {catalog.brand}
                </span>
              </div>
            </a>
          ))}

          <a
            href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20solicitar%20o%20catálogo%20completo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl border-2 border-green-400 hover:border-green-300 transition-all duration-300 hover:shadow-xl flex flex-col text-white"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2">
              Solicitar Catálogo Completo
            </h3>

            <p className="text-sm text-white/90 mb-4">
              Receba o catálogo completo via WhatsApp com todas as opções disponíveis
            </p>

            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                WhatsApp
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20informações%20sobre%20catálogos%20de%20outras%20marcas"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-black p-6 rounded-2xl border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl flex flex-col text-white"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Package className="text-white" size={24} />
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2">
              Mais Marcas Disponíveis
            </h3>

            <p className="text-sm text-white/90 mb-4">
              Catálogos atualizados anualmente. Consulte outras marcas e produtos
            </p>

            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                Consultar
              </span>
            </div>
          </a>
        </div>

        {(showNoResults || searchTerm) && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20solicitar%20o%20catálogo%20completo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-black mb-1 group-hover:text-green-600 transition-colors">
                  Solicitar via WhatsApp
                </h4>
                <p className="text-sm text-gray-600">
                  Receba o catálogo completo
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20informações%20sobre%20catálogos%20de%20outras%20marcas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="text-white" size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-black mb-1 group-hover:text-gray-700 transition-colors">
                  Outras Marcas
                </h4>
                <p className="text-sm text-gray-600">
                  Consulte mais opções
                </p>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
