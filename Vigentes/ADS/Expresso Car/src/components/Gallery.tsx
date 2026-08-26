import { Camera } from 'lucide-react';

const gallery = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/antes-depois-parachoque-uno-vermelho-reparado_1024x1280.webp',
    alt: 'Antes e Depois - Parachoque Uno Vermelho',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/antes-depois-reparacao-prisma-branco_1023x1280.webp',
    alt: 'Antes e Depois - Reparação Prisma Branco',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/antes-depois-sandero-branco-reparacao-porta_1023x1280.webp',
    alt: 'Antes e Depois - Sandero Branco Reparação Porta',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/antes-depois-vitrificacao-farol-carro-prata_1023x1280.webp',
    alt: 'Antes e Depois - Vitrificação Farol',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/byd-king-branco-retoque-parachoque-antes-depois_1024x1280.webp',
    alt: 'Antes e Depois - BYD King Branco Retoque',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/carro-prata-avariado-antes-reparo-automotivo_1280x1280.webp',
    alt: 'Antes - Carro Prata Avariado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/carro-prata-avariado-depois-reparo-automotivo_1280x1280.webp',
    alt: 'Depois - Carro Prata Reparado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/antes-depois/fiat-argo-branco-antes-depois-reparo_1024x1280.webp',
    alt: 'Antes e Depois - Fiat Argo Branco',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="lucide lucide-camera text-red-600" width={24} height={24} />
            <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase">
              Nossos Resultados
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            Antes e Depois
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Acompanhe a transformação real dos veículos que passam pela nossa oficina. O resultado
            da nossa dedicação e excelência técnica fala por si mesmo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item) => (
            <div
              key={item.src}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
