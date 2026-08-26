import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-escada-azul_1599x899.webp',
    alt: 'Técnico instalando ar condicionado em escada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-branco-azulejo_900x1600.webp',
    alt: 'Técnico instalando ar condicionado split',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-lg-novo_1204x1600.webp',
    alt: 'Instalação de ar condicionado LG novo',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-no-telhado_1201x1600.webp',
    alt: 'Técnico instalando ar condicionado no telhado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-instalando-ar-condicionado-no-telhado_1204x1600.webp',
    alt: 'Instalação de condensadora no telhado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/tecnico-manutencao-ar-condicionado-em-escada_900x1600.webp',
    alt: 'Manutenção de ar condicionado em escada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/caminhonete-azul-ar-condicionado-escada-servicos_899x1599.webp',
    alt: 'Caminhonete BTU com equipamentos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/carro-branco-da-empresa-estacionado-na-rua_900x1600.webp',
    alt: 'Veículo da empresa BTU Ar Condicionado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/BTU/entregador-caixas-ar-condicionado-air-stage_1204x1600.webp',
    alt: 'Entrega de equipamentos de ar condicionado',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Nosso Trabalho</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Veja alguns dos nossos serviços realizados com qualidade e profissionalismo.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              onClick={() => setActive(photo)}
              className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={36}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Fechar"
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
