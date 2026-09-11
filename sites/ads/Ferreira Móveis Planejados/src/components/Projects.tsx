import { useState } from 'react';
import { ZoomIn } from 'lucide-react';

interface Project {
  category: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    category: 'Cozinha',
    title: 'Cozinha Moderna com Ilha',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/cozinha-moderna-armarios-cinza-fogao-ilha_720x1280.webp',
  },
  {
    category: 'Closet',
    title: 'Closet Moderno em Madeira Clara',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/closet-moderno-bege-madeira-clara_720x1280.webp',
  },
  {
    category: 'Sala de Estar',
    title: 'Sala de Estar com Painel TV',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/sala-estar-moderna-tv-painel-madeira_720x1280.webp',
  },
  {
    category: 'Cozinha',
    title: 'Cozinha com Armários Cinza',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/cozinha-armarios-cinza-geladeira-inox-utensilios_720x1280.webp',
  },
  {
    category: 'Closet',
    title: 'Closet Organizado com Iluminação',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/closet-organizado-bege-com-gavetas-e-ilumina-ao_640x1138.webp',
  },
  {
    category: 'Escritório',
    title: 'Escritório Minimalista',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/escritorio-minimalista-cadeira-preta-parede-madeira_640x1136.webp',
  },
  {
    category: 'Sala de Estar',
    title: 'Painel de TV com Decoração',
    image:
      'https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/sala-estar-tv-painel-madeira-decoracao_720x1280.webp',
  },
];

const filters = ['Todos', 'Cozinha', 'Closet', 'Sala de Estar', 'Escritório'];

export default function Projects() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#5b5c57] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Nossos Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-tight mb-5">
            Ambientes que Inspiram
          </h2>
          <p className="text-[#5b5c57] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada projeto é único. Confira alguns dos ambientes que transformamos com móveis planejados de alto padrão.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === filter
                  ? 'bg-[#212121] text-white shadow-md'
                  : 'bg-[#e4e6e7] text-[#5b5c57] hover:bg-[#5b5c57] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, index) => (
            <div
              key={project.title}
              className={`relative group overflow-hidden rounded-2xl bg-[#e4e6e7] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ${
                index === 0 && active === 'Todos' ? 'sm:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                <span className="text-xs text-[#e4e6e7]/80 uppercase tracking-widest font-medium mb-1">
                  {project.category}
                </span>
                <span className="text-white font-semibold text-base">{project.title}</span>
                <div className="mt-3 flex items-center gap-1 text-[#e4e6e7] text-xs">
                  <ZoomIn className="lucide lucide-zoom-in" width={14} height={14} />
                  <span>Ver em detalhe</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/556696510268?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20móveis%20planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#212121] text-[#e4e6e7] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#5b5c57] transition-all duration-300 shadow-lg"
          >
            Quero um Projeto Como Este
          </a>
        </div>
      </div>
    </section>
  );
}
