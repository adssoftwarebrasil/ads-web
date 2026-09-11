import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

type Category = 'Promotoras' | 'Eventos' | 'Panfletagem' | 'Feiras';

interface Item {
  src: string;
  alt: string;
  category: Category;
}

const filters = ['Todos', 'Promotoras', 'Eventos', 'Panfletagem', 'Feiras'] as const;
type Filter = (typeof filters)[number];

const items: Item[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/promotoras-eldorado-kro-acao-supermercado_828x1453.webp',
    alt: 'Promotoras em ação',
    category: 'Promotoras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/palco-equipado-externo-noturno-piscina-ao-fundo_1280x963.webp',
    alt: 'Palco externo noturno',
    category: 'Eventos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mulher-vinho-degustacao-promocao-supermercado_720x1280.webp',
    alt: 'Degustação de vinho',
    category: 'Feiras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mulheres-comper-promocao-faixa-humana-rua_720x886.webp',
    alt: 'Faixa humana',
    category: 'Panfletagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/feira-de-vinhos-mulher-frios-queijos-frutas_1280x853.webp',
    alt: 'Feira de vinhos',
    category: 'Feiras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/degustacao-isotonico-jungle-mercado-promotoras-produto_828x1426.webp',
    alt: 'Degustação isotônico',
    category: 'Promotoras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/promocao-coca-cola-pessoas-latas-supermercado_713x1280.webp',
    alt: 'Promoção Coca-Cola',
    category: 'Promotoras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mesa-de-som-digital-e-palco-com-luzes_1280x960.webp',
    alt: 'Mesa de som digital',
    category: 'Eventos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mascotes-pascoa-fort-banco-decoracao-loja_720x1280.webp',
    alt: 'Mascotes de Páscoa',
    category: 'Eventos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/promocao-mrv-faixa-panfletos-pessoas-rua_720x897.webp',
    alt: 'Promoção MRV',
    category: 'Panfletagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mulher-passaporte-vinho-roda-sorteio-feira_1280x853.webp',
    alt: 'Feira de vinhos sorteio',
    category: 'Feiras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/promotoras-acao-compre-ganhe-supermercado_720x1280.webp',
    alt: 'Ação compre e ganhe',
    category: 'Promotoras',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('Todos');
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const visible = active === 'Todos' ? items : items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[rgb(248,248,248)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(234,50,56)] mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(53,53,53)] mb-4">
            Nossos Trabalhos
            <br />
            <span className="text-[rgb(234,50,56)]">em Ação</span>
          </h2>
          <p className="text-[rgb(53,53,53)]/60 max-w-xl mx-auto">
            Veja como transformamos ideias em experiências memoráveis para marcas de todo o Mato
            Grosso.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === filter
                  ? 'bg-[rgb(234,50,56)] text-white shadow-lg shadow-[rgb(234,50,56)]/30'
                  : 'bg-white text-[rgb(53,53,53)] hover:bg-[rgb(253,208,162)] border border-[rgb(53,53,53)]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {visible.map((item, index) => (
            <div
              key={item.src}
              onClick={() => setLightbox(item)}
              className="reveal-scale break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${(index % 4) * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[rgb(53,53,53)]/0 group-hover:bg-[rgb(53,53,53)]/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  width={32}
                  height={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X width={32} height={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
