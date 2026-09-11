import { useState, type ReactNode } from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
  badge: string;
  category: string;
}

interface Filter {
  key: string;
  label: string;
  icon: ReactNode;
}

const products: Product[] = [
  {
    title: 'Equipamentos STIHL',
    description: 'Alta performance para trabalhos pesados.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fequipamentos-sthil.webp',
    badge: 'jardinagem',
    category: 'jardinagem',
  },
  {
    title: 'Cortadores de Grama',
    description: 'Precisão e corte perfeito para seu jardim.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fcortadores-grama-verdes.webp',
    badge: 'jardinagem',
    category: 'jardinagem',
  },
  {
    title: 'Ferramentas Profissionais',
    description: 'Durabilidade para o dia a dia da obra.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fferramentas-loja-gedore.webp',
    badge: 'ferramentas',
    category: 'ferramentas',
  },
  {
    title: 'Compressores',
    description: 'Potência pneumática industrial.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fcompressores-ferramentas-loja.webp',
    badge: 'ferramentas',
    category: 'ferramentas',
  },
  {
    title: 'Motores Elétricos',
    description: 'Eficiência energética garantida.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fmotores-prateleira-loja.webp',
    badge: 'assistencia',
    category: 'assistencia',
  },
  {
    title: 'Peças Hidráulicas',
    description: 'Manutenção e reparo especializado.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fprateleira-pecas-hidraulicas.webp',
    badge: 'assistencia',
    category: 'assistencia',
  },
  {
    title: 'Conexões Metálicas',
    description: 'Resistência e segurança nas junções.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fprateleira-conexoes-metalicas.webp',
    badge: 'ferramentas',
    category: 'ferramentas',
  },
  {
    title: 'Produtos Diversos',
    description: 'Soluções variadas para sua necessidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/eletricamega%2Fprateleira-produtos-estoque.webp',
    badge: 'DIVERSOS',
    category: 'diversos',
  },
];

const filters: Filter[] = [
  {
    key: 'todos',
    label: 'Todos',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    key: 'jardinagem',
    label: 'Jardinagem',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    key: 'ferramentas',
    label: 'Ferramentas',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    key: 'assistencia',
    label: 'Assistência',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

export default function Products() {
  const [active, setActive] = useState('todos');

  const visible =
    active === 'todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#292358_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[rgb(236,33,40)] font-semibold tracking-wider uppercase text-sm">
            Catálogo Completo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(41,35,88)] mt-2 mb-6">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nosso amplo catálogo de equipamentos profissionais, ferramentas de alta precisão
            e peças de reposição.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActive(filter.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                  active === filter.key
                    ? 'bg-[rgb(41,35,88)] text-white border-[rgb(41,35,88)] shadow-lg scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[rgb(236,33,40)] hover:text-[rgb(236,33,40)]'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visible.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[rgb(41,35,88)]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-2 group-hover:text-[rgb(236,33,40)] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-gray-50 text-[rgb(41,35,88)] border border-gray-200 px-4 py-3 rounded-xl hover:bg-[rgb(236,33,40)] hover:text-white hover:border-[rgb(236,33,40)] transition-all duration-300 font-medium group/btn"
                >
                  Solicitar Orçamento
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
