import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  span: string;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/guincho-rebocando-carro-preto-plataforma-amarela_1536x1024.webp',
    alt: 'Guincho rebocando carro preto na plataforma amarela',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/carro-vermelho-guinchado-na-rua-a-noite_1600x1200.webp',
    alt: 'Carro vermelho sendo guinchado à noite',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/guincho-branco-com-carro-vermelho-a-noite_1600x1200.webp',
    alt: 'Guincho branco com carro vermelho à noite',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/caminhao-branco-guincho-transportando-trator-amarelo_1536x1024.webp',
    alt: 'Caminhão transportando trator amarelo',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/trator-amarelo-caminhao-plataforma-transporte-rural_1600x1200.webp',
    alt: 'Trator amarelo no caminhão plataforma — transporte rural',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/caminhao-branco-transportando-trator-amarelo-na-rua_1280x960.webp',
    alt: 'Caminhão branco transportando trator amarelo na rua',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/mini-escavadeira-com-garra-florestal-carregando-madeira_1536x1024.webp',
    alt: 'Mini escavadeira com garra florestal carregando madeira',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/saveiro-branca-reboque-plataforma-bambui-mg_1600x1200.webp',
    alt: 'Saveiro branca no reboque plataforma em Bambuí MG',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Nossos trabalhos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Galeria de <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Confira alguns dos nossos atendimentos — de guinchos noturnos a transportes de máquinas pesadas no interior
            de Minas Gerais.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 section-reveal">
          {items.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(i)}
              className={`relative group overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 ${item.span}`}
              style={{ transitionDelay: '0ms' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium line-clamp-2 text-left">{item.alt}</span>
              </div>
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn width={14} height={14} strokeWidth={2} className="lucide lucide-zoom-in text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            onClick={() => setActive(null)}
          >
            <X width={32} height={32} strokeWidth={2} />
          </button>
          <img
            src={items[active].src}
            alt={items[active].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
