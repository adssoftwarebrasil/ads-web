import { CheckCircle, Award, Leaf } from 'lucide-react';

const features = [
  { Icon: CheckCircle, name: 'lucide-check-circle', label: 'Produtos Certificados' },
  { Icon: Award, name: 'lucide-award', label: 'Qualidade Garantida' },
  { Icon: Leaf, name: 'lucide-leaf', label: 'Sustentabilidade' },
];

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[rgb(138,154,39)]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative flex items-center justify-center transition-all duration-1000 opacity-100 translate-x-0">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[rgb(138,154,39)]/20 to-transparent rounded-2xl sm:rounded-3xl blur-xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/agroplantec%2FQualidade%20e%20Compromisso.jpg"
                alt="Qualidade e Compromisso - Agro Plantec"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="inline-block">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[rgb(138,154,39)]/10 text-[rgb(138,154,39)] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-[rgb(29,29,27)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Qualidade e<span className="block text-[rgb(138,154,39)] mt-1">Compromisso</span>
            </h2>
            <p className="text-[rgb(138,154,39)] text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
              A natureza na sua melhor forma, direto para sua casa!
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A Agro Plantec, parte do Grupo Plantec, destaca-se pela gestão completa do plantio, preparo,
              comercialização e logística de frutas e verduras. Com atuação expressiva no abastecimento do
              mercado, oferecemos produtos certificados de qualidade excepcional, promovendo saúde e bem-estar.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {features.map(({ Icon, name, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className={`lucide ${name} w-7 h-7 sm:w-8 sm:h-8 text-[rgb(138,154,39)] mb-2`} />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">{label}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-[rgb(138,154,39)] text-white text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:bg-[rgb(118,134,29)] transition-all duration-300 shadow-xl shadow-[rgb(138,154,39)]/30 hover:shadow-2xl hover:-translate-y-1"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
