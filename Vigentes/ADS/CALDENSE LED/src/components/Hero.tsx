import { Zap, ShieldCheck, Star, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../utils/scroll';

const floatOrbs = [
  { size: 80, color: 'rgb(35, 145, 16)', top: '10%', left: '5%', duration: '3s', delay: '0s' },
  { size: 120, color: 'rgb(249, 170, 12)', top: '25%', left: '20%', duration: '3.5s', delay: '0.4s' },
  { size: 160, color: 'rgb(35, 145, 16)', top: '40%', left: '35%', duration: '4s', delay: '0.8s' },
  { size: 200, color: 'rgb(249, 170, 12)', top: '55%', left: '50%', duration: '4.5s', delay: '1.2s' },
  { size: 240, color: 'rgb(35, 145, 16)', top: '70%', left: '65%', duration: '5s', delay: '1.6s' },
  { size: 280, color: 'rgb(249, 170, 12)', top: '85%', left: '80%', duration: '5.5s', delay: '2s' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/caldense%20led/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/80 via-[#010101]/60 to-[#010101]/90"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatOrbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.color,
              top: orb.top,
              left: orb.left,
              filter: 'blur(40px)',
              animation: `float ${orb.duration} ease-in-out ${orb.delay} infinite`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F9AA0C]/15 border border-[#F9AA0C]/30 text-[#F9AA0C] px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
          <Zap className="lucide lucide-zap fill-[#F9AA0C]" width={14} height={14} />
          <span>8 Anos Iluminando Poços de Caldas e Região</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight text-shadow-lg mb-6">
          Iluminação LED de <span className="text-[#F9AA0C]">Alta Qualidade</span>
          <br />
          <span className="text-[#239110]">Direto ao Cliente</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluções completas em iluminação LED para residências, comércios, indústrias e projetos
          decorativos. Showroom completo, atendimento técnico especializado e entrega grátis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="http://wa.me/553530646373?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20em%20iluminação%20LED."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#239110] hover:bg-[#1a6b0c] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/50 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollToSection('produtos')}
            className="border-2 border-white/30 hover:border-[#F9AA0C] text-white hover:text-[#F9AA0C] px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            Ver Produtos
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-[#239110]">
              <ShieldCheck className="lucide lucide-shield-check" width={18} height={18} />
            </span>
            <span>12 meses de garantia</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-[#239110]">
              <Zap className="lucide lucide-zap" width={18} height={18} />
            </span>
            <span>Pronta entrega</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-[#239110]">
              <Star
                className="lucide lucide-star fill-[#F9AA0C] text-[#F9AA0C]"
                width={18}
                height={18}
              />
            </span>
            <span>4.6★ no Google</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-all duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={32} height={32} />
      </button>
    </section>
  );
}
