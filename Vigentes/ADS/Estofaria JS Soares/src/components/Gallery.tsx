import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-cabine-caminhao-marrom-acolchoado-luxuoso_1200x1600.webp',
    alt: 'Interior cabine caminhão luxuoso',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-scania-preto-verde-personalizado_1200x1600.webp',
    alt: 'Interior Scania preto e verde',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/banco-traseiro-couro-vermelho-cinto-seguranca_960x1280.webp',
    alt: 'Banco traseiro couro vermelho',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-scania-marrom-cortinas-franja_1200x1600.webp',
    alt: 'Interior Scania marrom com cortinas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/bancos-cinza-costura-diamante-interior-carro_720x1280.webp',
    alt: 'Bancos cinza costura diamante',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-bege-cortinas-detalhe-laranja_960x1280.webp',
    alt: 'Interior caminhão bege e laranja',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-couro-laranja-detalhado_960x1280.webp',
    alt: 'Interior caminhão couro laranja',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-cabine-caminhao-scania-assentos-couro_1280x960.webp',
    alt: 'Assentos couro Scania',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/volante-scania-marrom-painel-motos-ao-fundo_1200x1600.webp',
    alt: 'Volante Scania marrom',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-cabine-caminhao-bancos-creme-detalhes-laranja_960x1280.webp',
    alt: 'Cabine creme com detalhes laranja',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/volante-volvo-cinza-preto-cabine-caminhao_780x1040.webp',
    alt: 'Volante Volvo cinza e preto',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/cadeiras-estofadas-pretas-estofaria-js-soares_960x1280.webp',
    alt: 'Cadeiras estofadas pretas',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
            Nosso trabalho
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Cada detalhe importa. Veja alguns dos nossos trabalhos realizados com
            dedicação e maestria.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  width={28}
                  height={28}
                  className="lucide lucide-zoom-in text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white p-2"
            aria-label="Fechar"
            onClick={() => setActive(null)}
          >
            <X width={32} height={32} className="lucide lucide-x " />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
