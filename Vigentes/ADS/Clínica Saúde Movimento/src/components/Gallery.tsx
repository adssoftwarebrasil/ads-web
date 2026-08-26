import { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

const BASE = 'https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/img/';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    src: BASE + 'aula-pilates-instrutora-equipamentos-studio-pessoas_1200x1600.webp',
    alt: 'Aula de pilates com instrutora e equipamentos',
    span: 'col-span-1 row-span-2',
  },
  {
    src: BASE + 'mulher-pilates-instrutora-auxiliando-exercicio-reformer_1200x1600.webp',
    alt: 'Instrutora auxiliando exercício no reformer',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'pilates-mulher-alongando-instrutora-verde-corecao_1200x1600.webp',
    alt: 'Instrutora corrigindo postura de aluna',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'aula-pilates-homem-laranja-fisioterapeuta_1200x1600.webp',
    alt: 'Aula de pilates com homem e fisioterapeuta',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'instrutora-pilates-ajudando-paciente-equipamento-azul_1200x1600.webp',
    alt: 'Instrutora ajudando paciente no equipamento',
    span: 'col-span-1 row-span-2',
  },
  {
    src: BASE + 'mulher-fazendo-exercicio-pilates-com-instrutora_1200x1600.webp',
    alt: 'Mulher fazendo exercício de pilates',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'homem-idoso-fazendo-exercicio-pilates-alongando-braco_1200x1600.webp',
    alt: 'Homem idoso fazendo pilates',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'pessoas-praticando-pilates-em-estudio-com-equipamentos_1200x1600.webp',
    alt: 'Grupo praticando pilates no estúdio',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'mulher-idosa-pilates-exercicio-no-studio_1200x1600.webp',
    alt: 'Mulher idosa fazendo exercício de pilates',
    span: 'col-span-1 row-span-1',
  },
  {
    src: BASE + 'pilates-instrutor-dando-aula-para-homem-laranja_1200x1600.webp',
    alt: 'Instrutor dando aula para paciente',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-clinic-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Nossa estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-teal leading-tight">
            Conheça o Ambiente
            <br />
            <span className="text-clinic-gold">da Nossa Clínica</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Espaço moderno, limpo e acolhedor, equipado com os melhores aparelhos para seu
            tratamento.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {images.map((image, i) => (
            <div
              key={image.src}
              onClick={() => setSelected(image)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group opacity-100 scale-100 transition-all duration-500 ${image.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-clinic-teal/0 group-hover:bg-clinic-teal/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Ver foto
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center transition-all duration-700 delay-300 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-clinic-teal hover:bg-clinic-teal/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Gostei da estrutura, quero agendar!
          </a>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
            onClick={() => setSelected(null)}
          >
            <X width={32} height={32} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
