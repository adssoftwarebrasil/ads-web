import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Peças Originais e Similares',
  'Entrega Rápida',
  'Equipe Especializada',
];

const stats = [
  { value: '13+', label: 'Anos de Mercado' },
  { value: '2', label: 'Unidades' },
  { value: '100+', label: 'Marcas Parceiras' },
  { value: '24h', label: 'Suporte Técnico' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/fachada-loja-autopecas-hero-background-paralax.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(28,58,122)]/95 via-[rgb(28,58,122)]/85 to-[rgb(26,21,92)]/80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-[rgb(216,32,38)] text-white rounded-full text-sm font-semibold shadow-lg">
            13 anos de excelência no mercado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Peças de Qualidade para Caminhões e Ônibus em{' '}
            <span className="text-[rgb(216,32,38)]">Sergipe e Alagoas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Distribuidor autorizado das melhores marcas do mercado. Atendimento
            especializado, entrega rápida e preços competitivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-[rgb(216,32,38)] flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="group flex items-center justify-center gap-3 bg-[rgb(216,32,38)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('unidades')}
              className="flex items-center justify-center gap-3 bg-white text-[rgb(28,58,122)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl"
            >
              Nossas Unidades
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
