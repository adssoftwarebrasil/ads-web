import { Phone, ArrowRight } from 'lucide-react';

const stats = [
  { value: '8+', label: 'Anos no Mercado' },
  { value: '5-10', label: 'Dias para Abrir' },
  { value: '100%', label: 'Digital' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center pt-24 md:pt-28 pb-16 md:pb-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-white opacity-10 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-white opacity-10 rounded-full blur-3xl -bottom-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8">
            <span className="text-sm md:text-base font-semibold text-white">
              ✨ Desde 2016 em Campo Grande - MS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight text-white">
            Contabilidade para Empresas que Querem{' '}
            <span className="text-yellow-300 block sm:inline">Crescer</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Abertura de empresa em 5-10 dias, contabilidade digital e gestão
            financeira estratégica para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <a
              href="https://wa.me/556733052146?text=Olá! Gostaria de falar com um consultor da Contix."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="lucide lucide-phone " width={24} height={24} />
              Falar com Consultor
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg border-2 border-white/30 hover:scale-105 transition-all duration-300"
            >
              Conheça a Contix
              <ArrowRight className="lucide lucide-arrow-right " width={20} height={20} />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
