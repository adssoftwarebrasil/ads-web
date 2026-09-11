import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const stats = [
  { value: '+15', label: 'Anos de mercado' },
  { value: '+6.000', label: 'Produtos' },
  { value: '+1.000', label: 'Clientes' },
  { value: '+35', label: 'Parceiros' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/episolda/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(16,109,71)]/20 border border-[rgb(16,109,71)]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[rgb(16,109,71)] animate-pulse"></span>
            <span className="text-[rgb(16,109,71)] text-sm font-medium">Desde 2010 em Piracicaba - SP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Soluções Completas <span className="text-[rgb(16,109,71)]">para Soldagem</span> e Ferramentas
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Máquinas de solda, consumíveis, abrasivos e ferramentas para serralheiros, funileiros e indústrias. Atendimento técnico especializado, pronta entrega e os melhores preços da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(16,109,71)] hover:bg-[rgb(13,90,58)] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-1 text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>
            <a
              href="tel:+551933012049"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 text-base"
            >
              (19) 3301-2049
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-[rgb(16,109,71)]">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('quem-somos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
