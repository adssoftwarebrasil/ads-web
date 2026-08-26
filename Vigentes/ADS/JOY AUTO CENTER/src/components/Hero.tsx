import { Star, ArrowRight, Shield, Clock } from 'lucide-react';

const HERO_BG =
  'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/hero-background-fachada-auto-center-joy-veiculos-estacionados_1536x1024.webp';
const WHATSAPP = 'http://wa.me/5562981500426';

const badges = [
  { icon: Shield, title: 'Peças de Qualidade', sub: 'Originais e genuínas' },
  { icon: Clock, title: 'Seg a Sex até 18h', sub: 'Horário flexível' },
  { icon: Star, title: '4.8 no Google', sub: 'Clientes satisfeitos' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 md:pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(246,122,55)]/20 border border-[rgb(246,122,55)]/40 text-[rgb(246,122,55)] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Star size={12} fill="currentColor" className="lucide lucide-star " />
            4.8 no Google · 22 Anos de Experiência
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Seu carro merece{' '}
            <span className="text-[rgb(246,122,55)] relative">
              o melhor
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6 C50 2, 100 1, 199 5"
                  stroke="rgb(246,122,55)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                ></path>
              </svg>
            </span>{' '}
            cuidado.
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Referência em manutenção automotiva em Iporá-GO há mais de 22 anos. Qualidade,
            transparência e compromisso em cada serviço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[rgb(246,122,55)] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Agendar Serviço
              <ArrowRight
                size={18}
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[rgb(246,122,55)] text-white hover:text-[rgb(246,122,55)] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              Ver Serviços
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {badges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgb(246,122,55)]/15 border border-[rgb(246,122,55)]/30 flex items-center justify-center flex-shrink-0">
                  <badge.icon size={18} className="text-[rgb(246,122,55)]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{badge.title}</p>
                  <p className="text-white/50 text-xs">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(254,254,254)] to-transparent"></div>
    </section>
  );
}
