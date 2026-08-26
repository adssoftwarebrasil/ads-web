import { useState } from 'react';

interface GalleryItem {
  image: string;
  alt: string;
  category: string;
  title: string;
}

const filters = ['Todos', 'Ambientes', 'Produtos', 'Acabamentos', 'Acessórios'];

const items: GalleryItem[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fsala-estar-moderna.webp',
    alt: 'Sala de Estar Moderna',
    category: 'Ambientes',
    title: 'Sala de Estar Moderna',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fquarto-aconchegante-moderno.webp',
    alt: 'Quarto Aconchegante',
    category: 'Ambientes',
    title: 'Quarto Aconchegante',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fsala-jantar-moderna.webp',
    alt: 'Sala de Jantar Moderna',
    category: 'Ambientes',
    title: 'Sala de Jantar Moderna',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fmesa-jantar-moderna.webp',
    alt: 'Mesa de Jantar',
    category: 'Ambientes',
    title: 'Mesa de Jantar',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Frolos-de-vinil.webp',
    alt: 'Pisos Vinílicos em Rolo',
    category: 'Produtos',
    title: 'Pisos Vinílicos em Rolo',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fborracha-antiderrapante-preta.webp',
    alt: 'Piso de Borracha Antiderrapante',
    category: 'Produtos',
    title: 'Piso de Borracha Antiderrapante',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Ftapete-listrado-colorido.webp',
    alt: 'Tapete Listrado Colorido',
    category: 'Produtos',
    title: 'Tapete Listrado Colorido',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Ftapete-preto-capacho-grafite.webp',
    alt: 'Capacho e Tapetes',
    category: 'Produtos',
    title: 'Capacho e Tapetes',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Fpapel-tema-churrasco.webp',
    alt: 'Papel de Parede Decorativo',
    category: 'Produtos',
    title: 'Papel de Parede Decorativo',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Frodape-branco-madeira.webp',
    alt: 'Rodapé Branco',
    category: 'Acabamentos',
    title: 'Rodapé Branco',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Frodape-madeira-marrom.webp',
    alt: 'Rodapé Madeira',
    category: 'Acabamentos',
    title: 'Rodapé Madeira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Flata-kisafix.webp',
    alt: 'Acessórios e Cola',
    category: 'Acessórios',
    title: 'Acessórios e Cola',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredItems =
    activeFilter === 'Todos' ? items : items.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-[rgb(254,238,171)] text-[rgb(66,66,152)] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Galeria
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Inspire-se com Nossos<span className="block text-[rgb(66,66,152)]">Projetos Realizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a qualidade e variedade de produtos que transformam ambientes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[rgb(66,66,152)] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-semibold text-[rgb(252,205,59)] mb-1">{item.category}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
