import { Package, Zap, Wrench } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_URL } from '../constants';

const FEATURES = [
  { icon: Package, label: 'Variedade de Marcas', delay: '1000ms' },
  { icon: Zap, label: 'Entrega Rápida', delay: '1100ms' },
  { icon: Wrench, label: 'Instalação Grátis', delay: '1200ms' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/jd-baterias%2Fimg%2Fhero-imagem-de-fundo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(4, 51, 140, 0.95) 0%, rgba(4, 51, 140, 0.7) 50%, rgba(4, 51, 140, 0.85) 100%)',
        }}
      ></div>
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: 'rgb(254, 186, 0)' }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: 'rgb(254, 186, 0)', animationDelay: '1s' }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(30deg, rgb(255, 255, 255) 12%, transparent 12.5%, transparent 87%, rgb(255, 255, 255) 87.5%, rgb(255, 255, 255)), linear-gradient(150deg, rgb(255, 255, 255) 12%, transparent 12.5%, transparent 87%, rgb(255, 255, 255) 87.5%, rgb(255, 255, 255)), linear-gradient(30deg, rgb(255, 255, 255) 12%, transparent 12.5%, transparent 87%, rgb(255, 255, 255) 87.5%, rgb(255, 255, 255)), linear-gradient(150deg, rgb(255, 255, 255) 12%, transparent 12.5%, transparent 87%, rgb(255, 255, 255) 87.5%, rgb(255, 255, 255)), linear-gradient(60deg, rgba(255, 255, 255, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5)), linear-gradient(60deg, rgba(255, 255, 255, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5))',
          backgroundSize: '80px 140px',
          backgroundPosition: '0px 0px, 0px 0px, 40px 70px, 40px 70px, 0px 0px, 40px 70px',
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 max-w-[1200px] py-32 md:py-40">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-700 opacity-100 translate-y-0"
            style={{
              backgroundColor: 'rgb(254, 186, 0)',
              color: 'rgb(4, 51, 140)',
              transitionDelay: '200ms',
              boxShadow: 'rgba(254, 186, 0, 0.4) 0px 4px 20px',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: 'rgb(4, 51, 140)' }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: 'rgb(4, 51, 140)' }}
              ></span>
            </span>
            Entrega e Instalação Grátis
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 transition-all duration-700 leading-tight opacity-100 translate-y-0"
            style={{ transitionDelay: '400ms' }}
          >
            <span className="block">Baterias Automotivas</span>
            <span className="relative inline-block mt-2">
              em Natal
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="rgb(254, 186, 0)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-1000 opacity-100"
                  style={{ transitionDelay: '1200ms' }}
                ></path>
              </svg>
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 font-light transition-all duration-700 opacity-100 translate-y-0"
            style={{ transitionDelay: '600ms' }}
          >
            Parcele em até <span className="font-bold text-[rgb(254,186,0)]">10x sem juros</span>
          </p>
          <div className="transition-all duration-700 opacity-100 translate-y-0" style={{ transitionDelay: '800ms' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgb(254, 186, 0)',
                color: 'rgb(4, 51, 140)',
                boxShadow: 'rgba(254, 186, 0, 0.4) 0px 8px 30px',
              }}
            >
              <span className="relative">
                <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110" />
              </span>
              Peça Agora pelo WhatsApp
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-16 md:mt-20">
          {FEATURES.map(({ icon: Icon, label, delay }) => (
            <div
              key={label}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-700 hover:bg-white hover:border-transparent hover:shadow-2xl opacity-100 translate-y-0"
              style={{ transitionDelay: delay }}
            >
              <div
                className="w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: 'rgb(254, 186, 0)' }}
              >
                <Icon size={32} strokeWidth={2.5} style={{ color: 'rgb(4, 51, 140)' }} />
              </div>
              <p className="text-center font-bold text-lg md:text-xl text-white group-hover:text-[rgb(4,51,140)] transition-colors duration-300">
                {label}
              </p>
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: 'rgb(254, 186, 0)' }}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 opacity-100" style={{ transitionDelay: '1500ms' }}>
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgb(254, 186, 0)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
