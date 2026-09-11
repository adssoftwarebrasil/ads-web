import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { LOGO_URL, MAPS_URL } from '../lib/constants';

const GALLERY_IMAGES = [
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Floja-duas-pessoas.webp",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Fpessoas-organizando-cestas.webp",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Festoque-alimentos-prateleiras.webp",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Fpessoas-sorrindo-mercado.webp",
];

const VIDEOS = [
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F4.mp4",  
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F6.mp4",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F1.mp4",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F2.mp4",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F3.mp4",
  "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fvideos%2F5.mp4",

];

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [fsCurrentTime, setFsCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fsVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.load();
    vid.play().catch(() => {});
  }, [active]);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = 'hidden';
      const fsVid = fsVideoRef.current;
      if (!fsVid) return;
      fsVid.currentTime = fsCurrentTime;
      fsVid.play().catch(() => {});
    } else {
      document.body.style.overflow = '';
      const mainVid = videoRef.current;
      if (!mainVid) return;
      mainVid.currentTime = fsCurrentTime;
      mainVid.play().catch(() => {});
    }
    return () => { document.body.style.overflow = ''; };
  }, [fullscreen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreen) {
        setFsCurrentTime(fsVideoRef.current?.currentTime ?? 0);
        setFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fullscreen]);

  const openFullscreen = () => {
    setFsCurrentTime(videoRef.current?.currentTime ?? 0);
    setFullscreen(true);
  };
  const closeFullscreen = () => {
    setFsCurrentTime(fsVideoRef.current?.currentTime ?? 0);
    setFullscreen(false);
  };

  const prev = () => setActive((p) => (p === 0 ? VIDEOS.length - 1 : p - 1));
  const next = () => setActive((p) => (p === VIDEOS.length - 1 ? 0 : p + 1));

  return (
    <>
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <video
            ref={fsVideoRef}
            key={`fs-${VIDEOS[active]}`}
            className="w-full h-full object-contain"
            autoPlay
            muted={muted}
            loop
            playsInline
            controls
          >
            <source src={VIDEOS[active]} type="video/mp4" />
          </video>

          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={() => setMuted((m) => !m)}
              className="w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label={muted ? 'Ativar som' : 'Silenciar'}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              onClick={closeFullscreen}
              className="w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label="Fechar tela cheia"
            >
              <X size={18} />
            </button>
          </div>

          <button
            onClick={() => { prev(); setFsCurrentTime(0); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            aria-label="Video anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => { next(); setFsCurrentTime(0); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            aria-label="Proximo video"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setFsCurrentTime(0); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

    <div>
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <video
            ref={videoRef}
            key={VIDEOS[active]}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
          >
            <source src={VIDEOS[active]} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 z-10">
            <button
              onClick={() => setMuted((m) => !m)}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label={muted ? 'Ativar som' : 'Silenciar'}
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <button
              onClick={openFullscreen}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label="Tela cheia"
            >
              <Maximize2 size={14} />
            </button>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/75'}`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
          aria-label="Video anterior"
        >
          <ChevronLeft size={18} className="text-gray-800" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/85 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
          aria-label="Proximo video"
        >
          <ChevronRight size={18} className="text-gray-800" />
        </button>
      </div>

      <div className="flex gap-2 sm:gap-3 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {VIDEOS.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-200 bg-gray-800 ${i === active ? 'ring-2 ring-primary ring-offset-2 opacity-100' : 'opacity-50 hover:opacity-80'}`}
            style={{ width: 'clamp(72px, 18vw, 120px)', aspectRatio: '16/9' }}
            aria-label={`Video ${i + 1}`}
          >
            <video
              className="w-full h-full object-cover pointer-events-none"
              src={src}
              muted
              preload="metadata"
            />
            <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-200 ${i === active ? 'bg-primary/20' : 'bg-black/30'}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i === active ? 'bg-primary' : 'bg-white/70'}`}>
                <div className={`w-0 h-0 ml-0.5 border-t-[4px] border-b-[4px] border-l-[7px] border-transparent ${i === active ? 'border-l-white' : 'border-l-gray-700'}`} />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-4 sm:hidden">
        <button
          onClick={prev}
          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          aria-label="Video anterior"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          aria-label="Proximo video"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>
    </div>
    </>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: mediaRef, isVisible: mediaVisible } = useScrollAnimation(0.05);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <img src={LOGO_URL} alt="Fort das Cestas" className="h-16 sm:h-20 mx-auto mb-8" />

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Sobre a Fort das Cestas
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Muito Alem de Cestas Basicas
          </h2>

          <p className="text-lg sm:text-xl text-primary font-medium italic mb-8">
            A construcao de um mundo onde todos tenham acesso a uma refeicao digna
          </p>

          <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed mb-8 text-left sm:text-center">
            <p>
              Surgimos a partir de uma necessidade do mercado goiano de cestas para doacoes e alimentacao de familias carentes.
              <strong className="text-primary"> Ha 6 anos no mercado</strong>, somos a parceira confiavel em Goiania, proporcionando cestas basicas de alta qualidade.
            </p>
            <p>
              Nosso compromisso vai alem: oferecemos cestas para familias que buscam economizar na despesa alimenticia mensal
              e para pessoas que desejam ajudar os menos favorecidos.
            </p>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-5 sm:p-6 rounded-r-xl mb-8 text-left sm:text-center">
            <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
              Aqui temos cestas com <span className="text-primary">produtos de qualidade insuperavel!</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 bg-gray-50 p-6 sm:p-8 rounded-2xl mb-8">
            {[
              { value: '6+', label: 'Anos no Mercado' },
              { value: '+100 mil', label: 'Familias Atendidas' },
              { value: '100%', label: 'Qualidade Garantida' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Conheca Nosso Showroom
          </a>
        </div>

        <div ref={mediaRef} className={`max-w-5xl mx-auto animate-on-scroll ${mediaVisible ? 'visible' : ''}`}>

          <div className="mb-10 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              Nosso Showroom em Videos
            </h3>
            <VideoCarousel />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              Fotos do Showroom
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {GALLERY_IMAGES.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightbox(img)}
                  className={`stagger-${index + 1} relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  <img
                    src={img}
                    alt={`Fort das Cestas - Imagem ${index + 1}`}
                    loading="lazy"
                    className="w-full h-36 sm:h-52 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Showroom Fort das Cestas"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
