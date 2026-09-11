import { useState } from 'react';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Client {
  name: string;
  image: string;
}

const clients: Client[] = [
  { name: 'Óticas Diniz', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2F11.jpg' },
  { name: 'Social Distribuidora', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2F22.jpg' },
  { name: 'Favo de Mel', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2F33.jpg' },
  { name: 'HapVida', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2F44.jpg' },
  { name: 'Carmen Steffens', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-1-GP-2.png' },
  { name: 'Reciclatech', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-1-GP-3.png' },
  { name: 'Faloni Máquinas', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-1-GP-5.png' },
  { name: 'Jacto', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-10-GP.png' },
  { name: 'North Star Táxi Aéreo', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-2-GP.png' },
  { name: 'Saga Volkswagen', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-3-GP.png' },
  { name: 'My Broker', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-4-GP.png' },
  { name: 'Ortobom', image: 'https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fcases-6-GP.png' },
];

const itemsPerView = 4;

export default function ClientsCarousel() {
  const maxIndex = clients.length - itemsPerView;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <Building2 size={16} className="text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Nossos Clientes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empresas que <span className="text-blue-600">Confiam em Nós</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Marcas de diversos segmentos conquistando resultados excepcionais
          </p>
        </div>
        <div className="relative mb-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Próximo"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {clients.map((client) => (
                <div key={client.name} className="flex-shrink-0 px-3" style={{ width: '25%' }}>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-100 overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-5 text-center">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {client.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Sua empresa pode ser a próxima!</p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
