import { useState } from 'react';

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Camiseta Escolar Dry',
    category: 'Escolar',
    description: 'Camiseta dry fit para uniformes escolares',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camiseta%20dray%20escolar.jpeg',
  },
  {
    name: 'Conjunto Esportivo',
    category: 'Escolar',
    description: 'Conjunto completo para atividades esportivas escolares',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/conjunto%20esportivo.jpeg',
  },
  {
    name: 'Camisa Social Manga Longa',
    category: 'Empresarial',
    description: 'Camisa social manga longa para uniformes corporativos',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camisa%20social%20ML.jpeg',
  },
  {
    name: 'Camisa Social Manga Curta',
    category: 'Empresarial',
    description: 'Camisa social manga curta para uso empresarial',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camisa%20social%20mc.jpeg',
  },
  {
    name: 'Camisa Polo',
    category: 'Empresarial',
    description: 'Camisa polo personalizada para sua empresa',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/polo.jpeg',
  },
  {
    name: 'Jaleco Mecânico',
    category: 'Operacional',
    description: 'Jaleco resistente para uso em mecânicas e indústrias',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/jaleco%20mecanico.jpeg',
  },
  {
    name: 'Camiseta Refletiva',
    category: 'Operacional',
    description: 'Camiseta com faixa refletiva para segurança no trabalho',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camiseta%20refletivo.jpeg',
  },
  {
    name: 'Camiseta Refletiva c/ Bolso',
    category: 'Operacional',
    description: 'Camiseta refletiva com bolso para praticidade',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camiseta%20reflet%20bolso.jpeg',
  },
  {
    name: 'Calça Refletiva',
    category: 'Operacional',
    description: 'Calça com faixa refletiva para normas de segurança',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/calc%CC%A7a%20refletivo.jpeg',
  },
  {
    name: 'Colete',
    category: 'Operacional',
    description: 'Colete profissional para uso operacional',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/colete.jpeg',
  },
  {
    name: 'Avental',
    category: 'Operacional',
    description: 'Avental resistente para cozinhas e laboratórios',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/avental.jpeg',
  },
  {
    name: 'Jaleco Profissional',
    category: 'Profissional',
    description: 'Jaleco para profissionais de saúde e estética',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/jaleco.jpeg',
  },
  {
    name: 'Regata',
    category: 'Personalizada',
    description: 'Regata personalizada para times e eventos',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/regata.jpeg',
  },
  {
    name: 'Camiseta Personalizada',
    category: 'Personalizada',
    description: 'Camiseta personalizada para grupos e eventos',
    image: 'https://storage.lucasmendes.dev/site-sp/malhariarolim/camiseta%20pescaria.jpeg',
  },
];

const filters = ['Todos', 'Escolar', 'Empresarial', 'Operacional', 'Profissional', 'Personalizada'];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Nossos Produtos</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Catálogo Completo</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Peças de alta qualidade, personalizadas para atender sua escola, empresa ou equipe.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={
                active === filter
                  ? 'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-brand-red text-white shadow-md'
                  : 'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:border-brand-red hover:text-brand-red'
              }
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visible.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-square bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full h-[16%] bg-white z-10 pointer-events-none"></div>
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4 relative z-20 bg-white">
                <h3 className="font-bold text-gray-900 text-base mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
                <a
                  href={`https://wa.me/5566992236989?text=Ol%C3%A1%2C+tenho+interesse+no+produto%3A+${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-block text-center bg-brand-red text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-red-dark transition-all duration-200"
                >
                  Pedir Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
