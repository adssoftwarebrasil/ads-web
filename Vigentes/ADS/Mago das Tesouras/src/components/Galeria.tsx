import { ZoomIn } from 'lucide-react';
import { InstagramBrandIcon } from './Icons';

const imagens: { src: string; alt: string }[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-corte-cabelo-novo-capa-preta-barbearia_1080x1440.webp',
    alt: 'Corte de cabelo moderno',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-cabelo-castanho-medio-barbearia-perfil_1080x1080.webp',
    alt: 'Cabelo castanho médio',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-cabelo-recem-cortado-barbearia-camiseta-preta_1080x1080.webp',
    alt: 'Cabelo recém cortado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-novo-corte-cabelo-moderno-lateral-baixo_1320x1320.webp',
    alt: 'Corte moderno lateral baixo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-grisalho-barba-aparada-barbearia-cadeira_1080x1440.webp',
    alt: 'Barba aparada com precisão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-careca-barba-preta-regata-tatuagem_1080x1080.webp',
    alt: 'Barba completa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/menino-negro-sorrindo-cabelo-novo-barbearia_1080x1080.webp',
    alt: 'Corte infantil - criança feliz',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/menino-corte-cabelo-desenho-risco-lateral_1440x1920.webp',
    alt: 'Corte infantil com desenho',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/menino-corte-cabelo-degrade-salao_1080x1080.webp',
    alt: 'Corte degradê infantil',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/menino-cabelo-novo-barbearia-capa-preta_810x1080.webp',
    alt: 'Criança no salão',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-[rgb(32,29,30)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
            Nossos trabalhos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(247,246,247)] leading-tight mb-4">
            Galeria de Transformações
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Cada corte é uma obra de arte. Confira alguns dos nossos resultados e inspire-se para
            o seu próximo visual.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {imagens.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl cursor-pointer w-full aspect-[4/5] shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  className="lucide lucide-zoom-in text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/magodastesourasbarbeariaepub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[rgb(254,197,52)]/40 text-[rgb(254,197,52)] px-8 py-3.5 rounded-full font-semibold hover:bg-[rgb(254,197,52)] hover:text-[rgb(32,29,30)] hover:border-[rgb(254,197,52)] transition-all duration-300"
          >
            <InstagramBrandIcon className="w-5 h-5 fill-current" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
