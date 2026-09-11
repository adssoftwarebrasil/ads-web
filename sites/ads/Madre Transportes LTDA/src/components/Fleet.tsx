import { useEffect, useRef, useState } from 'react';
import { Truck, X } from 'lucide-react';

const fleetImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/caminhao-scania-branco-frente-fundo-escuro_1080x1080.webp',
    alt: 'Caminhão Scania Branco - Madre Transportes',
    label: 'Scania — Frota Premium',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/caminhoes-meteor-novos-cores-variadas-homem-sorrindo_1280x1280.webp',
    alt: 'Caminhões Meteor Novos - Frota Madre',
    label: 'Meteor — Renovação Contínua',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/saveiro-branca-madre-transportes-ao-lado_1080x1080.webp',
    alt: 'Saveiro Branca com Identidade Madre',
    label: 'Frota Leve — Entregas Urbanas',
  },
];

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section id="frota" className="py-20 md:py-28 bg-gray-950 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-brand-amber font-semibold text-sm uppercase tracking-widest mb-3">
            <Truck size={16} />
            Nossa Frota
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Veículos modernos para{' '}
            <span className="text-brand-amber">cada necessidade</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Investimos constantemente na renovação e manutenção da nossa frota para garantir
            segurança, confiabilidade e eficiência em cada operação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {fleetImages.map((img, i) => (
            <div
              key={i}
              className="animate-on-scroll group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">{img.label}</p>
              </div>
              <div className="absolute inset-0 border-2 border-brand-amber/0 group-hover:border-brand-amber/60 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-on-scroll">
          <a
            href="https://www.instagram.com/madretransportes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-amber text-white/70 hover:text-brand-amber text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            Ver mais no Instagram @madretransportes
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={22} />
          </button>
          <img
            src={lightbox}
            alt="Frota Madre Transportes"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
