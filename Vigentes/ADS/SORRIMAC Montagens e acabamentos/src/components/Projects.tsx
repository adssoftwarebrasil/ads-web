import { ZoomIn } from 'lucide-react';
import { InstagramIcon } from './icons';

interface Project {
  image: string;
  alt: string;
  category: string;
  title: string;
}

const projects: Project[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/construcao-metalica-estrutura-predio-em-andamento_382x510.webp',
    alt: 'Estrutura Steel Frame',
    category: 'Steel Frame',
    title: 'Estrutura Steel Frame',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/fachada-predio-sorrimac-construcao-seco_680x382.webp',
    alt: 'Fachada Comercial',
    category: 'Construção a Seco',
    title: 'Fachada Comercial',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/casa-branca-moderna-em-construcao-ceu-azul_382x510.webp',
    alt: 'Casa Moderna',
    category: 'Drywall',
    title: 'Casa Moderna',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/sala-em-reforma-com-teto-de-gesso_287x510.webp',
    alt: 'Forro de Gesso',
    category: 'Gesso',
    title: 'Forro de Gesso',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/estrutura-metalica-casa-construcao-dois-andares_297x510.webp',
    alt: 'Residência 2 Andares',
    category: 'Steel Frame',
    title: 'Residência 2 Andares',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/sorrimac/img/sala-reuniao-mesa-computadores-plantas-sorrimac_680x453.webp',
    alt: 'Projeto Técnico',
    category: 'Planejamento',
    title: 'Projeto Técnico',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Nossos Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Obras que <span className="text-brand-orange">Falam por Si</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Cada projeto é único. Veja exemplos do nosso trabalho em Steel Frame, Drywall e Gesso por toda a região.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="gallery-item opacity-0 translate-y-8 relative group cursor-pointer rounded-2xl overflow-hidden w-full h-[250px] md:h-[350px]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-brand-orange text-xs font-semibold uppercase tracking-wider mb-1">{p.category}</span>
                <h3 className="text-white font-bold">{p.title}</h3>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="lucide lucide-zoom-in text-white" width={16} height={16} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/sorrimac_gesso_drywall/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-brand-orange transition-colors duration-200 text-sm font-medium"
          >
            Ver mais projetos no Instagram
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
