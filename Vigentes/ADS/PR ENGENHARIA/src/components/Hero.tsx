import { ArrowRight, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '15+', label: 'Anos de experiência' },
  { value: '8', label: 'Cidades atendidas' },
  { value: '5.0', label: 'Avaliação Google' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/pr-engenharia/img/hero-background.webp"
          alt="PR Engenharia background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pr-dark/80 via-pr-dark/60 to-pr-dark/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pr-dark/70 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-pr-rose"></span>
            <span className="text-pr-rose text-xs font-medium tracking-widest uppercase">
              Fundada em 2010 · Norte Goiano
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Engenharia e <span className="text-pr-rose">Arquitetura</span> com Excelência Técnica
          </h1>
          <p className="text-pr-taupe text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Soluções completas em projetos de engenharia, arquitetura, laudos técnicos, avaliação e regularização de
            imóveis para obras residenciais, comerciais e industriais em todo o norte goiano.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="http://wa.me/556284826969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pr-rose text-pr-dark px-7 py-4 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-pr-dark active:scale-95"
            >
              <WhatsAppIcon width={18} height={18} />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-7 py-4 font-medium text-sm tracking-wide transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95"
            >
              Ver Serviços
              <ArrowRight width={16} height={16} strokeWidth={2} className="lucide lucide-arrow-right " />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="font-serif text-2xl font-semibold text-pr-rose">{s.value}</span>
                <span className="text-pr-taupe text-xs leading-tight max-w-[80px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown width={18} height={18} strokeWidth={2} className="lucide lucide-chevron-down animate-bounce" />
      </a>
    </section>
  );
}
