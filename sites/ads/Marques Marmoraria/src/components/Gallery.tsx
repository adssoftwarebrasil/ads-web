import { ZoomIn } from 'lucide-react';

const projects = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/ilha-granito-preto-branco-area-gourmet_1600x1200.webp',
    title: 'Ilha Gourmet Granito',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/banheiro-moderno-pia-branca-espelho-oval_1200x1600.webp',
    title: 'Banheiro Moderno',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/cozinha-moderna-ilha-granito-cinza-claro_1600x1197.webp',
    title: 'Cozinha com Ilha',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/escada-marmore-branca-em-construcao-interior_1200x1600.webp',
    title: 'Escada em Mármore',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/ilha-marmore-branco-torneira-dourada-pia-embutida_1197x1600.webp',
    title: 'Ilha com Torneira Dourada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-de-banheiro-marmore-com-cuba-embutida_1600x1200.webp',
    title: 'Pia com Cuba Embutida',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/cozinha-marmore-preto-ilha-pia-azulejos_1200x1600.webp',
    title: 'Cozinha Mármore Preto',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-de-marmore-cinza-em-cozinha-moderna_1200x1600.webp',
    title: 'Cozinha Cinza Moderna',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/bancada-granito-preta-lavatorio-fabricacao-oficina_1200x1600.webp',
    title: 'Bancada Granito Preta',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/balcao-marmore-branco-instalado-area-externa_1200x1600.webp',
    title: 'Balcão Área Externa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-de-banheiro-cinza-com-duas-cubas_1200x1600.webp',
    title: 'Pia Dupla',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-marmore-branca-com-cuba-inox_1599x899.webp',
    title: 'Mármore com Cuba Inox',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Nossos Trabalhos</p>
          <h2 className="section-title text-white mb-5">Galeria de Projetos</h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Cada projeto é único. Conheça alguns dos trabalhos que realizamos em Aparecida de Goiânia e região.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projects.map((project) => (
            <div key={project.title} className="gallery-item relative cursor-pointer group aspect-square">
              <img src={project.src} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  className="lucide lucide-zoom-in text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  width={28}
                  height={28}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
