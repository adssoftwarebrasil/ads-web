import { Users, Award, Target } from 'lucide-react';

const cards = [
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-[#013413]',
    title: 'Equipe Multidisciplinar',
    text: 'Engenheiros ambientais, arquitetos, biólogos, geólogos e técnicos especializados, trabalhando de forma integrada para entregar as melhores soluções.',
    delay: '0s',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-[#013413]',
    title: 'Qualificação Técnica',
    text: 'Profissionais com formação acadêmica de excelência e constante atualização nas melhores práticas do mercado nacional e internacional.',
    delay: '0.15s',
  },
  {
    Icon: Target,
    iconClass: 'lucide lucide-target text-[#013413]',
    title: 'Abordagem Sustentável',
    text: 'Adotamos uma visão moderna e sustentável em cada projeto, equilibrando o desenvolvimento econômico com a preservação ambiental e o bem-estar social.',
    delay: '0.3s',
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f1e1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="animate-fade-up in-view text-center mb-14">
          <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest mb-3 block">Nossa Equipe</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413] mb-4">Nosso Time</h2>
          <p className="text-[#2d7a3a] text-lg max-w-2xl mx-auto">
            Contamos com uma equipe qualificada pronta para atender suas necessidades!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ Icon, iconClass, title, text, delay }) => (
            <div
              key={title}
              className="animate-fade-up in-view bg-white rounded-2xl p-8 shadow-sm border border-[#013413]/8 hover:shadow-md hover:border-[#013413]/20 transition-all duration-300"
              style={{ transitionDelay: delay }}
            >
              <div className="w-12 h-12 bg-[#013413]/8 rounded-xl flex items-center justify-center mb-5">
                <Icon width={22} height={22} className={iconClass} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#013413] mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
