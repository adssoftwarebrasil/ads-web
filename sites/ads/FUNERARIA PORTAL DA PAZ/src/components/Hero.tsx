import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      // Adicionado pt-24 (96px) e md:pt-28 (112px) para compensar o header
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/hero-background-corrigida.webp)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,12,4,0.82)] via-[rgba(2,12,4,0.65)] to-[rgba(2,12,4,0.90)]" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block mb-5 text-[rgb(156,133,92)] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold border border-[rgb(110,92,59)] px-4 py-1.5 rounded-full">
          Desde 1996 — Atendimento 24 Horas
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Cuidado e Respeito{' '}
          <span className="text-[rgb(202,183,144)]">
            nos Momentos<br className="hidden sm:block" /> que Mais Importam
          </span>
        </h1>

        <p className="text-[rgb(211,212,205)] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Há mais de 28 anos, a Funerária Portal da Paz cuida de você e da sua família com humanidade,
          discrição e total suporte emocional — em Ananindeua e para todo o Brasil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/5591981493608?text=Olá,%20preciso%20de%20atendimento%20urgente."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[rgb(55,104,68)] hover:bg-[rgb(23,56,32)] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Atendimento Urgente
          </a>

          <button
            onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 border-2 border-[rgb(156,133,92)] text-[rgb(202,183,144)] hover:bg-[rgb(110,92,59)] hover:text-white hover:border-[rgb(110,92,59)] font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            Nossos Serviços
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { value: '28+', label: 'Anos de Experiência' },
            { value: '24h', label: 'Atendimento' },
            { value: '5.0', label: 'Avaliação no Google' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[rgb(202,183,144)]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[rgb(146,171,185)] mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgb(156,133,92)] animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}