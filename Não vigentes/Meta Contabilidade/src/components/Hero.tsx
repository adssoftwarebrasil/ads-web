import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_SERVICOS } from '../data';
import { scrollToId } from '../hooks';

const HIGHLIGHTS = [
  'Atendimento ágil e personalizado',
  'Modelo híbrido: presencial + online',
  'Certificado digital por videoconferência',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/meta%20contabilidade/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand/80 to-brand-dark/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Star size={12} className="text-primary fill-primary" />
            <span>5.0 estrelas no Google — Atuando desde 2019</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 text-shadow">
            Sua empresa em <span className="text-primary">boas mãos.</span>
            <br />
            Contabilidade que gera <span className="text-primary">resultados.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Somos a Meta Contabilidade Digital — especialistas em transformar a gestão financeira e
            tributária do seu negócio em uma vantagem competitiva real, com atendimento humano e
            consultivo em Dourados/MS.
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                <span className="text-gray-200 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_SERVICOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 text-base"
            >
              Fale Conosco Agora
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => scrollToId('servicos')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm text-base"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <button
          onClick={() => scrollToId('servicos')}
          className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center pt-2 hover:border-primary transition-colors"
          aria-label="Scroll down"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </button>
      </div>
    </section>
  );
}
