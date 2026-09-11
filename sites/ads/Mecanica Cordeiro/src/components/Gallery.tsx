import { ZoomIn } from 'lucide-react';

const S = 'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro';

interface GalleryItem {
  src: string;
  alt: string;
  wide: boolean;
}

const items: GalleryItem[] = [
  {
    src: `${S}/img/bancada-com-motor-desmontado-e-ferramentas_1600x1200.webp`,
    alt: 'Motor desmontado na bancada',
    wide: true,
  },
  {
    src: `${S}/img/bloco-motor-com-pistoes-e-bielas-na-bancada_1600x900.webp`,
    alt: 'Bloco de motor com pistões',
    wide: false,
  },
  {
    src: `${S}/img/motor-carro-exposto-sala-reparos-mecanica_1600x900.webp`,
    alt: 'Motor exposto em reparo',
    wide: false,
  },
  {
    src: `${S}/img/fiat-uno-prata-elevado-no-mecanico_1600x900.webp`,
    alt: 'Fiat Uno elevado no mecânico',
    wide: false,
  },
  {
    src: `${S}/img/vw-golf-preto-motor-aberto-mecanica_1600x900.webp`,
    alt: 'VW Golf com motor aberto',
    wide: false,
  },
  {
    src: `${S}/img/van-branca-motor-exposto-reparacao-mecanica_1600x900.webp`,
    alt: 'Van branca com motor exposto',
    wide: true,
  },
  {
    src: `${S}/img/dois-motores-automotivos-desmontados-na-bancada_1600x900.webp`,
    alt: 'Dois motores desmontados',
    wide: false,
  },
  {
    src: `${S}/img/motor-vhc-aberto-carro-branco-chevrolet_1600x900.webp`,
    alt: 'Motor VHC aberto',
    wide: false,
  },
  {
    src: `${S}/img/motor-desmontado-mesa-oficina-pecas-espalhadas_1600x900.webp`,
    alt: 'Motor desmontado com peças',
    wide: false,
  },
  {
    src: `${S}/img/hilux-preta-capo-aberto-motor-exposto_900x1600.webp`,
    alt: 'Hilux preta com capô aberto',
    wide: false,
  },
  {
    src: `${S}/img/pecas-de-transmissao-desmontadas-sobre-bancada_1600x900.webp`,
    alt: 'Peças de transmissão desmontadas',
    wide: true,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#30312C] mb-4">
            Galeria de Serviços
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Cada serviço é realizado com precisão e cuidado. Veja alguns dos nossos
            trabalhos.
          </p>
          <div className="mt-4 w-16 h-1 bg-[#E32626] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <div
              key={item.src}
              className={`${
                item.wide ? 'col-span-2' : ''
              } relative overflow-hidden rounded-xl cursor-pointer group`}
              style={{ aspectRatio: item.wide ? '16 / 9' : '4 / 3' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#30312C]/0 group-hover:bg-[#30312C]/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
