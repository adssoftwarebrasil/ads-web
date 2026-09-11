import { Shield, Headphones, Award, Truck, Wrench, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    number: '01',
    title: 'Materiais de Alta Qualidade',
    description: 'Trabalhamos apenas com os melhores materiais do mercado, garantindo durabilidade e resistência para sua construção.',
  },
  {
    icon: Headphones,
    number: '02',
    title: 'Atendimento Especializado',
    description: 'Equipe técnica treinada para entender suas necessidades e indicar a melhor solução para cada projeto.',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Solidez e Durabilidade',
    description: 'Produtos fabricados com tecnologia de ponta, que garantem segurança e resistência às intempéries.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Entrega no Prazo',
    description: 'Cumprimos rigorosamente os prazos acordados, respeitando o cronograma de sua obra.',
  },
  {
    icon: Wrench,
    number: '05',
    title: 'Linha Completa',
    description: 'Do produto principal ao último acessório, encontre tudo o que precisa em um só lugar.',
  },
  {
    icon: ThumbsUp,
    number: '06',
    title: 'Custo-Benefício',
    description: 'Qualidade sem comprometer seu orçamento. Preços competitivos para projetos de todos os portes.',
  },
];

export default function Benefits() {
  return (
    <section id="vantagens" className="py-20 md:py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Benefícios
          </span>
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Por que escolher a<br />
            <span className="text-primary">Calhas Barigui?</span>
          </h2>
          <p className="text-dark-300 font-body text-base max-w-xl mx-auto leading-relaxed">
            Descubra as vantagens que fazem da Calhas Barigui a melhor escolha para seus projetos em Curitiba e região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={22} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-dark-600 font-heading font-bold text-xs tracking-widest">{item.number}</span>
                  <h3 className="font-heading font-bold text-white text-base mt-1 mb-2">{item.title}</h3>
                  <p className="text-dark-300 font-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
