import { Star, CheckCircle2, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const features = [
  'Fisioterapia Ortopédica Especializada',
  'Pilates e Reabilitação Funcional',
  'Atendimento Domiciliar',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/img/hero-background.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(13, 5, 32, 0.92) 0%, rgba(43, 2, 152, 0.85) 50%, rgba(254, 48, 17, 0.6) 100%)',
        }}
      ></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgb(219, 67, 43), transparent)' }}
        ></div>
        <div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgb(245, 197, 202), transparent)', animationDelay: '1.5s' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-brand-pink/30 bg-white/10 backdrop-blur-sm text-brand-pink">
              <Star size={14} fill="currentColor" />
              <span>+20 anos cuidando de quem você ama</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6 text-shadow-lg">
              Recupere Seu{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, rgb(245, 197, 202), rgb(219, 67, 43)) text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Movimento
              </span>{' '}
              e <br className="hidden sm:block" />
              Viva Sem Dor
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              Fisioterapia especializada com atendimento humanizado e personalizado em Sorriso-MT. Tratamentos baseados
              em ciência, tecnologia e empatia para devolver sua qualidade de vida.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-brand-pink flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/556699102233?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Movimente%20Fisioterapia."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:shadow-2xl hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
              >
                <WhatsAppIcon size={20} />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Ver Serviços
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
                >
                  <span className="text-white text-xl font-black">20+</span>
                </div>
                <p className="text-white font-bold text-sm">Anos de Experiência</p>
                <p className="text-white/60 text-xs mt-1">em Fisioterapia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, rgb(62, 48, 123), rgb(74, 15, 214))' }}
                >
                  <span className="text-white text-xl font-black">11</span>
                </div>
                <p className="text-white font-bold text-sm">Especialidades</p>
                <p className="text-white/60 text-xs mt-1">em um só lugar</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors col-span-2">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgb(245, 197, 202), rgb(219, 67, 43))' }}
                  >
                    <span className="text-white font-black text-sm">5★</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Atendimento Humanizado</p>
                    <p className="text-white/60 text-xs mt-1">
                      Cuidado personalizado para cada paciente, com respeito e empatia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-white/50 text-xs text-center font-medium tracking-widest uppercase">
                Horário de Atendimento
              </p>
              <p className="text-white text-center font-semibold mt-1">Seg – Sex: 07h às 12h | 13h às 18h</p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Role para baixo</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
