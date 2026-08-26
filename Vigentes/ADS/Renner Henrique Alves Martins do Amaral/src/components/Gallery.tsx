import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, MapPin } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/';

const PHOTOS = [
  {
    src: `${BASE}consultorio-pediatra-consultorio-medico-interior_3120x4160.webp`,
    alt: 'Interior do consultório pediátrico',
    caption: 'Ambiente acolhedor e seguro',
  },
  {
    src: `${BASE}consultorio-pediatra-mesa-cadeira-mobiliario-moderno_4160x3120.webp`,
    alt: 'Mobiliário moderno do consultório',
    caption: 'Equipamentos modernos',
  },
  {
    src: `${BASE}consultorio-pediatra-mesa-cadeira-tons-madeira_4160x3120.webp`,
    alt: 'Consultório com tons de madeira',
    caption: 'Design elegante e funcional',
  },
  {
    src: `${BASE}consultorio-pediatrico-mesa-cadeira-e-televisao_4160x3120.webp`,
    alt: 'Sala de consulta com televisão',
    caption: 'Ambiente infantil acolhedor',
  },
  {
    src: `${BASE}consultorio-pediatrico-mesa-exames-armarios-madeira_3120x4160.webp`,
    alt: 'Mesa de exames e armários',
    caption: 'Estrutura completa para exames',
  },
  {
    src: `${BASE}predio-climeci-carro-prata-estacionado-rua_969x783.webp`,
    alt: 'Prédio do consultório – Clínica Climeci',
    caption: 'R. Zezé Lima, 57 – Sala 10, Centro',
  },
];

export default function Gallery() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<null | (typeof PHOTOS)[0]>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-observe text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            <MapPin size={13} />
            Nossa Estrutura
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Um consultório pensado para sua família
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ambiente moderno, acolhedor e cuidadosamente projetado para receber crianças de todas as idades com conforto e segurança.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo, index) => (
            <GalleryItem
              key={photo.src}
              photo={photo}
              index={index}
              onClick={() => setLightbox(photo)}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-brand-blue-pale rounded-3xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Localização</p>
              <p className="text-gray-600 text-sm">R. Zezé Lima, 57 – Sala 10 – Centro</p>
              <p className="text-gray-600 text-sm">Itaúna – MG, 35680-045</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-brand-blue/20" />
          <a
            href="https://maps.google.com/?q=Dr.+Renner+Amaral+Pediatra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div
            className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto max-h-[80vh] object-contain bg-black" />
            <div className="bg-white px-5 py-3">
              <p className="text-gray-700 font-medium text-sm">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({
  photo,
  index,
  onClick,
}: {
  photo: (typeof PHOTOS)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 80);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="section-observe group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square"
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <ZoomIn size={18} className="text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-medium">{photo.caption}</p>
      </div>
    </div>
  );
}
