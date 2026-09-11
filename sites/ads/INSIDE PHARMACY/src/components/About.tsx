import { FlaskConical, Award, Microscope, TrendingUp } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Anos de Operação' },
  { value: '35+', label: 'Anos de Expertise' },
  { value: '5.0', label: 'Avaliação no Google' },
];

const features = [
  {
    icon: FlaskConical,
    title: 'Laboratórios Segregados',
    text: 'Laboratórios 100% dedicados e separados para Hormônios, Sólidos e Semissólidos — eliminando qualquer risco de contaminação cruzada.',
  },
  {
    icon: Award,
    title: 'Matérias-Primas Importadas',
    text: 'Trabalhamos exclusivamente com insumos de procedência garantida, assegurando pureza e eficácia terapêutica em cada fórmula.',
  },
  {
    icon: Microscope,
    title: '35 Anos de Expertise',
    text: 'Nossas sócias somam 35 anos no setor farmacêutico — 20 em prescrição e 15 em manipulação — garantindo rigor técnico acima da média.',
  },
  {
    icon: TrendingUp,
    title: 'Licenças ANVISA em Dia',
    text: 'Estrutura impecável e todas as licenças obtidas em tempo recorde, reflexo de um know-how que projeta confiança em cada detalhe.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-red"></span>
              <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">
                Sobre a Inside Pharmacy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-black leading-tight mb-6">
              Manipulação de Alta Precisão, <span className="text-brand-red">Resultados Reais.</span>
            </h2>
            <p className="text-brand-gray-dark text-lg leading-relaxed mb-6">
              Na Inside Pharmacy, cuidamos da sua saúde com fórmulas manipuladas sob medida, atendimento humanizado e
              compromisso inabalável com a qualidade.
            </p>
            <p className="text-brand-gray-dark leading-relaxed mb-8">
              Localizada na Asa Sul, em Brasília, unimos a inovação de uma empresa jovem ao respaldo de décadas de
              conhecimento prático. Cada cápsula, creme ou suplemento é produzido com matérias-primas importadas em
              laboratórios de última geração, garantindo a potência exata que o seu protocolo exige.
            </p>
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, i) => (
                <div key={stat.label} className="contents">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-black">{stat.value}</span>
                    <span className="text-brand-gray-dark text-sm mt-0.5">{stat.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className="w-px bg-brand-gray-mid"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="relative transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/galeria/interior-farmacia-estantes-produtos-parede-madeira_4608x3456.webp"
                alt="Interior da Inside Pharmacy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-brand-red text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-white/80">Aprovado ANVISA</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-brand-black text-white rounded-2xl px-6 py-4 shadow-xl border border-white/10">
              <p className="text-2xl font-bold">★ 5.0</p>
              <p className="text-sm text-white/60">Google Reviews</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-brand-gray-light rounded-2xl p-7 border border-brand-gray-mid hover:border-brand-red/30 hover:bg-white hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 opacity-100 translate-y-0"
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Icon
                    width={22}
                    height={22}
                    strokeWidth={2}
                    className="text-brand-red group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-brand-black text-base mb-3">{feature.title}</h3>
                <p className="text-brand-gray-dark text-sm leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
