import { useEffect, useRef } from 'react';
import { ChevronDown, Star, Shield, Clock } from 'lucide-react';

const badges = [
  { icon: Star, label: 'Mais de 5 anos de excelência' },
  { icon: Shield, label: 'Serviço com garantia' },
  { icon: Clock, label: 'Prazo sempre cumprido' },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, badgesRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  const scrollDown = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/fachada-mecanica-automotiva-carros-estacionados_1280x960.webp"
          alt="RPN Mecânica Automotiva"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 container-custom w-full py-32 md:py-40">
        <div className="max-w-3xl">
          <span className="inline-block bg-rpn-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Desde 2019 — Ananindeua, PA
          </span>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 text-shadow-lg"
          >
            Seu carro em
            <span className="block text-rpn-red">mãos de quem</span>
            entende de verdade.
          </h1>

          <p
            ref={subtitleRef}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-shadow"
          >
            Mecânica completa em suspensão, motor, câmbio, elétrica e refrigeração.
            Diagnóstico preciso, atendimento humanizado e prazo que se cumpre.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12">
            <a
              href="http://wa.me/559182696336"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 rounded-full shadow-lg shadow-rpn-red/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#servicos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-base px-8 py-4"
            >
              Ver Serviços
            </button>
          </div>

          <div ref={badgesRef} className="flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <Icon size={14} className="text-rpn-red flex-shrink-0" />
                <span className="text-white text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
