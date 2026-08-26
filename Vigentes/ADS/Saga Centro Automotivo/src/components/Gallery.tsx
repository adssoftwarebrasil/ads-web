import { ZoomIn } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface GalleryImage {
  src: string;
  alt: string;
  colSpan: string;
  delay: number;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/oficina-mecanica-carros-varios-modelo-cores_1080x563.webp',
    alt: 'Oficina com vários carros de modelos e cores diferentes',
    colSpan: 'col-span-2',
    delay: 0,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/carro-alinhamento-roda-aparelho-hidrolaser-oficina_1080x1314.webp',
    alt: 'Carro em processo de alinhamento com aparelho hidrolaser',
    colSpan: 'col-span-1',
    delay: 80,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/maquina-balanceamento-pneus-amarela-oficina-bicicleta-fundo_1080x1305.webp',
    alt: 'Máquina de balanceamento de pneus',
    colSpan: 'col-span-1',
    delay: 160,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/amarok-prata-trocando-oleo-oficina-mecanica_1080x565.webp',
    alt: 'Amarok prata sendo atendida na troca de óleo',
    colSpan: 'col-span-1',
    delay: 240,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/maquina-troca-oleo-cambio-automatico-tritton_1080x1345.webp',
    alt: 'Máquina Tritton para troca de óleo de câmbio automático',
    colSpan: 'col-span-1',
    delay: 320,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/oficina-mecanica-carros-brancos-reparos-manutencao_1080x571.webp',
    alt: 'Carros brancos em manutenção na oficina',
    colSpan: 'col-span-1',
    delay: 400,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/rua-com-centro-automotivo-placas-visiveis_1056x1600.webp',
    alt: 'Vista da rua com fachada do centro automotivo',
    colSpan: 'col-span-1',
    delay: 480,
  },
];

export default function Gallery() {
  const header = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#FFFEDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
            <span className="text-[#EF1C1A] text-sm font-bold uppercase tracking-widest">Nosso Espaço</span>
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Estrutura Completa e
            <br />
            <span className="text-[#EF1C1A]">Equipamentos Modernos</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Conheça nossa oficina — um espaço profissional preparado para atender todo tipo de veículo com qualidade e
            segurança.
          </p>
        </div>
        <div ref={grid.ref} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.colSpan} transition-all duration-700 ${
                grid.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${image.delay}ms` }}
            >
              <div className="aspect-video w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: '160px' }}
                />
              </div>
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
