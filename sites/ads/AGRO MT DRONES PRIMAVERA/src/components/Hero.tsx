import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [titleRef.current, subRef.current, ctaRef.current];
    items.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 180);
    });
  }, []);

  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      // pt-20 compensa a altura do header fixo. 
      // flex-col garante que o conteúdo flua corretamente com o padding superior.
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background - Ocupa 100% da área, incluindo atrás do header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/agro-mt-drones/img/hero-backgroun.webp)',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-primary/50" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-8 w-64 h-64 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-8 w-48 h-48 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Localização Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/40 text-brand-light text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse-slow inline-block" />
          Primavera do Leste – MT
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Tecnologia Drone no{' '}
          <span className="text-brand-accent">Campo</span>{' '}
          com Precisão e Resultado
        </h1>

        <p
          ref={subRef}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Venda, manutenção e assistência técnica de drones agrícolas. Soluções
          completas para produtores rurais que buscam eficiência e produtividade
          máxima na lavoura.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/556599004844"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-brand-accent hover:bg-brand-primary text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-brand-accent/40 hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco agora
          </a>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 text-white/80 hover:text-white font-semibold text-base transition-colors duration-200 group"
          >
            Conheça nossos serviços
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '2025', label: 'Fundação' },
            { value: '100%', label: 'Garantia' },
            { value: '24h', label: 'Suporte' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-4 px-2"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">{stat.value}</div>
              <div className="text-xs text-white/60 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}