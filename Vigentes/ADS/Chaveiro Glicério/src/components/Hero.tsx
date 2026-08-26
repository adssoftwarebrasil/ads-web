import { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Clock, Star } from 'lucide-react';

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [badgeRef, titleRef, subRef, ctaRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 150);
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/hero-background.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/90 via-brand-black/75 to-brand-gray-dark/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        <div ref={badgeRef} className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/40 text-brand-yellow text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Star size={14} fill="currentColor" />
          4.8 no Google — Presente desde 1994
          <Star size={14} fill="currentColor" />
        </div>

        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-tight mb-6 text-shadow-lg">
          Chaveiro em Campinas{' '}
          <span className="text-brand-yellow block sm:inline">24 Horas</span>
        </h1>

        <p ref={subRef} className="text-base sm:text-lg md:text-xl text-brand-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Chaves automotivas, fechaduras digitais, abertura de cofres e muito mais.
          Atendimento rápido, honesto e com{' '}
          <strong className="text-brand-yellow">30 anos de experiência</strong> no mercado.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="http://wa.me/5519988923111?text=Olá!%20Preciso%20de%20um%20chaveiro.%20Podem%20me%20ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,192,1,0.5)] hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="tel:+5519988923111"
            className="flex items-center gap-3 bg-transparent border-2 border-brand-white/40 hover:border-brand-yellow text-brand-white hover:text-brand-yellow font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (19) 9 8892-3111
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { icon: Clock, label: '24 Horas', sub: 'Emergências' },
            { icon: Shield, label: '+30 Anos', sub: 'de Experiência' },
            { icon: Star, label: '4.8 ★', sub: 'Google Reviews' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3">
              <Icon size={20} className="text-brand-yellow" />
              <span className="text-brand-white font-bold text-sm leading-none">{label}</span>
              <span className="text-brand-white/50 text-xs">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-white/50 hover:text-brand-yellow transition-colors animate-bounce-gentle"
        aria-label="Scroll"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
