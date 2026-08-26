import { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/raio-solar/galeria/';

interface GalleryImage {
  src: string;
  alt: string;
  featured?: boolean;
  ratio: string;
}

const images: GalleryImage[] = [
  {
    src: BASE + 'painel-solar-telhado-predio-vista-alto_748x920.webp',
    alt: 'Painel solar em prédio vista do alto',
    featured: true,
    ratio: '3 / 4',
  },
  {
    src: BASE + 'instalacao-painel-solar-telhado-homem-trabalhando_524x466.webp',
    alt: 'Instalação de painel solar - profissional trabalhando',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'painel-solar-telhado-branco-area-verde_383x466.webp',
    alt: 'Painel solar em telhado branco com área verde',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'instalacao-painel-solar-telhado-homem-capacete_438x450.webp',
    alt: 'Instalação de painel solar com capacete de segurança',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'painel-solar-campo-gramado-torre-energia_441x456.webp',
    alt: 'Painel solar em campo gramado',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'painel-solar-telhado-branco-instalacao-energia-limpa_437x454.webp',
    alt: 'Instalação de energia limpa em telhado branco',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'painel-solar-telhado-ceramico-ceu-nublado_381x472.webp',
    alt: 'Painel solar em telhado cerâmico',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'painel-solar-telhado-estadio-vista-cidade_380x446.webp',
    alt: 'Painel solar no telhado com vista da cidade',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'telhado-laranja-com-paineis-solares-vista-aerea_439x330.webp',
    alt: 'Vista aérea de telhado laranja com painéis solares',
    ratio: '1 / 1',
  },
  {
    src: BASE + 'trabalhador-inspecionando-painel-solar-no-telhado_380x446.webp',
    alt: 'Trabalhador inspecionando painel solar',
    ratio: '1 / 1',
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState<number | null>(null);

  const close = () => setCurrent(null);
  const prev = () => setCurrent((c) => (c === null ? c : (c - 1 + images.length) % images.length));
  const next = () => setCurrent((c) => (c === null ? c : (c + 1) % images.length));

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
            Nossos trabalhos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Galeria de <span className="text-brand-yellow">Instalações</span>
          </h2>
          <p className="text-brand-blue/60 text-lg max-w-2xl mx-auto">
            Veja alguns dos projetos que realizamos em residências, empresas e indústrias da região.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setCurrent(i)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl bg-brand-blue/5 ${
                img.featured ? 'md:col-span-1 md:row-span-2' : ''
              }`}
              style={{ aspectRatio: img.ratio }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  width={32}
                  height={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {current !== null && (
        <div
          className="fixed inset-0 z-[60] bg-brand-blue-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-brand-yellow transition-colors"
            aria-label="Fechar"
          >
            <X width={32} height={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-brand-yellow transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft width={40} height={40} />
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-brand-yellow transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight width={40} height={40} />
          </button>
        </div>
      )}
    </section>
  );
}
