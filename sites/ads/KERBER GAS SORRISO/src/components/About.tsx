import { MapPin, Target, Award, Shield, Heart, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Agilidade Imbativel',
    description: 'O gas nao escolhe hora para acabar. Nossa equipe chega ate voce no menor tempo possivel.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Seguranca Garantida',
    description: 'Botijoes rigorosamente inspecionados e certificados para tranquilidade do seu lar ou negocio.',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Atendimento Humanizado',
    description: 'Voce nao e apenas um numero de pedido. Valorizamos o contato direto e a satisfacao de cada cliente.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Mix de Produtos',
    description: 'Gas P13, P20, P45 e agua mineral das melhores fontes para sua casa e seu negocio.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block text-[rgb(248,130,31)] font-semibold text-sm tracking-widest uppercase mb-3">
                Sobre nos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Kerber Gas Sorriso:
                <br />
                <span className="text-[rgb(248,130,31)]">"Energia e Confianca"</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Quando o assunto e a chama que prepara o alimento da sua familia ou a agua pura que hidrata o seu dia, a
                Kerber Gas e a sua parceira de confianca em Sorriso.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Localizada na Rua Lajeado no 210, Setor Industrial II, estrategicamente para atender toda a Capital do
                Agronegocio, nossa empresa nasceu com o compromisso de entregar mais do que apenas produtos: entregamos
                seguranca e pontualidade.
              </p>
              <div className="flex items-center space-x-4 mb-8 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rua Lajeado, 210 - Setor Industrial II</p>
                  <p className="text-sm text-gray-500">Sorriso - MT | Capital do Agronegocio</p>
                </div>
              </div>
              <div className="p-5 bg-gray-900 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="lucide lucide-target w-5 h-5 text-[rgb(248,130,31)]" />
                  <h4 className="font-bold text-white">Nossa Missao</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ser a primeira escolha do morador de Sorriso quando ele pensa em gas e agua, mantendo um padrao de
                  excelencia que respeita o orcamento das familias e a dinamica das empresas locais.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">O que nos diferencia?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {differentials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group p-5 rounded-2xl border border-gray-100 hover:border-[rgb(248,130,31)]/30 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-white transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`${item.iconClass} w-6 h-6 text-white`} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
