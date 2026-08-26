import { Clock, Zap, ThumbsUp, Headphones } from 'lucide-react';

const reasons = [
  {
    Icon: Clock,
    title: 'Atendimento Imediato',
    text: 'Estamos sempre prontos para atender você a qualquer momento, 24 horas por dia.',
  },
  {
    Icon: Zap,
    title: 'Variedade de Soluções',
    text: 'Oferecemos uma gama completa de serviços automotivos para todas as suas necessidades.',
  },
  {
    Icon: ThumbsUp,
    title: 'Qualidade Garantida',
    text: 'Trabalhamos com as melhores marcas do mercado e garantimos a satisfação total.',
  },
  {
    Icon: Headphones,
    title: 'Socorro 24h',
    text: 'Plantão de emergência para socorrer você onde e quando precisar em Gurupi.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/por-que-escolher-background-paralax.webp")',
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/85"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
            Por que Contratar?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-[rgb(218,221,229)] text-lg sm:text-xl max-w-2xl mx-auto">
            Serviços confiáveis, rápidos e de alta qualidade.
          </p>
          <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {reasons.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="bg-[rgb(233,155,29)] w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-[rgb(218,221,229)] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="http://wa.me/556384458064"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Solicitar Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
