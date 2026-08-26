import { MessageCircle, Phone, Star, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/gas%20forte/img/hero-background-fachada-gas-forte-carro-laranja-estacionado_1012x356.webp")',
          backgroundPosition: 'center 40%',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/30 to-brand-dark/80"></div>
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(at 60% 50%, rgba(249, 77, 1, 0.15) 0%, transparent 60%)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-peach text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-slow"></span>
          Distribuidora Oficial Supergasbras • Goiânia e Região
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto">
          Gás de cozinha em Goiânia <span className="text-gradient">na sua porta</span>
          <br />
          em minutos.
        </h1>
        <p className="text-lg sm:text-xl text-brand-light/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          A Gás Forte é o seu <strong className="text-brand-amber font-semibold">Gás do Povo</strong>! Há mais de 20
          anos como distribuidora de gás em Goiânia, garantindo entrega rápida no Tropical Verde e região.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="http://wa.me/556282381515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/50"
          >
            <MessageCircle width={20} height={20} className="lucide lucide-message-circle" />
            Pedir pelo WhatsApp
          </a>
          <a
            href="tel:6235738001"
            className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange2 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-orange/50"
          >
            <Phone width={20} height={20} className="lucide lucide-phone" />
            Ligar Agora
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-brand-light/70">
            <Star width={18} height={18} className="lucide lucide-star text-brand-amber fill-brand-amber" />
            <span className="text-sm font-semibold">
              <span className="text-white">5.0</span> no Google
            </span>
          </div>
          <div className="flex items-center gap-2 text-brand-light/70">
            <Clock width={18} height={18} className="lucide lucide-clock text-brand-orange" />
            <span className="text-sm font-semibold">Entrega Express</span>
          </div>
          <div className="flex items-center gap-2 text-brand-light/70">
            <ShieldCheck width={18} height={18} className="lucide lucide-shield-check text-brand-orange" />
            <span className="text-sm font-semibold">+20 Anos de Confiança</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0 80L1440 80L1440 20C1200 70 960 80 720 60C480 40 240 10 0 40L0 80Z"
            fill="#1e191d"
          ></path>
        </svg>
      </div>
    </section>
  );
}
