import { CheckCircle, TrendingUp, Users, Award, type LucideIcon } from 'lucide-react';
import { StarIcon } from './icons';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-brand-orange',
    title: 'Transparência Total',
    description: 'Orçamento detalhado e sem surpresas. Você sabe exatamente o que está contratando.',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-brand-orange',
    title: 'Inovação Constante',
    description: 'Acompanhamos as tendências globais em sistemas construtivos modernos e sustentáveis.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-brand-orange',
    title: 'Equipe Especializada',
    description: 'Profissionais treinados e experientes, comprometidos com a qualidade em cada obra.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-brand-orange',
    title: 'Credibilidade no Mercado',
    description: 'Uma década construindo a confiança de clientes em Sorriso e toda a região.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 relative" data-reveal>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sorrimac/img/sala-reuniao-mesa-computadores-plantas-sorrimac_680x453.webp"
                alt="Equipe Sorrimac"
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange rounded-2xl p-6 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-4xl font-extrabold">10+</div>
                  <div className="text-white/90 text-sm font-medium mt-1">
                    Anos de<br />Mercado
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-brand-dark rounded-2xl p-4 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-extrabold text-brand-orange">5.0</div>
                  <div className="flex justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3 text-brand-orange fill-current" />
                    ))}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">Google</div>
                </div>
              </div>
            </div>
            <div className="mt-10 relative h-56 hidden md:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sorrimac/img/fachada-predio-sorrimac-construcao-seco_680x382.webp"
                alt="Obra Sorrimac"
                className="w-full h-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="opacity-0" data-reveal>
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full mb-4">
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Nossa História</span>
            </div>
            <h2 className="section-title mb-6">
              Uma Década Construindo <span className="text-brand-orange">Confiança</span>
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              A Sorrimac Montagens e Acabamentos não é feita apenas de estruturas de aço e placas de drywall — ela é construída sobre relacionamentos sólidos e um compromisso inabalável com a verdade.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              Tudo começou há mais de 10 anos, fruto da visão do sócio Fernando. Desde o primeiro dia, o objetivo era claro:{' '}
              <strong className="text-brand-dark">transformar o setor de construção a seco em Sorriso e região</strong>, oferecendo não apenas mão de obra, mas segurança para quem constrói o sonho da casa própria ou do próprio negócio.
            </p>
            <p className="text-brand-gray leading-relaxed mb-8">
              Ao longo dessa década, evoluímos com a tecnologia, especializando-nos em sistemas construtivos modernos, rápidos e sustentáveis. Mas nossa essência permanece a mesma: atender cada cliente com a atenção e o respeito que ele merece.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 p-4 rounded-xl bg-brand-gray-light hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 mt-0.5">
                    <f.icon className={f.iconClass} width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm mb-1">{f.title}</h4>
                    <p className="text-brand-gray text-xs leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-4 border-brand-orange pl-4 italic text-brand-gray">
              "Qualidade que você vê, confiança que você sente."
              <footer className="mt-2 text-sm font-semibold text-brand-dark not-italic">— Sorrimac</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
