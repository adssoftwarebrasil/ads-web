import { useState } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  desc: string;
  img: string;
}

const categories = [
  'Todos',
  'Linha Própria',
  'Anti-inflamatório',
  'Pré-Treino',
  'Saúde Cognitiva',
  'Emagrecimento',
  'Saúde Mental',
  'Digestão',
  'Detox',
  'Antienvelhecimento',
  'Performance',
];

const products: Product[] = [
  {
    name: 'Kalmia Hair',
    category: 'Linha Própria',
    desc: 'Multivitamínico para cabelos, unhas, pele e imunidade.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-suplemento-vitaminico-kalmia-hair_190x300.webp',
  },
  {
    name: 'Curqfen',
    category: 'Anti-inflamatório',
    desc: 'Cúrcuma de alta absorção para inflamação e dor.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-remedio-kalmia-curqfen-capsulas_239x300.webp',
  },
  {
    name: 'Metabolic Fit',
    category: 'Pré-Treino',
    desc: 'Suporte metabólico para resultados duradouros.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-suplemento-metabolic-fit-kalmia_239x300.webp',
  },
  {
    name: 'Brain Factor 7',
    category: 'Saúde Cognitiva',
    desc: 'Nootrópico para foco, memória e performance cerebral.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-verde-suplemento-cerebral-brain-factor_239x300.webp',
  },
  {
    name: 'Greenselect',
    category: 'Emagrecimento',
    desc: 'Extrato de chá verde para energia e queima de gordura.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-verde-capsulas-kalmia-greenselect_239x300.webp',
  },
  {
    name: 'Bacopa Monnieri',
    category: 'Saúde Mental',
    desc: 'Memória, concentração e proteção neurológica.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-remedio-bacopa-monnieri-verde_300x269.webp',
  },
  {
    name: 'Biointestil',
    category: 'Digestão',
    desc: 'Saúde intestinal e equilíbrio da microbiota.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-remedio-kalmia-biointestil-verde_300x269.webp',
  },
  {
    name: 'Chlorella',
    category: 'Detox',
    desc: 'Desintoxicação, energia e nutrição celular.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-suplemento-chlorella-kalmia-rotulo-verde_300x269.webp',
  },
];

function waLink(name: string) {
  return `http://wa.me/5516991594153?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto ${name}. Pode me dar mais informações?`
  )}`;
}

export default function Products() {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            Linha de produtos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Produtos de <span className="text-primary">alta qualidade</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Conheça nossa linha exclusiva de suplementos e fórmulas manipuladas, desenvolvidos com os melhores
            ativos do mercado.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-10 animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-primary text-white shadow-md'
                  : 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gray-50 p-4 flex items-center justify-center h-44 relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-36 w-auto object-contain group-hover:scale-110 transition-transform duration-400"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">{p.category}</span>
                <h3 className="text-gray-900 font-bold text-sm mt-1 mb-1.5">{p.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                <a
                  href={waLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary font-semibold text-xs hover:gap-2.5 transition-all duration-200"
                >
                  <ShoppingBag size={13} className="lucide lucide-shopping-bag" />
                  Pedir agora
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center animate-on-scroll">
          <button className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200">
            Ver todos os 11 produtos
            <ArrowRight size={16} className="lucide lucide-arrow-right" />
          </button>
        </div>
        <div className="mt-12 bg-gradient-to-r from-primary to-brand-green rounded-2xl p-8 text-white text-center animate-on-scroll">
          <h3 className="text-xl font-bold mb-2">Não encontrou o que procura?</h3>
          <p className="text-white/80 mb-6">
            Nossas farmacêuticas desenvolvem fórmulas exclusivas para qualquer necessidade. Fale conosco!
          </p>
          <a
            href="http://wa.me/5516991594153"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3 rounded-full hover:bg-brand-cream transition-colors"
          >
            Solicitar fórmula personalizada <ArrowRight size={16} className="lucide lucide-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
