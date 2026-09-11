import { ZoomIn } from 'lucide-react';

const BASE =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/';
const INSTAGRAM = 'https://www.instagram.com/doisirmaoslavacarsinop8/';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  wrapperClass: string;
  delay: number;
}

const items: GalleryItem[] = [
  {
    src: BASE + 'antes-depois-polimento-carro-preto-mercedes_1200x1200.webp',
    alt: 'Antes e depois - polimento Mercedes preta',
    caption: 'Polimento — Antes & Depois',
    wrapperClass: 'col-span-1 row-span-2',
    delay: 0,
  },
  {
    src: BASE + 'caminhao-branco-scania-antes-e-depois_720x1280.webp',
    alt: 'Caminhão Scania antes e depois',
    caption: 'Scania — Antes & Depois',
    wrapperClass: 'col-span-1',
    delay: 100,
  },
  {
    src: BASE + 'fortuner-prata-estacionada-concessionaria-outro-carro-preto_640x1136.webp',
    alt: 'Toyota Fortuner prata',
    caption: 'Fortuner Prata — Resultado Final',
    wrapperClass: 'col-span-1',
    delay: 200,
  },
  {
    src: BASE + 'homem-lavando-caminhao-barra-do-bugres-mt_640x1136.webp',
    alt: 'Profissional lavando caminhão',
    caption: 'Lavagem de Caminhão',
    wrapperClass: 'col-span-1',
    delay: 300,
  },
  {
    src: BASE + 'lavando-carro-gol-branco-em-sinop-mt_640x1138.webp',
    alt: 'Lavagem de Gol branco em Sinop MT',
    caption: 'Lavagem Completa — Sinop MT',
    wrapperClass: 'col-span-1',
    delay: 400,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[rgb(12,14,18)] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(169, 199, 209), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Nosso Trabalho
          </span>
          <h2 className="section-title mb-4">
            Resultados que <span style={{ color: 'rgb(169, 199, 209)' }}>Falam por Si</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Cada veículo que sai daqui carrega nosso compromisso com qualidade e excelência.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {items.map((item) => (
            <div
              key={item.caption}
              className={`${item.wrapperClass} relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 opacity-100 translate-y-0`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-semibold text-sm leading-tight">{item.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                <ZoomIn width={14} height={14} className="lucide lucide-zoom-in text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3 text-sm inline-flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
