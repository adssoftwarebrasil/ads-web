import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

type Category = 'Todos' | 'Tecidos' | 'Motorizados' | 'Acessórios' | 'Químicos';

interface Product {
  category: Exclude<Category, 'Todos'>;
  title: string;
  image: string;
}

const categories: Category[] = ['Todos', 'Tecidos', 'Motorizados', 'Acessórios', 'Químicos'];

const products: Product[] = [
  {
    category: 'Tecidos',
    title: 'Tecidos Veludo Coloridos',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftecidos-veludo-coloridos.webp',
  },
  {
    category: 'Tecidos',
    title: 'Mostruário de Tecidos',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fmostruario-tecidos-mesa.webp',
  },
  {
    category: 'Tecidos',
    title: 'Tecidos Cores e Amostras',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftecidos-cores-amostras.webp',
  },
  {
    category: 'Motorizados',
    title: 'Trilho Motorizado com Controle',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilho-motorizado-controle.webp',
  },
  {
    category: 'Motorizados',
    title: 'Trilho Curvo Motorizado',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilho-curvo-motorizado.webp',
  },
  {
    category: 'Motorizados',
    title: 'Trilhos Motorizados Montados',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilhos-motorizados-montados.webp',
  },
  {
    category: 'Motorizados',
    title: 'Trilho Motorizado Promoção',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilho-motorizado-promocao.webp',
  },
  {
    category: 'Acessórios',
    title: 'Franjas Azuis para Cortina',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ffranjas-azuis-cortina.webp',
  },
  {
    category: 'Acessórios',
    title: 'Anéis Plásticos',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Faneis-plasticos-pretos-brancos.webp',
  },
  {
    category: 'Acessórios',
    title: 'Trilho com Corda Profissional',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilho-corda-profissional.webp',
  },
  {
    category: 'Acessórios',
    title: 'Trilhos e Acessórios',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftrilhos-acessorios-pretos.webp',
  },
  {
    category: 'Acessórios',
    title: 'Linhas e Carretéis Coloridos',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Flinhas-carreteis-coloridos.webp',
  },
  {
    category: 'Acessórios',
    title: 'Perfis Preto e Branco',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fperfis-preto-branco.webp',
  },
  {
    category: 'Acessórios',
    title: 'Suporte Metálico Colorido',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fsuporte-metalico-colorido.webp',
  },
  {
    category: 'Químicos',
    title: 'Cola Spray Kisafix',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fcola-spray-kisafix.webp',
  },
  {
    category: 'Químicos',
    title: 'Kisafix BSC Lata',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fkisafix-bsc-lata.webp',
  },
  {
    category: 'Químicos',
    title: 'Spray Lubrificante para Persianas',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fspray-lubrificante-persianas.webp',
  },
  {
    category: 'Químicos',
    title: 'Limpador Industrial',
    image:
      'https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Flimpador-industrial-lata.webp',
  },
];

export default function Products() {
  const [active, setActive] = useState<Category>('Todos');

  const visible =
    active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Nosso Catálogo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Produtos de{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Qualidade Superior
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Variedade completa para cortinas, tapeçaria automotiva e sistemas motorizados
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? 'px-6 py-2.5 rounded-full font-medium transition-all bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                  : 'px-6 py-2.5 rounded-full font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-2">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center space-x-2">
                  <MessageCircle className="lucide lucide-message-circle" size={18} />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 sm:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Entre em contato conosco e encontraremos a solução perfeita para você
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl inline-flex items-center space-x-2">
              <MessageCircle className="lucide lucide-message-circle" size={22} />
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
