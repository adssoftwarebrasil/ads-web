import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

type GalleryImage = {
  file: string;
  full: number;
  half: number;
  width: number;
  height: number;
  alt: string;
  caption: string;
  span: string;
  sizes: string;
};

const images: GalleryImage[] = [
  {
    file: 'capela-velatoria',
    full: 1280,
    half: 640,
    width: 1280,
    height: 719,
    alt: 'Sala velatória 1 com paramentos da Funerária Uberaba',
    caption: 'Sala Velatória 1',
    span: 'col-span-2 row-span-2',
    sizes: '(min-width: 1024px) 600px, 100vw',
  },
  {
    file: 'sala-de-espera',
    full: 719,
    half: 359,
    width: 719,
    height: 1280,
    alt: 'Sala velatória 2 com poltronas e cadeiras',
    caption: 'Sala Velatória 2',
    span: 'col-span-1 row-span-2',
    sizes: '(min-width: 1024px) 300px, 50vw',
  },
  {
    file: 'corredor-espera',
    full: 719,
    half: 359,
    width: 719,
    height: 1280,
    alt: 'Entrada e saída de veículos para acesso às salas velatórias',
    caption: 'Entrada e Saída de Veículos',
    span: 'col-span-1 row-span-2',
    sizes: '(min-width: 1024px) 300px, 50vw',
  },
  {
    file: 'corredor-capelas',
    full: 1280,
    half: 640,
    width: 1280,
    height: 719,
    alt: 'Corredor de acesso às capelas',
    caption: 'Acesso às capelas',
    span: 'col-span-2 row-span-2',
    sizes: '(min-width: 1024px) 600px, 100vw',
  },
  {
    file: 'capela-altar',
    full: 719,
    half: 359,
    width: 719,
    height: 1280,
    alt: 'Altar da capela com crucifixo e paramentos',
    caption: 'Altar da capela',
    span: 'col-span-1 row-span-2',
    sizes: '(min-width: 1024px) 300px, 50vw',
  },
  {
    file: 'entrada-capelas',
    full: 1280,
    half: 640,
    width: 1280,
    height: 719,
    alt: 'Entrada das capelas 01 e 02',
    caption: 'Capelas 01 e 02',
    span: 'col-span-2 row-span-2',
    sizes: '(min-width: 1024px) 600px, 100vw',
  },
  {
    file: 'garagem-coberta',
    full: 1280,
    half: 640,
    width: 1280,
    height: 719,
    alt: 'Garagem coberta com a frota da Funerária Uberaba',
    caption: 'Garagem coberta',
    span: 'col-span-2 row-span-2',
    sizes: '(min-width: 1024px) 600px, 100vw',
  },
];

const path = (file: string, size: number) => `/img/instalacoes/${file}-${size}.webp`;

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const renderTile = (img: GalleryImage, idx: number) => (
    <button
      key={img.file}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group text-left ring-1 ring-[rgb(29,29,29)]/10 ${img.span}`}
      onClick={() => setLightbox(img)}
      aria-label={`Ampliar imagem: ${img.alt}`}
    >
      <img
        src={path(img.file, img.full)}
        srcSet={`${path(img.file, img.half)} ${img.half}w, ${path(img.file, img.full)} ${img.full}w`}
        sizes={img.sizes}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={idx === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(29,29,29)]/80 via-transparent to-transparent opacity-90" />
      <p className="absolute left-4 bottom-3 right-4 text-[rgb(247,246,249)] text-xs sm:text-sm font-semibold drop-shadow">
        {img.caption}
      </p>
      <span className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-[rgb(29,29,29)]/50 backdrop-blur-sm text-[rgb(247,246,249)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Maximize2 size={16} />
      </span>
    </button>
  );

  return (
    <section id="galeria" className="py-20 bg-[rgb(247,246,249)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(29,29,29)] mb-4">
            Conheça Nossas Instalações
          </h2>
          <p className="text-[rgb(29,29,29)]/60 max-w-xl mx-auto text-base">
            Estrutura completa e digna para que a despedida aconteça com o respeito que sua família
            merece.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[110px] sm:auto-rows-[150px] lg:auto-rows-[190px] gap-3 sm:gap-4">
          {images.slice(0, 5).map(renderTile)}

          {/* Ladrilho de marca — fecha o mosaico e reforça o atendimento 24h */}
          <a
            href="tel:+553433215889"
            className="col-span-1 row-span-2 rounded-2xl bg-[rgb(249,240,69)] flex flex-col items-center justify-center text-center p-4 hover:bg-[rgb(249,240,69)]/85 transition-colors"
          >
            <p className="text-3xl sm:text-4xl font-bold text-[rgb(29,29,29)] leading-none">24h</p>
            <p className="text-[rgb(29,29,29)]/70 text-[11px] sm:text-xs font-semibold mt-2 leading-snug">
              Atendimento todos os dias do ano
            </p>
            <span className="block w-8 h-px bg-[rgb(29,29,29)]/25 my-3" />
            <p className="text-[rgb(29,29,29)] text-sm sm:text-base font-bold leading-tight">
              (34) 3321-5889
            </p>
          </a>

          {images.slice(5).map((img) => renderTile(img, 5))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={path(lightbox.file, lightbox.full)}
            alt={lightbox.alt}
            className="max-w-full max-h-[82vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-[rgb(247,246,249)]/80 text-sm mt-4">{lightbox.caption}</p>
        </div>
      )}
    </section>
  );
}
