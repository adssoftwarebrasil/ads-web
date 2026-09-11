import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Atendimento rápido e eficaz',
  'Produtos de alta qualidade',
  'Melhores preços da região',
];

const stats = [
  { value: '4+', label: 'Anos no Mercado' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100%', label: 'Satisfação' },
];

export default function Hero() {
  const scrollToProdutos = () => {
    const el = document.getElementById('produtos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/recife%20componentes/img/hero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-4 py-2 rounded-full text-sm font-semibold">Mais de 4 anos no mercado</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Acessórios para Esquadrias de <span className="text-[rgb(231,195,37)]">Alumínio e Vidro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Qualidade excepcional e preços imbatíveis na região metropolitana de Recife. Tudo que você precisa para suas esquadrias em um só lugar.
            </p>
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="lucide lucide-check-circle w-6 h-6 text-[rgb(231,195,37)] flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="http://wa.me/558199266617"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Solicite um Orçamento
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
              </a>
              <button
                onClick={scrollToProdutos}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Ver Produtos
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-[rgb(231,195,37)]">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
