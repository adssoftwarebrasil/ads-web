import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

type Product = {
  name: string;
  category: 'Cadeiras' | 'Mesas' | 'Sofás';
  image: string;
  badge?: { label: string; className: string };
};

const products: Product[] = [
  {
    name: 'Cadeiras Giratórias',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fcadeiras-escritorio-giratorias.webp',
    badge: { label: 'Mais Vendido', className: 'bg-brand-red text-white' },
  },
  {
    name: 'Cadeira Gamer Premium',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fcadeira-gamer-preta.webp',
    badge: { label: 'Destaque', className: 'bg-brand-blue text-white' },
  },
  {
    name: 'Cadeiras Executivas',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fcadeiras-escritorio-brancas-cinzas.webp',
  },
  {
    name: 'Cadeiras Coloridas',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fcadeiras-escritorio-coloridas.webp',
    badge: { label: 'Novidade', className: 'bg-brand-yellow text-brand-navy text-white' },
  },
  {
    name: 'Mesa de Escritório',
    category: 'Mesas',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fmesa-escritorio-madeira.webp',
  },
  {
    name: 'Escrivaninha de Canto',
    category: 'Mesas',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fescrivaninha-canto-madeira.webp',
    badge: { label: 'Destaque', className: 'bg-brand-blue text-white' },
  },
  {
    name: 'Mesa Dobrável',
    category: 'Mesas',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fmesa-dobravel-giraflex.webp',
  },
  {
    name: 'Mesa Executiva',
    category: 'Mesas',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fmesa-madeira-preta.webp',
  },
  {
    name: 'Sofá para Recepção',
    category: 'Sofás',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Fsofa-marrom-promocao.webp',
    badge: { label: 'Promoção', className: 'bg-brand-red text-white' },
  },
  {
    name: 'Cadeiras Presidente',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Ftres-cadeiras-giratorias.webp',
  },
  {
    name: 'Cadeiras Secretária',
    category: 'Cadeiras',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex/img/about-img-menor.webp',
  },
  {
    name: 'Conjunto Escritório',
    category: 'Mesas',
    image: 'https://storage.lucasmendes.dev/site-sp/giralflex/img/about-img.webp',
    badge: { label: 'Kit', className: 'bg-brand-navy text-white' },
  },
];

const filters = ['Todos', 'Cadeiras', 'Mesas', 'Sofás'] as const;

function productHref(name: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${name}`)}`;
}

export default function Products() {
  const [active, setActive] = useState<(typeof filters)[number]>('Todos');
  const visible = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Nosso Catálogo</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
            Produtos que Unem <span className="text-brand-blue">Design e Conforto</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 leading-relaxed">
            Explore nossa seleção de cadeiras, mesas e móveis de escritório com qualidade e procedência garantida.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 opacity-100 translate-y-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === f
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/25'
                  : 'bg-gray-100 text-brand-navy/70 hover:bg-brand-sky/30 hover:text-brand-blue'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((p) => (
            <a
              key={p.name}
              href={productHref(p.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-1 opacity-100 translate-y-0"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badge.className} text-xs font-bold px-3 py-1 rounded-full`}>
                    {p.badge.label}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowRight width={18} height={18} className="lucide lucide-arrow-right text-brand-blue" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-brand-blue/70 font-medium mb-1">{p.category}</p>
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{p.name}</h3>
                <p className="text-xs text-brand-navy/50 mt-1">Clique para consultar o preço</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10 lg:mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-navy/25"
          >
            Ver Catálogo Completo
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
