import { Droplets, Shield, Leaf, Wrench, Sparkles, TrendingUp, type LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    icon: Droplets,
    title: "100% à Prova D'Água",
    text: 'Fabricadas em WPC (Wood Plastic Composite), nossas portas não absorvem umidade, resistindo a ambientes úmidos como banheiros, cozinhas e áreas de serviço.',
  },
  {
    icon: Shield,
    title: 'Durabilidade Superior',
    text: 'Estrutura reforçada que resiste ao desgaste do tempo, variações de temperatura e impactos do cotidiano — mantendo a beleza e funcionalidade por décadas.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    text: 'Material WPC é eco-friendly, aproveitando matérias-primas recicláveis sem abrir mão da qualidade e do acabamento premium que seu imóvel merece.',
  },
  {
    icon: Wrench,
    title: 'Baixíssima Manutenção',
    text: 'Esqueça reformas constantes. Nossas portas não empenam, não incham e não exigem pinturas periódicas — praticidade total para o seu dia a dia.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento de Elite',
    text: 'Superfície lisa, uniforme e sofisticada com opções de cores e texturas para combinar perfeitamente com qualquer estilo arquitetônico.',
  },
  {
    icon: TrendingUp,
    title: 'Valorização do Imóvel',
    text: 'Portas de alto padrão são investimento certo. Aumentam o valor de mercado do imóvel e encantam compradores e locatários à primeira vista.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Tecnologia e Sofisticação em Cada Detalhe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Pioneiros na oferta de portas 100% WPC no Centro-Oeste, combinamos inovação e qualidade
            para entregar o melhor para o seu projeto.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-[#ECC4A4]/40"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-[#005143]/8 flex items-center justify-center text-[#DE8F52] mb-6 group-hover:bg-[#DE8F52] group-hover:text-white transition-all duration-300"
                  style={{ backgroundColor: 'rgba(0, 81, 67, 0.08)' }}
                >
                  <Icon width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-[#005143] mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
