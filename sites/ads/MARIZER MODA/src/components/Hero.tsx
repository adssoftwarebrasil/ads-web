import { Award, Users, Scissors, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { Icon: Award, name: 'award', value: '+10', label: 'Anos de Experiência' },
  { Icon: Users, name: 'users', value: '+500', label: 'Empresas Atendidas' },
  { Icon: Scissors, name: 'scissors', value: '+15k', label: 'Peças Produzidas' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/marize%20uniformes/img/hero-background.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(1, 12, 222, 0.88) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 187, 254, 0.3) 100%)',
        }}
      ></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgb(0, 187, 254), transparent)' }}
        ></div>
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgb(1, 12, 222), transparent)' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white mb-6 border border-white/30 backdrop-blur-sm transition-all duration-700 opacity-100 translate-y-0"
            style={{ background: 'rgba(0, 187, 254, 0.25)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow"></span>
            Uniformes Profissionais em São Luís – MA
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 opacity-100 translate-y-0">
            Sua Empresa
            <br />
            <span style={{ color: 'rgb(0, 187, 254)' }}>Vestida com</span>
            <br />
            Excelência.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Fardamentos personalizados, bordados, DTF, sublimação e equipagens para empresas que valorizam
            identidade e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <a
              href="http://wa.me/559881135450?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uniformes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-brand-cyan/40"
              style={{ background: 'linear-gradient(135deg, rgb(254, 0, 6) 0%, rgb(204, 0, 5) 100%)' }}
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Solicitar Orçamento Grátis
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/60"
            >
              Ver Portfólio
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg transition-all duration-700 delay-500 opacity-100 translate-y-0">
          {stats.map(({ Icon, name, value, label }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center p-3 rounded-2xl border border-white/20 backdrop-blur-sm"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <Icon className={`lucide lucide-${name} text-brand-cyan mb-2`} width={20} height={20} strokeWidth={2} />
              <span className="text-2xl sm:text-3xl font-black text-white">{value}</span>
              <span className="text-xs text-white/70 mt-1 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown className="lucide lucide-chevron-down" width={20} height={20} strokeWidth={2} />
      </button>
    </section>
  );
}
