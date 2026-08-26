import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  tag: string;
  caption: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/servico-finalizado.webp',
    alt: 'Serviço Finalizado',
    tag: 'Serviço Finalizado',
    caption: 'Acabamento impecável com tintas premium',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/servico-em-andamento.webp',
    alt: 'Serviço em Andamento',
    tag: 'Serviço em Andamento',
    caption: 'Equipe especializada em ação',
    span: '',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/servico-em-processo-de-secagem.webp',
    alt: 'Processo de Secagem',
    tag: 'Processo de Secagem',
    caption: 'Controle de qualidade em cada etapa',
    span: '',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/servico-finalizado-02.webp',
    alt: 'Resultado Final',
    tag: 'Resultado Final',
    caption: 'Transformação completa do ambiente',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(248, 248, 246)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 text-brand-dark"
            style={{ backgroundColor: 'rgb(164, 209, 58)' }}
          >
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(2, 2, 2)' }}>
            Nosso Trabalho <span style={{ color: 'rgb(164, 209, 58)' }}>Fala por Si</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgb(63, 63, 63)' }}>
            Veja alguns dos projetos que realizamos com dedicação, técnica e os melhores materiais
            do mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          {images.map((img) => (
            <div
              key={img.alt}
              onClick={() => setLightbox(img)}
              className={`gallery-item group relative rounded-2xl overflow-hidden cursor-pointer ${img.span} opacity-100 translate-y-0`}
              style={{ minHeight: '240px', transition: 'opacity 0.6s, transform 0.6s' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ minHeight: '240px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(164, 209, 58)' }}
                >
                  <ZoomIn
                    className="lucide lucide-zoom-in"
                    width={20}
                    height={20}
                    style={{ color: 'rgb(2, 2, 2)' }}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-2 text-brand-dark"
                  style={{ backgroundColor: 'rgb(164, 209, 58)' }}
                >
                  {img.tag}
                </span>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="http://wa.me/5566996839888?text=Olá! Gostaria de solicitar um orçamento para pintura."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'rgb(164, 209, 58)',
              boxShadow: 'rgba(164, 209, 58, 0.3) 0px 4px 20px',
            }}
          >
            Quero meu orçamento grátis
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X width={32} height={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
