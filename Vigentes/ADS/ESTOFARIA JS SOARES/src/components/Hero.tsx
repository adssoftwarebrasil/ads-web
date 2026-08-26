import { ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const stats = [
  { value: '7+', label: 'Anos de Mercado' },
  { value: '6', label: 'Profissionais' },
  { value: 'Brasil', label: 'Atendimento' },
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
            'url("https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-luxuoso-preto-e-dourado_960x1280.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-black/60 to-black/80"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow-lg">
          Tapeçaria Automotiva
          <span className="block text-brand-red">de Alto Padrão</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialistas em estofaria para caminhões e carros em todo o Brasil.
          Conforto, sofisticação e qualidade com rapidez na entrega.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block"
          >
            Solicitar Orçamento Grátis
          </a>
          <a
            href="#servicos"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-white/10 inline-block"
          >
            Ver Serviços
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-red">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown
          width={32}
          height={32}
          className="lucide lucide-chevron-down "
        />
      </a>
    </section>
  );
}
