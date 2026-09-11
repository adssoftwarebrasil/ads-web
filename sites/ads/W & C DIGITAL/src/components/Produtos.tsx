import { ExternalLink, ShoppingBag, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    id: 1,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fcaixa-de-som.jpeg&version_id=null',
    alt: 'Caixas de som'
  },
  {
    id: 2,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fclimatizacao.jpeg&version_id=null',
    alt: 'Climatização'
  },
  {
    id: 3,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Feletronicos.jpeg&version_id=null',
    alt: 'Eletrodomésticos'
  },
  {
    id: 4,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fgeladeiras.jpeg&version_id=null',
    alt: 'Geladeiras'
  },
  {
    id: 5,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Finformatica.jpeg&version_id=null',
    alt: 'Informática'
  },
  {
    id: 8,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fmoveis.jpeg&version_id=null',
    alt: 'Móveis'
  },
  {
    id: 9,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fsmart-tv.jpeg&version_id=null',
    alt: "Smart TV's"
  },
  {
    id: 10,
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Falteracoes%2Fsmartphones.jpeg&version_id=null',
    alt: 'Smartphones'
  }
];

export const Produtos = () => {
  const { ref, isVisible } = useScrollAnimation();
  const WHATSAPP_URL = "https://wa.me/c/558491775185";

  return (
    <section id="produtos" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[rgb(237,27,38)] font-bold tracking-widest uppercase text-sm">Nosso Catálogo</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Produtos em Destaque
          </h2>
          <div className="w-20 h-1 bg-[rgb(237,27,38)] mx-auto rounded-full"></div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col ${
                isVisible ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Container da Imagem - Sem Padding */}
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={product.url}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay Moderno */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[rgb(237,27,38)] hover:text-white"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 line-clamp-2 min-h-[40px]">
                  {product.alt}
                </h3>
                
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold">Preço</span>
                    <span className="text-[rgb(237,27,38)] font-bold text-xs md:text-sm italic">Sob Consulta</span>
                  </div>
                  
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[rgb(237,27,38)] font-bold text-xs hover:underline"
                  >
                    Ver <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ver Catálogo Centralizado */}
        <div className="flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[rgb(237,27,38)] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-red-200"
            >
              <ShoppingBag size={20} />
              Ver Catálogo Completo no WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};