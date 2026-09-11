import { Target, Lightbulb, Heart, Shield, Users, Leaf } from 'lucide-react';

const pillars = [
  {
    Icon: Target,
    title: 'Nossa Visão',
    text: 'Ser a principal referência em saúde e bem-estar por meio de produtos farmacêuticos personalizados, contribuindo para uma vida saudável e feliz.',
  },
  {
    Icon: Lightbulb,
    title: 'Nossa Missão',
    text: 'Proporcionar aos nossos clientes soluções farmacêuticas personalizadas com qualidade e inovação, visando o cuidado integral da saúde e a satisfação de suas necessidades individuais.',
  },
  {
    Icon: Heart,
    title: 'Nossos Valores',
    text: 'Comprometimento com a qualidade, ética profissional, inovação constante e responsabilidade social e ambiental.',
  },
];

const reasons = [
  {
    Icon: Shield,
    title: 'Qualidade Certificada',
    text: 'Produtos desenvolvidos com rigor técnico e qualidade comprovada.',
  },
  {
    Icon: Users,
    title: 'Profissionais Especializados',
    text: 'Equipe altamente qualificada para atender suas necessidades.',
  },
  {
    Icon: Leaf,
    title: 'Produtos Naturais',
    text: 'Especialistas em homeopatia e medicamentos orgânicos.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white via-[rgb(230,217,182)]/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,84,48)] mb-6">Nossos Diferenciais</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Há 38 anos, a Farmácia Galeno é sinônimo de confiança, qualidade e dedicação. Como a primeira farmácia de manipulação do Piauí, construímos nossa história cuidando da saúde e bem-estar de milhares de famílias.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(95,141,77)] transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[rgb(95,141,77)] to-[rgb(40,84,48)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(40,84,48)] mb-4">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(40,84,48)] to-[rgb(95,141,77)] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Por Que Escolher a Galeno?</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Somos mais do que uma farmácia. Somos parceiros na sua jornada de saúde e bem-estar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Icon size={40} className="text-[rgb(230,217,182)] mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                <p className="text-white/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
