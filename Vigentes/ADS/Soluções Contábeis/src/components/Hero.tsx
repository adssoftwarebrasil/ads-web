import { ArrowRight, TrendingDown, Building2, Calculator } from 'lucide-react';

const features = [
  {
    Icon: TrendingDown,
    title: 'Redução de Impostos',
    text: 'Estratégias tributárias para maximizar sua economia',
  },
  {
    Icon: Building2,
    title: 'Prestação de serviços e indústria.',
    text: 'Foco em supermercados, açougues e comércio',
  },
  {
    Icon: Calculator,
    title: 'Lucro Real',
    text: 'Especialização em gestão tributária complexa',
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/j%20a%20solucoes%20contabeis%2Fimg%2Ffachada-frente-da-empresa-hero-background-paralax-02.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(47,55,56)]/95 via-[rgb(47,55,56)]/85 to-[rgb(47,55,56)]/75"></div>
      </div>
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-[rgb(245,134,52)]/20 border border-[rgb(245,134,52)] rounded-full">
            <span className="text-[rgb(245,134,52)] font-semibold text-sm">
              Desde 2012 • Especialistas em Lucro Real
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reduza seus <span className="text-[rgb(245,134,52)]">Impostos</span> e
            Impulsione o Crescimento do seu Negócio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Especialistas em Planejamento Tributário para empresas do comércio
            varejista, atacadista, indústria e prestação de serviços em todo o
            Mato Grosso. Atuamos nos regimes Simples Nacional, Lucro Presumido e
            Lucro Real, desenvolvendo estratégias inteligentes, personalizadas e
            totalmente seguras para reduzir a carga tributária e maximizar
            resultados. Economize com precisão técnica, compliance rigoroso e
            soluções estruturadas sob medida para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() =>
                document
                  .getElementById('contato')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group bg-[rgb(245,134,52)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            >
              Dúvidas? Entre em contato
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="https://wa.me/5566999215475?text=Olá! Gostaria de saber mais sobre planejamento tributário."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[rgb(47,55,56)] transition-all flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="bg-[rgb(245,134,52)] p-3 rounded-lg flex-shrink-0">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
