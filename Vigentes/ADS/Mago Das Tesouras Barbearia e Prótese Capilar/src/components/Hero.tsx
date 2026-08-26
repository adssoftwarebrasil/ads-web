import { Star, MapPin, Clock, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[rgb(32,29,30)]/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(32,29,30)] via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[rgb(254,197,52)]/15 border border-[rgb(254,197,52)]/30 text-[rgb(254,197,52)] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
            <Star
              className="lucide lucide-star"
              width={12}
              height={12}
              fill="currentColor"
            />
            <span>Melhor Barbearia de Uberlândia</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[rgb(247,246,247)] leading-[0.9] mb-6">
            O Mago das
            <span className="block text-[rgb(254,197,52)] italic">Transformações</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-white/70 mt-2">
              está aqui.
            </span>
          </h1>
          <p className="text-[rgb(247,246,247)]/75 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Especialistas em{' '}
            <strong className="text-[rgb(254,197,52)] font-semibold">
              prótese capilar masculina
            </strong>
            , cortes modernos, barba perfeita e micropigmentação. Recupere sua autoestima com
            quem entende de verdade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="http://wa.me/553488238723"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] font-bold text-base px-8 py-4 rounded-full hover:bg-[rgb(245,133,79)] hover:text-white transition-all duration-300 shadow-xl shadow-[rgb(254,197,52)]/25 hover:shadow-[rgb(245,133,79)]/30 hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-[rgb(247,246,247)] font-semibold text-base px-8 py-4 rounded-full hover:border-[rgb(254,197,52)] hover:text-[rgb(254,197,52)] transition-all duration-300"
            >
              Nossos Serviços
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-white/60">
            <div className="flex items-center gap-2">
              <MapPin
                className="lucide lucide-map-pin text-[rgb(254,197,52)] flex-shrink-0"
                width={14}
                height={14}
              />
              <span>Av. Benjamin Magalhães, 1014 - Tibery</span>
            </div>
            <div className="hidden sm:block w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Clock
                className="lucide lucide-clock text-[rgb(254,197,52)] flex-shrink-0"
                width={14}
                height={14}
              />
              <span>Seg–Sáb: 09h às 20h</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 hidden lg:flex flex-col gap-4">
          <div className="relative w-72 xl:w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/cortes/homem-corte-cabelo-novo-capa-preta-barbearia_1080x1440.webp"
              alt="Corte de cabelo profissional"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-5">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-[rgb(254,197,52)]"
                    width={12}
                    height={12}
                    fill="rgb(254,197,52)"
                  />
                ))}
              </div>
              <p className="text-white text-xs font-medium">Avaliação 4.8 · +500 clientes</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-[rgb(254,197,52)] rounded-xl p-4 text-center">
              <p className="font-display text-3xl font-black text-[rgb(32,29,30)]">+8</p>
              <p className="text-[rgb(32,29,30)] text-xs font-semibold mt-0.5">
                Anos de experiência
              </p>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/15">
              <p className="font-display text-3xl font-black text-[rgb(247,246,247)]">+500</p>
              <p className="text-white/60 text-xs font-semibold mt-0.5">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-[rgb(254,197,52)] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </a>
    </section>
  );
}
