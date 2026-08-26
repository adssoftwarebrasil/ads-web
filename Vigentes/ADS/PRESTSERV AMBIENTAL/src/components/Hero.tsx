import { CheckCircle, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const features = [
  'Frota Própria Licenciada',
  '12 Anos de Experiência',
  'Resíduos Perigosos e Não Perigosos',
  'Sem Terceirização de Processos',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: 'polygon(0px 100%, 100% 100%, 100% 100%, 0px 0px)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-eco-500/20 border border-eco-400/40 text-eco-100 text-sm font-medium px-4 py-2 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <span className="w-2 h-2 rounded-full bg-eco-400 animate-pulse-slow"></span>
            Empresa licenciada pela legislação ambiental vigente
          </div>
          <h1 className="text-shadow text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-100 opacity-100 translate-y-0">
            Gestão de Resíduos <span className="text-accent-400">Inteligente</span> e{' '}
            <span className="text-eco-300">Sustentável</span>
          </h1>
          <p className="text-shadow-sm text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Há mais de 12 anos, a Goias Eco Ambiental oferece soluções completas em gerenciamento de resíduos perigosos e
            não perigosos — com frota própria, sem terceirização e total proteção para a sua marca.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10 transition-all duration-700 delay-300 opacity-100 translate-y-0">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-white text-shadow-sm text-sm">
                <CheckCircle width={16} height={16} className="lucide lucide-check-circle text-eco-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 opacity-100 translate-y-0">
            <a
              href="http://wa.me/5562994920239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-2xl hover:scale-105 shadow-lg"
            >
              <WhatsAppIcon width={20} height={20} />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce-slow z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </a>
    </section>
  );
}
