import { useEffect, useRef } from 'react';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '17+', label: 'Anos de Experiência' },
  { icon: Users, value: '5.000+', label: 'Clientes Protegidos' },
  { icon: TrendingUp, value: '4.8★', label: 'Avaliação Média' },
];

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/marguia%20corretora%20de%20seguros/img/hero-background.webp)',
          top: '-10%',
          bottom: '-10%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(2,2,2)]/80 via-[rgb(43,85,126)]/70 to-[rgb(52,82,108)]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,2,2)]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(77,175,215)]/20 border border-[rgb(77,175,215)]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[rgb(77,175,215)] animate-pulse" />
            <span className="text-[rgb(77,175,215)] text-sm font-medium">
              Há mais de 17 anos protegendo famílias em Cuiabá
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(252,255,254)] leading-tight mb-6">
            Proteja o que você{' '}
            <span className="text-[rgb(77,175,215)]">mais ama</span>{' '}
            com quem entende de seguros
          </h1>

          <p className="text-lg sm:text-xl text-[rgb(252,255,254)]/80 mb-10 leading-relaxed max-w-2xl">
            Seguros de vida, previdência privada e consórcios com atendimento
            personalizado. A Marguia Corretora cuida do seu presente e planeja
            o seu futuro — com transparência e compromisso real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-[rgb(77,175,215)] hover:bg-[rgb(61,119,189)] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-[rgb(77,175,215)]/30 hover:-translate-y-1"
            >
              Fazer minha cotação grátis
            </button>
            <a
              href="http://wa.me/556599183725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[rgb(77,175,215)]/20 flex items-center justify-center">
                    <Icon size={20} className="text-[rgb(77,175,215)]" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[rgb(252,255,254)]">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-[rgb(252,255,254)]/60 mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Saiba mais
        </span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
