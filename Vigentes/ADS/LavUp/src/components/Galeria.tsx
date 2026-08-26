import { ZoomIn } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/lavup/img';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: `${BASE}/interior-lavanderia-autosservico-lavup_1280x960.webp`, alt: 'Interior da Lavup - Máquinas de lavar e secar' },
  { src: `${BASE}/lavanderia-autoatendimento-lavup-maquinas-de-lavar_960x1280.webp`, alt: 'Máquinas de lavar Lavup Araraquara' },
  { src: `${BASE}/interior-lavanderia-self-service-moderna-com-mesa-infantil_960x1280.webp`, alt: 'Sala de espera moderna com mesa infantil' },
  { src: `${BASE}/lavanderia-autoatendimento-lavup-maquinas-lavar-roupa_1280x960.webp`, alt: 'Fileira de máquinas de lavar' },
  { src: `${BASE}/interior-lavanderia-autoatendimento-sala-espera-moderna_1280x960.webp`, alt: 'Sala de espera confortável' },
  { src: `${BASE}/lavanderia-automatica-lavadoras-secadoras-lavup_960x1280.webp`, alt: 'Lavadoras e secadoras Lavup' },
  { src: `${BASE}/maquina-venda-automatica-lavanderia-lavup_960x1280.webp`, alt: 'Máquina de venda automática de produtos' },
  { src: `${BASE}/lavanderia-self-service-tapete-azul-maquina-venda_960x1280.webp`, alt: 'Interior com tapete azul e máquina de venda' },
  { src: `${BASE}/interior-lavanderia-autosservico-lavup-cadeiras-pretas_960x1280.webp`, alt: 'Área com cadeiras para espera' },
  { src: `${BASE}/maquina-venda-lavup-roupa-colorida-descanso_960x1280.webp`, alt: 'Área de descanso com roupa colorida' },
  { src: `${BASE}/unnamed-image_1280x960.webp`, alt: 'Vista geral da lavanderia' },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 section-fade">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(190, 83, 160, 0.1)', color: 'rgb(190, 83, 160)' }}
          >
            Conheça o espaço
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Nossa{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgb(190, 83, 160), rgb(38, 182, 230)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              lavanderia
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Um ambiente moderno, limpo e acolhedor. Conheça nossas instalações e
            equipamentos.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid section-fade"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
