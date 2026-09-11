import { useEffect, useRef } from 'react';
import { ChevronDown, Star, CheckCircle } from 'lucide-react';

const highlights = [
  'Implantes & Próteses',
  'Clareamento Dental',
  'Facetas em Resina',
  'Ortodontia',
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const children = el.querySelectorAll('[data-anim]');
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'translateY(0)';
      }, i * 150 + 200);
    });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/hero-baclground.webp)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,20,10,0.78)] via-[rgba(30,20,10,0.55)] to-[rgba(30,20,10,0.25)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,4,0.6)] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl" ref={textRef}>
          <div
            data-anim
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} fill="#e8c97a" stroke="#e8c97a" />
              ))}
            </div>
            <span className="text-white/90 text-xs font-medium">
              Referência em Rondonópolis
            </span>
          </div>

          <h1
            data-anim
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            Seu sorriso merece{' '}
            <span className="text-[rgba(166,133,109,0.937)]">cuidado</span>{' '}
            de excelência
          </h1>

          <p
            data-anim
            className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            Na Idealle Odontologia, unimos tecnologia de ponta e atendimento humanizado
            para transformar seu sorriso com segurança, conforto e resultados reais.
            <strong className="text-white/95 font-semibold"> Sua confiança começa aqui.</strong>
          </p>

          <div
            data-anim
            className="flex flex-wrap gap-2 mb-8"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5"
              >
                <CheckCircle size={13} className="text-[rgba(166,133,109,0.937)] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>

          <div
            data-anim
            className="flex flex-col sm:flex-row gap-3"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            <a
              href="https://wa.me/556696621999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20primeira%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(146,114,84,0.35)] hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={() => {
                document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Conhecer Tratamentos
            </button>
          </div>

          <div
            data-anim
            className="flex items-center gap-6 mt-10"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
          >
            {[
              { num: '500+', label: 'Pacientes atendidos' },
              { num: '100%', label: 'Satisfação garantida' },
              { num: '10+', label: 'Anos de experiência' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white font-serif">{stat.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase">Ver mais</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
