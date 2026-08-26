import { MapPin, Star, Calendar, ChevronDown } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(240,26,40)]/15 border border-[rgb(240,26,40)]/30 text-[rgb(240,26,40)] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <MapPin size={14} className="lucide lucide-map-pin" />
            Ribeirão Preto, SP
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 text-shadow-lg opacity-100 translate-y-0">
            Sua Oficina de{' '}
            <span className="text-[rgb(240,26,40)] relative">
              Confiança
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[rgb(240,26,40)] opacity-40 rounded-full"></span>
            </span>{' '}
            em Ribeirão Preto
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Mecânica completa para veículos a gasolina, flex e diesel. Equipe qualificada, tecnologia
            avançada e transparência total em todos os serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <a
              href="https://wa.me/551636240220?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20na%20Althus%20Service%20Car."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fa854] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 group"
            >
              <WhatsappIcon size={22} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5"
            >
              Ver Serviços
            </a>
          </div>
          <div className="flex flex-wrap gap-6 transition-all duration-700 delay-400 opacity-100 translate-y-0">
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="lucide lucide-star text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.9</span>
              <span className="text-white/50 text-sm">no Google</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Calendar size={15} className="lucide lucide-calendar text-[rgb(240,26,40)]" />
              <span>Fundada em 2023</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>Atendimento Seg–Sex</span>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down" />
      </a>
    </section>
  );
}
