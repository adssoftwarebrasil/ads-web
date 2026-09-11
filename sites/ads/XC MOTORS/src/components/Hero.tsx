import { Shield, Award, TrendingUp, ChevronDown } from 'lucide-react';
import { scrollToSection } from './Header';
import { WHATSAPP_PHONE } from '../data';

const stats = [
  { value: '+500', label: 'Veículos Vendidos' },
  { value: '6', label: 'Anos de Mercado' },
  { value: '4.5★', label: 'Avaliação Google' },
  { value: '100%', label: 'Transparência' },
];

export default function Hero() {
  const openWhatsApp = () => {
    const text = 'Olá! Gostaria de saber mais sobre os veículos da XC Motors.';
    window.open(`http://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/xc%20motors/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/85 to-[#0c0c0c]/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Várzea Grande · MT</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#fefefe] leading-tight mb-6">
            Seu próximo <span className="text-[#f8c102]">carro dos</span> sonhos está aqui
          </h1>
          <p className="text-[#fefefe]/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Veículos seminovos com qualidade certificada, preço justo e toda a transparência que você merece. Compre, venda ou troque com quem entende do assunto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection('catalogo')}
              className="bg-[#f8c102] text-[#0c0c0c] px-8 py-4 rounded-full font-bold text-base hover:bg-[#f8c102]/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-[#f8c102]/20"
            >
              Ver Catálogo de Veículos
            </button>
            <button
              onClick={openWhatsApp}
              className="border-2 border-[#fefefe]/30 text-[#fefefe] px-8 py-4 rounded-full font-semibold text-base hover:border-[#f8c102] hover:text-[#f8c102] transition-all duration-200"
            >
              Falar no WhatsApp
            </button>
          </div>
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-[#fefefe]/60 text-sm">
              <Shield className="lucide lucide-shield text-[#f8c102]" width={14} height={14} />
              Documentação garantida
            </div>
            <div className="flex items-center gap-2 text-[#fefefe]/60 text-sm">
              <Award className="lucide lucide-award text-[#f8c102]" width={14} height={14} />
              Qualidade certificada
            </div>
            <div className="flex items-center gap-2 text-[#fefefe]/60 text-sm">
              <TrendingUp className="lucide lucide-trending-up text-[#f8c102]" width={14} height={14} />
              Melhor preço do MT
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#f8c102] mb-1">{s.value}</div>
                <div className="text-[#fefefe]/50 text-xs uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('catalogo')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#fefefe]/40 hover:text-[#f8c102] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
