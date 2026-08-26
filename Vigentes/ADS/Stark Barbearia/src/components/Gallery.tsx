import { Crown, Sparkles, Shield, type LucideIcon } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/starkbarbearia/sala-de-espera-sofisticada-com-sofa-preto_765x1020.webp',
    alt: 'Sala de espera sofisticada com sofá preto',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/starkbarbearia/barbearia-cadeiras-pretas-pisos-de-madeira_765x1020.webp',
    alt: 'Cadeiras pretas com pisos de madeira',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/starkbarbearia/recepcao-madeira-cadeiras-pretas-estantes-produtos_765x1020.webp',
    alt: 'Recepção com madeira e produtos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/starkbarbearia/barbearia-cadeiras-pretas-vazias-aguardando-clientes_765x1020.webp',
    alt: 'Cadeiras aguardando clientes',
  },
];

interface GalleryFeature {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const galleryFeatures: GalleryFeature[] = [
  {
    icon: Crown,
    title: 'Ambiente Premium',
    description: 'Estrutura moderna projetada para homens que valorizam qualidade e conforto',
  },
  {
    icon: Sparkles,
    title: 'Detalhes Sofisticados',
  },
  {
    icon: Shield,
    title: 'Padrão Elevado',
    description: 'Limpeza, organização e profissionalismo em cada canto',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">
            A Experiência Stark
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-none mb-6">
            Nosso <span className="text-zinc-400">Espaço</span>
          </h2>
          <div className="w-20 h-1.5 bg-zinc-900 mx-auto mb-8"></div>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Um ambiente meticulosamente criado para quem entende que o estilo começa nos detalhes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-2xl bg-zinc-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                  Stark Sinop
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-zinc-100">
          {galleryFeatures.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                <Icon className="w-6 h-6 text-zinc-400 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-3">
                {title}
              </h3>
              {description && (
                <p className="text-xs text-zinc-500 leading-relaxed max-w-[240px] uppercase font-semibold tracking-tight">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
