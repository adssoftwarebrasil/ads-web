import { MessageCircle, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/kissai%2Fhero.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(150, 1, 0, 0.9), rgba(100, 0, 0, 0.7))',
        }}
      ></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 transition-all duration-1000 opacity-100 translate-y-0"
          style={{
            textShadow:
              'rgba(235, 185, 3, 0.5) 0px 0px 20px, rgba(235, 185, 3, 0.3) 0px 0px 40px',
          }}
        >
          Pizza com Amor e Nossa Tradição
        </h1>
        <p className="text-xl md:text-2xl text-[rgb(235,185,3)] mb-12 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          Kissai Pizza: Sabor e Qualidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <a
            href="https://wa.me/5534996450016"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(235,185,3)] text-[rgb(150,1,0)] px-10 py-4 rounded-full text-lg font-semibold hover:brightness-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle size={22} />
            Enviar WhatsApp
          </a>
          <button
            onClick={() => onNavigate('servicos')}
            className="border-2 border-[rgb(235,185,3)] text-[rgb(235,185,3)] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(235,185,3)] hover:text-[rgb(150,1,0)] transition-all duration-300 hover:scale-105"
          >
            Nossas Pizzas
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-[rgb(235,185,3)]" />
      </div>
    </section>
  );
}
