import { ZoomIn, Video, Play } from 'lucide-react';

const projects = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/album-de-casamento-sobre-mesa-de-madeira_719x1280.webp',
    alt: 'Álbuns de Casamento',
    category: 'Encadernação',
    title: 'Álbuns de Casamento',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/albuns-viagem-nova-york-espanha-disney_720x1280.webp',
    alt: 'Álbuns de Viagem',
    category: 'Recordações',
    title: 'Álbuns de Viagem',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/camisa-corinthians-autografada-emoldurada-vitrine-laborphoto_720x1280.webp',
    alt: 'Emolduramento de Camisas',
    category: 'Molduras Especiais',
    title: 'Emolduramento de Camisas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/capa-album-15-anos-baloes-dourados_720x1280.webp',
    alt: 'Álbuns de 15 Anos',
    category: 'Eventos',
    title: 'Álbuns de 15 Anos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/homem-terno-sorrindo-foto-profissional-laborphoto_720x1280.webp',
    alt: 'Retratos Corporativos',
    category: 'Estúdio',
    title: 'Retratos Corporativos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/tres-guitarras-em-molduras-na-parede_1280x960.webp',
    alt: 'Decoração Personalizada',
    category: 'Molduras',
    title: 'Decoração Personalizada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/quadro-arco-iris-decorativo-e-remos-na-parede_720x1280.webp',
    alt: 'Quadros Decorativos',
    category: 'Decoração',
    title: 'Quadros Decorativos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/homem-sorrindo-molduras-foto-estante_1280x853.webp',
    alt: 'Variedade de Molduras',
    category: 'Loja',
    title: 'Variedade de Molduras',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/laborphoto/img2/homem-laborphoto-fundo-fotos-conheca-empresa_719x1280.webp',
    alt: 'Nossa Estrutura',
    category: 'Laborphoto',
    title: 'Nossa Estrutura',
  },
];

const videos = [
  'https://storage.lucasmendes.dev/site-sp/laborphoto/vid/WhatsApp Video 2026-02-09 at 15.08.47 (1).mp4',
  'https://storage.lucasmendes.dev/site-sp/laborphoto/vid/WhatsApp Video 2026-02-09 at 15.08.47 (2).mp4',
  'https://storage.lucasmendes.dev/site-sp/laborphoto/vid/WhatsApp Video 2026-02-09 at 15.08.47 (4).mp4',
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,126,198)] font-bold text-sm uppercase tracking-wider">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Galeria de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)]">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos de revelação, restauração, encadernação e molduras
            personalizadas.
          </p>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[3/4] cursor-pointer"
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(6,51,133)]/90 via-[rgb(6,51,133)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-300 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                  </span>
                  <h4 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.title}
                  </h4>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center mb-8 space-x-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <Video className="w-6 h-6 text-[rgb(34,9,92)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Bastidores e Detalhes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((src) => (
              <div
                key={src}
                className="bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group aspect-[9/16]"
              >
                <video
                  src={src}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Seu navegador não suporta a tag de vídeo.
                </video>
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <Play className="w-12 h-12 text-white opacity-50 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
