import { ArrowRight, Award, CheckCircle, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const features = [
  { Icon: Award, label: '+25 anos de experiência' },
  { Icon: CheckCircle, label: 'Materiais e mão de obra' },
  { Icon: Clock, label: 'Entrega no prazo garantida' },
];

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40"></div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, rgb(253, 253, 253) 0%, transparent 100%)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 text-brand-dark"
            style={{ backgroundColor: 'rgb(164, 209, 58)' }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'rgb(2, 2, 2)' }}
            ></span>
            Mais de 25 anos transformando ambientes em Sinop-MT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 text-shadow">
            Qualidade em <span style={{ color: 'rgb(164, 209, 58)' }}>Tintas</span> e{' '}
            <span style={{ color: 'rgb(124, 205, 223)' }}>Serviços de</span> Pintura
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl text-shadow-sm">
            Da loja à aplicação, a Atual Tintas oferece os melhores materiais e mão de obra
            especializada para transformar qualquer espaço com excelência, eficiência e compromisso
            que só 25 anos de mercado podem garantir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/5566996839888"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl text-brand-dark"
              style={{
                backgroundColor: 'rgb(164, 209, 58)',
                boxShadow: 'rgba(164, 209, 58, 0.4) 0px 4px 24px',
              }}
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              Solicitar Orçamento Grátis
              <ArrowRight
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-200"
                width={18}
                height={18}
              />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Ver Nossos Serviços
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {features.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon
                  className="flex-shrink-0"
                  width={18}
                  height={18}
                  style={{ color: 'rgb(164, 209, 58)' }}
                />
                <span className="text-white/80 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Rolar</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
}
