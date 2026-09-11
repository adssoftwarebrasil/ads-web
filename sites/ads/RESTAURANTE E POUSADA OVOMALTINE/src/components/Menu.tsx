import { useState } from 'react';

const IMG = 'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/';

type Category = 'Achocolatados' | 'Lanches' | 'Refeições' | 'Sobremesas';

interface Dish {
  name: string;
  desc: string;
  badge: string;
  badgeClass: string;
  img: string;
  category: Category;
}

const dishes: Dish[] = [
  {
    name: 'Achocolatado Ovomaltine',
    desc: 'O clássico de sempre. Cremoso, encorpado e com aquele sabor único que atravessou gerações.',
    badge: 'Tradicional',
    badgeClass: 'bg-brand-orange text-white',
    img: IMG + 'copo-achocolatado-e-pao-de-queijo-cortado_3000x4000.webp',
    category: 'Achocolatados',
  },
  {
    name: 'Milkshake de Ovomaltine',
    desc: 'Milkshake gelado preparado com o tradicional Ovomaltine. Cremoso e irresistível.',
    badge: 'Destaque',
    badgeClass: 'bg-brand-navy text-white',
    img: IMG + 'milkshake-chocolate-copo-mesa-interior_442x626.webp',
    category: 'Achocolatados',
  },
  {
    name: 'Achocolatado + Pão de Queijo',
    desc: 'A combinação perfeita para o café da manhã ou lanche da tarde.',
    badge: 'Combo',
    badgeClass: 'bg-emerald-600 text-white',
    img: IMG + 'achocolatado-e-pao-de-queijo-na-padaria_487x648.webp',
    category: 'Achocolatados',
  },
  {
    name: 'Misto Quente',
    desc: 'Pão crocante, presunto e queijo derretido. Simples e delicioso como deve ser.',
    badge: 'Popular',
    badgeClass: 'bg-brand-orange text-white',
    img: IMG + 'sanduiche-misto-quente-cortado-ao-meio-prato_3000x4000.webp',
    category: 'Lanches',
  },
  {
    name: 'Lanches Variados',
    desc: 'Variedade de sanduíches frescos e lanches feitos na hora para matar aquela fome.',
    badge: 'Novidade',
    badgeClass: 'bg-sky-600 text-white',
    img: IMG + 'sanduiche-misto-presunto-queijo-cortado-ao-meio_3000x4000.webp',
    category: 'Lanches',
  },
  {
    name: 'Buffet por Quilo',
    desc: 'Comida caseira farta e variada no sistema self-service. Pague só pelo que comer.',
    badge: 'Self-service',
    badgeClass: 'bg-brand-navy text-white',
    img: IMG + 'buffet-comida-caseira-variedade-pratos-quentes_1600x1200.webp',
    category: 'Refeições',
  },
  {
    name: 'Banana Split',
    desc: 'Sobremesa gelada com sorvete artesanal, calda de chocolate e frutas frescas.',
    badge: 'Favorito',
    badgeClass: 'bg-rose-600 text-white',
    img: IMG + 'banana-split-morango-baunilha-chocolate-em-prato_1200x1600.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Bolos & Doces',
    desc: 'Bolos caseiros e sobremesas feitas com amor, como antigamente.',
    badge: 'Caseiro',
    badgeClass: 'bg-amber-600 text-white',
    img: IMG + 'bolos-vitrine-confeitaria-padaria_3000x4000.webp',
    category: 'Sobremesas',
  },
];

const filters: Array<'Todos' | Category> = [
  'Todos',
  'Achocolatados',
  'Lanches',
  'Refeições',
  'Sobremesas',
];

export default function Menu() {
  const [active, setActive] = useState<'Todos' | Category>('Todos');
  const visible = active === 'Todos' ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section id="cardapio" className="section-padding bg-brand-cream bg-pattern">
      <div className="container-max">
        <div className="text-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Cardápio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Do Achocolatado ao Prato Feito
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Uma culinária inspirada nas cozinhas das avós, com sabores que você não encontra por aí.
            Tudo preparado com ingredientes frescos e muito carinho.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-gray-600 hover:bg-brand-orange/10 hover:text-brand-orange border border-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((dish, i) => (
            <div
              key={dish.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105 opacity-100"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${dish.badgeClass}`}
                >
                  {dish.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-brand-dark text-lg mb-1.5 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5524998199101?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20cardápio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-orange text-base py-3.5 px-8"
          >
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
