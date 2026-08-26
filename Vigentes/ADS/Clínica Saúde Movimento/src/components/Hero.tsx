import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '+10 anos', label: 'de excelência' },
  { value: '4.9/5', label: 'avaliação Google' },
  { value: '100%', label: 'atendimento personalizado' },
];

function scrollToServicos() {
  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-20 lg:pb-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/img/hero-novo.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-clinic-teal-dark/85 via-clinic-teal/70 to-clinic-teal-dark/90"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-clinic-gold/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-clinic-teal-light/20 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-clinic-gold/20 border border-clinic-gold/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-clinic-gold animate-pulse"></span>
            <span className="text-clinic-gold text-sm font-medium tracking-wide">
              Especialistas em Fisioterapia &amp; Pilates desde 2016
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Recupere seu Movimento.
            <br />
            <span className="text-clinic-gold">Viva com Qualidade.</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Atendimento individualizado com protocolos personalizados em Fisioterapia Ortopédica,
            Pilates Clínico e Terapia Manual. Cuidamos de você do primeiro ao último passo da sua
            reabilitação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-16">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-clinic-gold hover:bg-clinic-gold-light text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-clinic-gold/30 hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={scrollToServicos}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Conheça nossos serviços
              <ChevronDown className="lucide lucide-chevron-down" width={18} height={18} />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-clinic-gold">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none relative mt-8 lg:mt-0">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/atualizadas/hero-img.webp"
              alt="Atendimento na Clínica Saúde Movimento"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="absolute -inset-4 bg-clinic-gold/20 blur-2xl -z-10 rounded-full opacity-50"></div>
        </div>
      </div>
      <button
        onClick={scrollToServicos}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce z-20"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={28} height={28} />
      </button>
    </section>
  );
}
