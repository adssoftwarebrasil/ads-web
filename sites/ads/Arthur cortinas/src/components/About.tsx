import { Award, Sparkles, Users, Clock, LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Atendimento Personalizado',
    description: 'Assessoria completa, auxiliamos do projeto à execução.',
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    title: 'Alta Qualidade',
    description: 'Utilizamos materiais de alta qualidade e durabilidade.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Grande Variedade',
    description: 'Oferecemos diversas opções de produtos e estilos.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Entrega Rápida',
    description: 'Prazo de entrega ágil sem comprometer a qualidade.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre a Arthur Cortinas</h2>
            <div className="w-24 h-1 bg-[rgb(218,165,33)] mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Arthur Cortinas é uma empresa dedicada a oferecer soluções em decoração de interiores com cortinas,
              persianas e toldos sob medida. Atuamos em Sinop/MT com um compromisso de qualidade e satisfação para
              nossos clientes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Com mais de 5 anos de atuação no mercado, nos consolidamos como referência em decoração de interiores na
              região norte mato-grossense.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-[rgb(218,165,33)] mb-1">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div>
                <div className="text-4xl font-bold text-[rgb(218,165,33)] mb-1">1000+</div>
                <div className="text-sm text-gray-600">Projetos Realizados</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div>
                <div className="text-4xl font-bold text-[rgb(218,165,33)] mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F3.jpg"
                alt="Sobre Arthur Cortinas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(218,165,33)] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="font-semibold text-lg">Transformando ambientes com elegância e qualidade</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h3>
          <div className="w-24 h-1 bg-[rgb(218,165,33)] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(218,165,33)] to-[rgb(198,145,13)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className={`${item.iconClass} w-8 h-8 text-white`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
