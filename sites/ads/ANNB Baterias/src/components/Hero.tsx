import { Truck, Shield, Star, ChevronDown } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/caroba/annb%20baterias/img/hero-background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-green/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-20 md:pt-40 md:pb-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse-slow"></span>
            Atendimento 08h às 22h — Todos os dias
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Bateria para <br />
            <span className="text-brand-muted">seu carro</span> em{' '}
            <span
              className="relative inline-block text-white"
              style={{ WebkitTextStroke: '1px rgb(166, 213, 175)' }}
            >
              Brasília
            </span>
            <br />
            <span className="text-brand-red">na sua porta.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Entregamos, instalamos e testamos sua bateria no local que você estiver. Melhores marcas
            do mercado, com até <strong className="text-white">2 anos de garantia</strong> e os
            melhores preços do DF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="http://wa.me/5561992574282?text=Olá!%20Preciso%20de%20uma%20bateria%20para%20meu%20carro.%20Vocês%20fazem%20entrega%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-red text-white font-bold text-lg px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-200 shadow-2xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
            >
              <WhatsappIcon className="w-6 h-6" />
              Pedir Bateria Agora
            </a>
            <a
              href="tel:+5561992574282"
              className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Ligar: (61) 99257-4282
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
              <span className="text-brand-muted">
                <Truck width={20} height={20} className="lucide lucide-truck" />
              </span>
              <span className="text-white text-xs font-semibold leading-tight">Entrega no Local</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
              <span className="text-brand-muted">
                <Shield width={20} height={20} className="lucide lucide-shield" />
              </span>
              <span className="text-white text-xs font-semibold leading-tight">
                Até 2 Anos de Garantia
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
              <span className="text-brand-muted">
                <Star width={20} height={20} className="lucide lucide-star" />
              </span>
              <span className="text-white text-xs font-semibold leading-tight">4.9 ⭐ no Google</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10 h-72">
            <img
              src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/anuncio-baterias-automotivas-helia-moura-bras-lia_720x401.webp"
              alt="Baterias automotivas ANNB"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/10 h-44">
              <img
                src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/mecanico-verificando-bateria-carro-multimetro_700x496.webp"
                alt="Instalação de bateria"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/10 h-44">
              <img
                src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/loja-moura-annb-motocicletas-estacionadas-fachada_382x510.webp"
                alt="Loja ANNB Baterias"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-soft">
        <a href="#servicos">
          <ChevronDown width={32} height={32} className="lucide lucide-chevron-down text-white/60" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
