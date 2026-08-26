import { ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/oficina-carro-preto-elevador-automotivo-ferramentas_1600x1200.webp',
    alt: 'Oficina com elevador automotivo',
    span: 'col-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/garagem-carros-variados-vans-ambulancia_1600x1200.webp',
    alt: 'Garagem com frota de veículos',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/oficina-varios-carros-ambulancias-reparos-interna_1600x1200.webp',
    alt: 'Oficina interna com vários veículos',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/oficina-carro-preto-elevador-vermelho-reparo_1600x1200.webp',
    alt: 'Reparo em elevador vermelho',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/garagem-com-vans-e-carros-em-reparacao_1600x1200.webp',
    alt: 'Garagem com vans em reparação',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/garagem-carros-brancos-dhl-ambulancia_1600x1200.webp',
    alt: 'Frota de veículos DHL e ambulância',
    span: 'col-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/escritorio-oficina-mecanica-mesas-computadores-cadeiras_1600x1200.webp',
    alt: 'Escritório da oficina',
    span: 'col-span-2',
  },
];

export default function Structure() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 scrolled-hidden">
          <span className="text-[rgb(240,26,40)] text-sm font-bold uppercase tracking-widest mb-3 block">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Conheça Nossa <span className="text-[rgb(240,26,40)]">Oficina</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-base leading-relaxed">
            Infraestrutura completa e moderna para atender o seu veículo com excelência.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-16 bg-[rgb(240,26,40)] rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 items-center justify-center">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative group cursor-pointer overflow-hidden rounded-xl h-48 sm:h-56 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="lucide lucide-zoom-in text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
