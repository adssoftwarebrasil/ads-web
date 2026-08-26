import { Phone, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../constants';

const brands = ['Tramontina', 'Irwin', 'Morlan', 'Vonder', 'Sentinela'];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/hero-bg-att.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7)',
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-dark/85 via-navy-dark/40 to-transparent"></div>
      <div className="absolute left-0 top-0 h-full w-1.5 bg-brand z-20 opacity-80"></div>
      <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">Maringá – PR</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-cream leading-[1.15] mb-6 drop-shadow-2xl"
            style={{ opacity: 1, transform: 'translateY(0px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
          >
            Tudo para sua <br className="hidden sm:block" />
            <span className="text-brand">obra, fazenda</span> <br />e manutenção em{' '}
            <br className="hidden sm:block" />um só lugar.
          </h1>
          <p
            className="text-base sm:text-lg text-cream/90 max-w-xl mb-10 leading-relaxed font-medium drop-shadow-md"
            style={{ opacity: 1, transform: 'translateY(0px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
          >
            Ferramentas, ferragens e materiais de construção com marcas reconhecidas e o atendimento técnico que você precisa.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            style={{ opacity: 1, transform: 'translateY(0px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-brand hover:bg-brand-light text-navy font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-brand/20 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon width={20} height={20} />
              Orçamento via WhatsApp
            </a>
            <a
              href="tel:4432252211"
              className="flex items-center gap-3 border-2 border-cream/20 hover:border-brand text-cream hover:text-brand font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <Phone width={18} height={18} className="lucide lucide-phone " />
              (44) 3225-2211
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-cream/50 text-xs font-bold tracking-widest uppercase">
            {brands.map((b) => (
              <span key={b} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand/50"></span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-10 left-10 text-cream/40 hover:text-brand transition-colors animate-bounce z-20 hidden sm:block"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </a>
    </section>
  );
}
