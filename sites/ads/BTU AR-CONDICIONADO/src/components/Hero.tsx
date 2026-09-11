import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const highlights = [
  'Instalação profissional garantida',
  'Autorizada Gree, Fujitsu, Elgin e TCL',
  'Atendimento no DF e entorno',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/BTU/tecnico-na-escada-casa-com-caminhonete_720x1280.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary-light text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-slow"></span>
            Desde 2013 no mercado
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 text-balance">
            Ar Condicionado <span className="text-secondary">Instalação,</span>{' '}
            <span className="text-secondary-light">Manutenção</span> e Venda
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
            Especialistas em Split Hi-Wall, Cassete e Piso-Teto. Atendemos residências, empresas e
            contratos corporativos no DF e região do entorno.
          </p>
          <ul className="flex flex-col gap-2 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base backdrop-blur-sm transition-all duration-300"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
