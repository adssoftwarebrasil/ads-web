import { Wifi, Car, Clock, Star, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image com Parallax simulado (fixed) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/tryp%2FfachadaEntrada%2FHotel-Vista-Aerea-Drone-Profissional.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay Sofisticado: Gradiente escuro para garantir leitura */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80"></div>
        {/* Textura de ruído sutil (opcional para dar aspecto de filme/cinema) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge / Eyebrow Text */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:200ms] mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <div className="flex text-blue-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-widest text-white uppercase">Setor Hoteleiro Sul</span>
        </div>

        {/* Título Principal - Tipografia Moderna */}
        <h1 className="animate-fade-in-up opacity-0 [animation-delay:400ms] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Sua Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">Premium</span><br />
          em Brasília
        </h1>

        {/* Subtítulo */}
        <p className="animate-fade-in-up opacity-0 [animation-delay:600ms] text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Descubra o equilíbrio perfeito entre sofisticação executiva e conforto absoluto no coração da capital federal.
        </p>

        {/* Botões de Ação */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => window.open('https://wa.me/5561324695520?text=Olá! Gostaria de fazer uma reserva.', '_blank')}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded shadow-lg shadow-blue-500/20 font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Reservar Agora
            {/* Seta animada no hover */}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button
            onClick={() => scrollToSection('services')}
            className="group px-8 py-4 rounded bg-white/5 hover:bg-white/10 border border-white/30 text-white font-medium backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
          >
            Explorar Hotel
          </button>
        </div>

        {/* Barra de Features - Glassmorphism Refinado */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:1000ms] mt-16 sm:mt-24 w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
            {[
              { icon: Wifi, title: 'Wi-Fi High Speed', desc: 'Conexão gratuita' },
              { icon: Car, title: 'Estacionamento', desc: 'Segurança total' },
              { icon: Clock, title: 'Recepção 24h', desc: 'Suporte contínuo' }
            ].map((item, index) => (
              <div key={index} className="p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-default">
                <item.icon className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <ChevronDown size={32} />
      </div>

      {/* CSS para a animação de entrada (se não estiver usando Tailwind Config) */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}