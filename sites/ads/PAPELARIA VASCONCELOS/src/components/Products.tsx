import { useState } from 'react';
import { ShoppingBag, ZoomIn } from 'lucide-react';

interface Product {
  category: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { category: 'Acessórios', name: 'Abraçadeira Nylon', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fabracadeira-nylon-branca.webp' },
  { category: 'Material Escolar', name: 'Borracha Heróis', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fborracha-herois-avengers.webp' },
  { category: 'Material Escolar', name: 'Borrachas Coloridas', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fborrachas-coloridas.webp' },
  { category: 'Material Escolar', name: 'Borrachas Elementos', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fborrachas-elementos-coloridos.webp' },
  { category: 'Tecnologia', name: 'Cabo USB', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcabo-usb-impressora.webp' },
  { category: 'Papelaria', name: 'Canetas BIC', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcaixa-canetas-bic.webp' },
  { category: 'Tecnologia', name: 'Calculadora', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcalculadora-branca-numeros.webp' },
  { category: 'Acessórios', name: 'Cola Instantânea', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcaneca-quebrada-cola.webp' },
  { category: 'Papelaria', name: 'Canetas Neon', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcanetas-coloridas-neon.webp' },
  { category: 'Papelaria', name: 'Canetas Esferográficas', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcanetas-esferograficas-coloridas.webp' },
  { category: 'Papelaria', name: 'Marcadores Quadro', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcartuchos-marcador-quadro.webp' },
  { category: 'Tecnologia', name: 'CD Virgem', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcd-virgem-gravavel.webp' },
  { category: 'Acessórios', name: 'Chaveiros', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fchaveiros-carros-logos.webp' },
  { category: 'Papelaria', name: 'Cola Artesanato', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcola-artesanato-frascos.webp' },
  { category: 'Acessórios', name: 'Cordas Violão', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcordas-violao-aco-nylon.webp' },
  { category: 'Papelaria', name: 'Encadernação', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fencadernacao-espiral-cadernos.webp' },
  { category: 'Papelaria', name: 'Extrator Grampos', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fextrator-de-grampos.webp' },
  { category: 'Papelaria', name: 'Fichas Pautadas', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Ffichas-pautadas-tilibra.webp' },
  { category: 'Papelaria', name: 'Fitas Adesivas', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Ffitas-adesivas-coloridas.webp' },
  { category: 'Tecnologia', name: 'Bobina Térmica', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fimpressora-bobina-termica.webp' },
  { category: 'Papelaria', name: 'Livro Movimento', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Flivro-movimento-caixa.webp' },
  { category: 'Papelaria', name: 'Livro Ponto', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Flivro-ponto-domestico.webp' },
  { category: 'Material Escolar', name: 'Minas Lapiseiras', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fmina-lapiseiras-tamanhos.webp' },
  { category: 'Acessórios', name: 'Palitos Madeira', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fpalitos-churrasco-madeira.webp' },
  { category: 'Papelaria', name: 'Papel Casca Ovo', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fpapel-casca-ovo.webp' },
  { category: 'Papelaria', name: 'Papel Colorido', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fpapel-colorido-rolos.webp' },
  { category: 'Papelaria', name: 'Pasta Papelão', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fpasta-papelao-trilho.webp' },
  { category: 'Acessórios', name: 'Porta Objetos', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fporta-objetos-transparente.webp' },
  { category: 'Material Escolar', name: 'Régua Geométrica', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fregua-geometrica-transparente.webp' },
  { category: 'Acessórios', name: 'Acessórios Divertidos', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fsereia-lhama-unicornio-astronauta.webp' },
  { category: 'Papelaria', name: 'Trilho Pasta', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Ftrilho-para-pasta.webp' },
  { category: 'Papelaria', name: 'Xerox', image: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fxerox-disponivel-aqui.webp' },
];

const filters = [
  { label: 'Todos', count: 32 },
  { label: 'Papelaria', count: 16 },
  { label: 'Material Escolar', count: 5 },
  { label: 'Tecnologia', count: 4 },
  { label: 'Acessórios', count: 7 },
];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(0,148,216)]/10 to-[rgb(18,70,156)]/10 px-6 py-2.5 rounded-full mb-6 backdrop-blur-sm">
            <ShoppingBag width={24} height={24} strokeWidth={2} className="lucide lucide-shopping-bag w-4 h-4 text-[rgb(0,148,216)]" />
            <p className="text-[rgb(0,148,216)] font-bold text-sm tracking-wider uppercase">Nosso Catálogo</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgb(45,52,142)] mb-4 md:mb-6 leading-tight">
            Nossos Produtos em{' '}
            <span className="bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Confira parte do nosso extenso catálogo de produtos. Visite nossa loja para ver tudo que temos!
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
            {filters.map((f) => {
              const isActive = active === f.label;
              return (
                <button
                  key={f.label}
                  onClick={() => setActive(f.label)}
                  className={`group relative px-4 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 font-semibold text-sm md:text-base shadow-md hover:shadow-xl ${
                    isActive
                      ? 'bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] text-white scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {f.label}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-gray-200 group-hover:bg-gray-300'
                      }`}
                    >
                      {f.count}
                    </span>
                  </span>
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 transition-opacity duration-300 opacity-100">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105"
              style={{ animation: '0.6s ease-out 0s 1 normal forwards running fadeInUp' }}
            >
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[rgb(18,70,156)] font-semibold text-xs">{p.category}</p>
              </div>
              <div className="absolute top-3 right-3 z-10 bg-[rgb(0,148,216)] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <ZoomIn width={24} height={24} strokeWidth={2} className="lucide lucide-zoom-in w-4 h-4" />
              </div>
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white font-bold text-sm md:text-base text-center drop-shadow-lg leading-tight">
                  {p.name}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[rgb(0,148,216)] transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-block bg-gradient-to-r from-[rgb(0,148,216)]/5 to-[rgb(18,70,156)]/5 rounded-3xl p-8 md:p-12">
            <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-2xl">
              Gostou do que viu? Temos muito mais na nossa loja física!
            </p>
            <a
              href="https://wa.me/5581995483408?text=Olá! Vi os produtos no site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag width={24} height={24} strokeWidth={2} className="lucide lucide-shopping-bag w-5 h-5" />
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
