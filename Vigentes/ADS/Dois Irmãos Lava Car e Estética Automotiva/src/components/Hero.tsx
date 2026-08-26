import { MapPin, Star, Clock, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const HERO_BG =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/hero-background.webp';
const WHATSAPP_AGENDAR =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20agendar%20uma%20lavagem.';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/30"></div>
      <div
        className="absolute top-1/4 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: 'rgb(169, 199, 209)' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-10 w-56 h-56 rounded-full opacity-8 blur-3xl"
        style={{ backgroundColor: 'rgb(203, 230, 234)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-2 mb-6">
            <MapPin width={14} height={14} className="lucide lucide-map-pin text-brand-blue" />
            <span className="text-brand-blue text-sm font-medium">Sinop, Mato Grosso</span>
          </div>
        </div>
        <div className="transition-all duration-700 delay-150 opacity-100 translate-y-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Seu Veículo{' '}
            <span
              className="block"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundImage:
                  'linear-gradient(135deg, rgb(169, 199, 209), rgb(221, 245, 250))',
              }}
            >
              Merece o Melhor
            </span>
          </h1>
        </div>
        <div className="transition-all duration-700 delay-300 opacity-100 translate-y-0">
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Lavagem profissional de carros, caminhões e máquinas pesadas em Sinop-MT. Qualidade,
            cuidado e confiança desde 2022.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40"
          >
            <WhatsAppIcon width={20} height={20} />
            Agendar pelo WhatsApp
          </a>
          <button onClick={() => scrollTo('servicos')} className="btn-outline text-base px-8 py-4">
            Conhecer Serviços
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-700 opacity-100 translate-y-0">
          <div className="card-glass px-4 py-4 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star
                width={16}
                height={16}
                className="lucide lucide-star text-yellow-400 fill-yellow-400"
              />
              <span className="text-white font-bold text-xl">4.8</span>
            </div>
            <p className="text-white/50 text-xs">Avaliação Média</p>
          </div>
          <div className="card-glass px-4 py-4 text-center">
            <div className="text-white font-bold text-xl mb-1">+3 anos</div>
            <p className="text-white/50 text-xs">No mercado</p>
          </div>
          <div className="card-glass px-4 py-4 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock width={14} height={14} className="lucide lucide-clock text-brand-blue" />
              <span className="text-white font-bold text-sm">07–18h</span>
            </div>
            <p className="text-white/50 text-xs">Funcionamento</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-brand-blue transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
