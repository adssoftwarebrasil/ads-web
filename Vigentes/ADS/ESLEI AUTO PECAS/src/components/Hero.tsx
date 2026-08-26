import { Fragment } from 'react';
import { Wrench, Truck } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const stats = [
  { value: '+15', label: 'Anos' },
  { value: '+5k', label: 'Clientes' },
  { value: '24h', label: 'Guincho' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/Eslei%20Auto/hero.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/70 to-brand-dark/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse-slow"></span>
            Desde 2009 em Minaçu - GO
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-wide mb-4 text-shadow">
            ESLEI AUTO
            <span className="block text-brand-red">PEÇAS</span>
            <span className="block text-3xl md:text-5xl text-brand-yellow font-display">
              &amp; OFICINA
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light max-w-xl mx-auto md:mx-0">
            Mais de 15 anos de experiência em mecânica, venda de peças automotivas e serviço de
            guincho em Minaçu e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-brand-red/30"
            >
              <Wrench
                width={20}
                height={20}
                className="lucide lucide-wrench group-hover:rotate-12 transition-transform duration-300"
              />
              Agendar Serviço
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <Truck width={20} height={20} className="lucide lucide-truck " />
              Guincho 24h
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12 justify-center md:justify-start">
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-10 bg-white/20"></div>}
                <div className="text-center">
                  <span className="block font-display text-3xl text-brand-yellow">{stat.value}</span>
                  <span className="text-gray-400 text-xs uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Ver serviços"
      ></button>
    </section>
  );
}
