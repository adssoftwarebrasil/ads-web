import { useEffect, useRef, useState } from 'react';
import { PlayCircle, Building2, Wrench, Users, Volume2, VolumeX } from 'lucide-react';

const VIDEO_ID = 'DNX66xBs0Cg';

const EMBED_SRC =
  `https://www.youtube.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}` +
  `&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0` +
  `&playsinline=1&enablejsapi=1`;

const HIGHLIGHTS = [
  {
    icon: Building2,
    title: 'Nossa estrutura',
    description: 'Conheça de perto a loja, o estoque e o espaço preparado para atender você.',
  },
  {
    icon: Wrench,
    title: 'Linha diesel completa',
    description: 'Peças e serviços especializados para manter seu veículo sempre pronto para a estrada.',
  },
  {
    icon: Users,
    title: 'Time que entende do assunto',
    description: 'Mais de 30 anos de experiência no ramo, do balcão à oficina.',
  },
];

export default function VideoSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const startedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  const command = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      '*'
    );
  };

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!startedRef.current) {
            startedRef.current = true;
            setStarted(true);
          } else {
            command('playVideo');
          }
        } else if (startedRef.current) {
          command('pauseVideo');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    command(muted ? 'unMute' : 'mute');
    setMuted(!muted);
  };

  return (
    <section id="video" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Sobre a empresa
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl mb-4">
            A RB EM <span className="text-red-500">MOVIMENTO</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Dê o play e veja quem somos, como trabalhamos e o que preparamos para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red-600/30 via-red-600/5 to-transparent blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] bg-[#111111] shadow-2xl shadow-black/60">
                <div ref={frameRef} className="relative w-full bg-black" style={{ aspectRatio: '9 / 16' }}>
                  {started && (
                    <iframe
                      ref={iframeRef}
                      src={EMBED_SRC}
                      title="Vídeo institucional RB Auto Peças"
                      className="absolute inset-0 w-full h-full scale-[1.02]"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      tabIndex={-1}
                    />
                  )}

                  {!started && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle size={54} className="text-red-600/60 animate-pulse" />
                    </div>
                  )}

                  <div className="absolute inset-0 z-10" aria-hidden="true" />

                  <button
                    onClick={toggleSound}
                    aria-label={muted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
                    className="absolute bottom-4 right-4 z-20 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-200"
                  >
                    {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-600/25 rounded-full px-4 py-2 mb-6">
              <PlayCircle size={16} className="text-red-500" />
              <span className="text-red-400 text-xs font-semibold tracking-wide uppercase">
                Vídeo institucional
              </span>
            </div>

            <h3 className="font-['Barlow_Condensed'] font-black text-white text-3xl sm:text-4xl leading-tight mb-5">
              PEÇAS, SERVIÇO E ATENDIMENTO
              <br />
              <span className="text-red-500">EM UM SÓ LUGAR</span>
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Em poucos segundos você conhece a RB Auto Peças por dentro: nossa loja em Acreúna, a variedade de peças da linha diesel e o atendimento que já é referência na região.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-5 hover:border-red-600/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-red-600/15 border border-red-600/20 group-hover:bg-red-600/25 transition-colors duration-300">
                      <Icon size={20} className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-['Barlow_Condensed'] font-bold text-white text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
