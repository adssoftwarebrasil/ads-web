import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos: string[] = [
  '/midia/depoimento-1.mp4',
  '/midia/depoimento-2.mp4',
  '/midia/depoimento-3.mp4',
  '/midia/depoimento-4.mp4',
  '/midia/depoimento-5.mp4',
  '/midia/depoimento-6.mp4',
];

export default function VideoTestimonials() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % videos.length));
  }, []);
  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + videos.length) % videos.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex, close, next, prev]);

  const current = activeIndex !== null ? videos[activeIndex] : null;

  return (
    <section
      id="depoimentos-video"
      ref={ref}
      className="py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
            style={{ backgroundColor: 'rgb(188,51,54)' }}
          >
            <Video size={14} />
            Vídeos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(62,64,150)' }}>
            Aulas, Práticas e Formaturas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Veja momentos reais do dia a dia no Cientec — professores em sala, alunos em práticas e cerimônias de formatura.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`group relative aspect-[9/16] sm:aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${Math.min(i * 80, 400)}ms` }}
              aria-label={`Reproduzir vídeo ${i + 1}`}
            >
              <video
                src={src}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 transition-opacity group-hover:from-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgb(188,51,54)' }}
                >
                  <Play size={28} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <div
            className="flex items-center justify-between px-5 sm:px-8 py-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="text-sm font-bold tracking-wider uppercase text-white/60">
                Vídeos Cientec
              </div>
              <span className="text-white/40">·</span>
              <div className="text-sm font-mono tabular-nums text-white/90">
                {activeIndex + 1} <span className="text-white/40">/ {videos.length}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              className="text-white hover:bg-white/15 p-2 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X size={26} />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center px-2 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white items-center justify-center transition-all duration-200 hover:scale-105 z-10"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="w-full max-w-4xl animate-zoom-in">
              <video
                key={current}
                src={current}
                className="w-full max-h-[78vh] rounded-xl shadow-2xl bg-black"
                controls
                autoPlay
                playsInline
              />
            </div>

            <button
              type="button"
              onClick={next}
              className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white items-center justify-center transition-all duration-200 hover:scale-105 z-10"
              aria-label="Próximo vídeo"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div
            className="flex sm:hidden items-center justify-center gap-4 pb-5 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center"
              aria-label="Próximo vídeo"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
