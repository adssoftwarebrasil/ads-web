import { useCallback, useEffect, useRef, useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type Category = 'todas' | 'praticas' | 'laboratorios' | 'salas' | 'formaturas' | 'campo';

interface Photo {
  src: string;
  alt: string;
  category: Exclude<Category, 'todas'>;
}

const photos: Photo[] = [
  // Práticas
  { src: '/midia/pratica-enfermagem-manequim.jpeg', alt: 'Prática de enfermagem com manequim de simulação', category: 'praticas' },
  { src: '/midia/pratica-injetaveis.jpeg', alt: 'Prática de aplicação de injetáveis', category: 'praticas' },
  { src: '/midia/pratica-pre-hospitalar.jpeg', alt: 'Prática de atendimento pré-hospitalar', category: 'praticas' },
  { src: '/midia/pratica-primeiros-socorros.jpeg', alt: 'Prática de primeiros socorros', category: 'praticas' },
  { src: '/midia/pratica-radiologia.jpeg', alt: 'Prática de radiologia com equipamento real', category: 'praticas' },
  { src: '/midia/pratica-instrumentacao-cirurgica.jpeg', alt: 'Prática de instrumentação cirúrgica', category: 'praticas' },
  { src: '/midia/pratica-instrumentacao-pano.jpeg', alt: 'Prática de campo cirúrgico', category: 'praticas' },
  { src: '/midia/aula-pratica-estetica.jpeg', alt: 'Aula prática de estética', category: 'praticas' },

  // Laboratórios
  { src: '/midia/laboratorio-anatomia.jpeg', alt: 'Laboratório de anatomia', category: 'laboratorios' },
  { src: '/midia/laboratorio-anatomia2.jpeg', alt: 'Laboratório de anatomia — modelos anatômicos', category: 'laboratorios' },
  { src: '/midia/laboratorio-estetica.jpeg', alt: 'Laboratório de estética', category: 'laboratorios' },
  { src: '/midia/laboratorio-vacinas.jpeg', alt: 'Laboratório de sala de vacinas', category: 'laboratorios' },

  // Salas de aula
  { src: '/midia/sala-aula-palestra.jpeg', alt: 'Sala de aula durante palestra', category: 'salas' },
  { src: '/midia/sala-aula-atenta.jpeg', alt: 'Alunos atentos em sala de aula', category: 'salas' },
  { src: '/midia/sala-aula-estudo-grupo.jpeg', alt: 'Estudo em grupo na sala de aula', category: 'salas' },
  { src: '/midia/confraternizacao-alunos.jpeg', alt: 'Confraternização de alunos', category: 'salas' },

  // Formaturas
  { src: '/midia/formatura-turma-completa.jpeg', alt: 'Formatura — turma completa', category: 'formaturas' },
  { src: '/midia/formatura-turma-feminina.jpeg', alt: 'Formatura — alunas com diplomas', category: 'formaturas' },
  { src: '/midia/formatura-entrega-diploma.jpeg', alt: 'Cerimônia de entrega de diploma', category: 'formaturas' },
  { src: '/midia/entrega-certificados.jpeg', alt: 'Entrega de certificados', category: 'formaturas' },
  { src: '/midia/certificado-injetaveis.jpeg', alt: 'Certificação em aplicação de injetáveis', category: 'formaturas' },

  // Aulas de campo / visitas
  { src: '/midia/alunos-agropecuaria-cavalo.jpeg', alt: 'Alunos de Agropecuária em aula de campo', category: 'campo' },
  { src: '/midia/aula-campo-agropecuaria.jpeg', alt: 'Aula de campo — agropecuária', category: 'campo' },
  { src: '/midia/aula-campo-cavalo.jpeg', alt: 'Manejo de cavalo em aula prática', category: 'campo' },
  { src: '/midia/aula-agropecuaria-campo.jpeg', alt: 'Aula em propriedade rural', category: 'campo' },
  { src: '/midia/visita-tecnica-agropecuaria.jpeg', alt: 'Visita técnica em propriedade rural', category: 'campo' },
  { src: '/midia/selfie-alunos-agropecuaria.jpeg', alt: 'Alunos em aula de campo', category: 'campo' },
  { src: '/midia/visita-tecnica-seguranca-trabalho.jpeg', alt: 'Visita técnica — Segurança do Trabalho', category: 'campo' },
  { src: '/midia/visita-centro-cirurgico.jpeg', alt: 'Visita técnica a centro cirúrgico', category: 'campo' },
  { src: '/midia/alunos-centro-cirurgico.jpeg', alt: 'Alunos em centro cirúrgico hospitalar', category: 'campo' },
  { src: '/midia/alunas-enfermagem-hr-sinop.jpeg', alt: 'Alunas no Hospital Regional de Sinop', category: 'campo' },
  { src: '/midia/alunas-jaleco-hospital.jpeg', alt: 'Alunas em estágio hospitalar', category: 'campo' },
  { src: '/midia/foto-turma-jalecos.jpeg', alt: 'Foto da turma com jalecos Cientec', category: 'campo' },
];

const filters: { id: Category; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'praticas', label: 'Práticas' },
  { id: 'laboratorios', label: 'Laboratórios' },
  { id: 'salas', label: 'Salas de aula' },
  { id: 'campo', label: 'Aulas de campo e visitas' },
  { id: 'formaturas', label: 'Formaturas' },
];

export default function Gallery() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category>('todas');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === 'todas' ? photos : photos.filter((p) => p.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(filtered.length > 0 ? 0 : null);
    }
  }, [filtered.length, lightboxIndex]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
            style={{ backgroundColor: 'rgb(5,145,211)' }}
          >
            <Camera size={14} />
            Galeria
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(62,64,150)' }}>
            A Realidade da Formação no Cientec
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça nossos laboratórios, práticas em aula, atividades de campo e os momentos especiais dos nossos alunos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f.id
                  ? 'text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={
                activeFilter === f.id
                  ? { backgroundColor: 'rgb(62,64,150)' }
                  : undefined
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-square w-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group bg-gray-100"
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <ZoomIn size={16} style={{ color: 'rgb(62,64,150)' }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex items-center justify-between px-5 sm:px-8 py-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="text-sm font-bold tracking-wider uppercase text-white/60">
                Galeria Cientec
              </div>
              <span className="text-white/40">·</span>
              <div className="text-sm font-mono tabular-nums text-white/90">
                {lightboxIndex + 1} <span className="text-white/40">/ {filtered.length}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="text-white hover:bg-white/15 p-2 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X size={26} />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center px-2 sm:px-16 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white items-center justify-center transition-all duration-200 hover:scale-105 z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={28} />
            </button>

            <figure className="flex flex-col items-center max-w-6xl w-full">
              <div className="relative w-full flex items-center justify-center">
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  className="max-w-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-xl shadow-2xl animate-zoom-in"
                />
              </div>
              <figcaption className="text-white/90 text-sm sm:text-base mt-4 text-center max-w-2xl px-4">
                {current.alt}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={next}
              className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white items-center justify-center transition-all duration-200 hover:scale-105 z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div
            className="flex sm:hidden items-center justify-center gap-4 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center"
              aria-label="Próxima foto"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            className="pb-4 pt-2 px-3 sm:px-6 overflow-x-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2 justify-center min-w-fit mx-auto">
              {filtered.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    i === lightboxIndex
                      ? 'ring-2 ring-white scale-110 opacity-100'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Ir para foto ${i + 1}`}
                >
                  <img
                    src={p.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
