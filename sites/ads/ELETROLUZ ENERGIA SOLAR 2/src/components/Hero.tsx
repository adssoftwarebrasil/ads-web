import { Phone, Award, MapPin, Shield, ChevronDown } from 'lucide-react';
import { BLUE, YELLOW, WA_SOLAR_MSG_ACC, scrollToId } from '../theme';

const stats = [
  { Icon: Award, label: '48 anos de experiência' },
  { Icon: MapPin, label: 'Atendimento em 300km' },
  { Icon: Shield, label: 'Produtos com Garantia' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(0, 73, 176) 0%, rgb(96, 174, 220) 100%)' }}
    >
      <div className="absolute inset-0 opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FPaineis_parque.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className="inline-block mb-8 px-6 py-3 rounded-full backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(254, 201, 1, 0.5)',
            animation: '0.8s ease-out 0.8s 1 normal backwards running slideDown',
          }}
        >
          <p className="text-white font-medium text-sm sm:text-base tracking-wide">
            <span style={{ color: YELLOW }}>★</span> 48 anos de tradição • 7 anos em energia solar
          </p>
        </div>
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          style={{ animation: '1s ease-out 1s 1 normal backwards running slideInLeft' }}
        >
          Soluções Completas em <br className="hidden md:block" />
          <span style={{ color: YELLOW }}>Energia Solar</span> e Material Elétrico
        </h1>
        <p
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light"
          style={{ animation: '1s ease-out 1.2s 1 normal backwards running fadeIn' }}
        >
          Tradição, qualidade e inovação sustentável para Barreiras e região.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          style={{ animation: '1s ease-out 1.4s 1 normal backwards running slideUp' }}
        >
          <a
            href={WA_SOLAR_MSG_ACC}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 rounded-xl font-black text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 w-full sm:w-auto justify-center overflow-hidden"
            style={{
              backgroundColor: YELLOW,
              color: BLUE,
              boxShadow: 'rgba(254, 201, 1, 0.4) 0px 10px 30px, rgba(254, 201, 1, 0.1) 0px 0px 0px 4px',
              animation: '2s ease-in-out 0s infinite normal none running pulse',
            }}
          >
            <Phone width={24} height={24} className="lucide lucide-phone fill-current" />
            <span className="uppercase tracking-tighter">Solicitar Orçamento Grátis</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
          </a>
          <button
            onClick={() => scrollToId('serviços')}
            className="px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/50 text-white hover:bg-white hover:text-[#0049b0] w-full sm:w-auto backdrop-blur-sm"
          >
            Conhecer Produtos
          </button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          style={{ animation: '1s ease-out 1.8s 1 normal backwards running fadeIn' }}
        >
          {stats.map(({ Icon, label }) => (
            <div
              key={label}
              className="backdrop-blur-md rounded-2xl p-6 border border-white/10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <Icon width={32} height={32} className="mx-auto mb-3" style={{ color: YELLOW }} />
              <p className="text-white font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToId('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        style={{ animation: '2s ease 0s infinite normal none running bounce' }}
      >
        <ChevronDown
          width={40}
          height={40}
          className="text-white/70 hover:text-white transition-colors"
        />
      </button>
    </section>
  );
}
