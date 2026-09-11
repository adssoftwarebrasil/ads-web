import { Target, Users, Briefcase, TrendingUp, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Target,
    iconClass: 'lucide-target',
    title: 'Atendimento Estratégico',
    description:
      'Cada caso recebe análise personalizada com soluções sob medida para seu negócio ou propriedade rural.',
  },
  {
    icon: Users,
    iconClass: 'lucide-users',
    title: 'Foco em Resultados',
    description:
      'Atuação técnica e transparente voltada para resolver seus problemas de forma eficiente e definitiva.',
  },
  {
    icon: Briefcase,
    iconClass: 'lucide-briefcase',
    title: 'Especialização',
    description:
      'Equipe especializada em Direito Ambiental, Tributário e Empresarial com atuação em todo Goiás.',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide-trending-up',
    title: 'Consultoria Preventiva',
    description:
      'Além da defesa, oferecemos consultoria para prevenir problemas e garantir a regularidade do seu negócio.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[rgb(249,253,249)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-[rgb(146,118,47)] font-semibold text-sm tracking-wide uppercase">
                Sobre Nós
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(3,74,41)] mt-2 leading-tight">
                Advocacia Técnica e Transparente para Quem Busca Segurança Jurídica
              </h2>
            </div>
            <div className="space-y-4 text-[rgb(8,16,20)]/80 text-lg leading-relaxed">
              <p>
                A{' '}
                <strong className="text-[rgb(3,74,41)]">
                  MP Assessoria Jurídica Especializada
                </strong>{' '}
                é um escritório de advocacia localizado em Uruaçu/GO, atuando nas áreas de Direito
                Ambiental, Direito Tributário e Assessoria Jurídica Empresarial.
              </p>
              <p>
                <strong className="text-[rgb(3,74,41)]">Fundado em 2023</strong>, o escritório presta
                atendimento estratégico a empresários, produtores rurais e empresas que buscam
                segurança jurídica, regularização e soluções eficientes para seus negócios.
              </p>
              <p>
                Atuamos com defesa em autos de infração ambiental, regularização ambiental rural,
                licenciamento ambiental, recuperação de créditos tributários e consultoria jurídica
                preventiva, sempre com atendimento personalizado e foco em resultados concretos.
              </p>
              <p>
                Atendemos{' '}
                <strong className="text-[rgb(3,74,41)]">
                  Uruaçu, a região Norte de Goiás e todo o estado
                </strong>
                , oferecendo uma advocacia técnica, transparente e voltada à solução dos problemas
                do cliente.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="http://wa.me/556281931078"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[rgb(3,74,41)] text-[rgb(249,253,249)] px-8 py-4 rounded-lg hover:bg-[rgb(46,81,35)] transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
              >
                <span>Agende uma Consulta</span>
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[rgb(153,138,71)] hover:scale-105"
                >
                  <div className="bg-[rgb(3,74,41)]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      className={`lucide ${feature.iconClass} w-7 h-7 text-[rgb(3,74,41)]`}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-[rgb(3,74,41)] mb-2">{feature.title}</h3>
                  <p className="text-[rgb(8,16,20)]/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
