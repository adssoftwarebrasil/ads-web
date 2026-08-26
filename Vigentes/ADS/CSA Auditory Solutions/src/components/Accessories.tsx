import { ExternalLink } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const accessories: string[] = [
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(15).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(16).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(17).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(18).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(19).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(20).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(21).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(22).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(23).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image%20(24).png',
  'https://storage.lucasmendes.dev/site-sp/csamanaus/carrosel/image.jpg',
];

export default function Accessories() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Acessórios
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça os melhores acessórios do mercado
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore nossa linha completa de acessórios para aparelhos auditivos
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {accessories.map((src, i) => (
            <div key={src} className="flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 h-full flex flex-col">
                  <div className="aspect-square p-4 flex items-center justify-center bg-white">
                    <img
                      src={src}
                      alt={`Acessório ${i + 1}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-full px-4 text-center">
                    <span className="inline-flex items-center justify-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg w-full">
                      Consultar{' '}
                      <ExternalLink className="lucide lucide-external-link " width={14} height={14} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
