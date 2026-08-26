import { Award, Shield, CheckCircle, Users, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-pr-dark',
    text: 'Fundada em 2010 — mais de 15 anos de experiência comprovada',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield text-pr-dark',
    text: 'Aprovação junto à SUVISA e Corpo de Bombeiros',
  },
  {
    icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-pr-dark',
    text: 'Soluções completas: do projeto à entrega da obra',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-pr-dark',
    text: 'Atendimento próximo, transparente e humanizado',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-pr-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Projeto residencial"
                className="w-full h-72 object-cover col-span-2"
              />
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Equipe técnica"
                className="w-full h-52 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Projeto arquitetônico"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-pr-dark text-white p-5 w-44 shadow-xl">
              <p className="font-serif text-4xl font-semibold text-pr-rose leading-none">15+</p>
              <p className="text-pr-taupe text-xs mt-1 leading-snug">
                Anos transformando sonhos em empreendimentos sólidos
              </p>
            </div>
          </div>
          <div className="lg:pl-4">
            <div className="divider-line"></div>
            <h2 className="section-heading mb-6">Uma empresa de referência no norte goiano</h2>
            <p className="text-pr-grey leading-relaxed mb-5">
              Fundada em 2010, a PR Engenharia e Arquitetura consolidou-se como empresa de referência no setor da
              construção civil, destacando-se pela excelência técnica, credibilidade e compromisso com resultados. Com
              sede em Campinorte – GO, atua com forte presença regional em todo o norte goiano.
            </p>
            <p className="text-pr-grey leading-relaxed mb-8">
              Estruturada com o propósito de oferecer soluções completas e integradas — reunindo engenharia, arquitetura
              e gestão de obras em um único lugar — a empresa permite atender clientes com eficiência, segurança e alto
              padrão de qualidade em todas as etapas do empreendimento.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-pr-rose flex items-center justify-center flex-shrink-0">
                      <Icon width={14} height={14} strokeWidth={2} className={feature.iconClass} />
                    </div>
                    <span className="text-pr-dark text-sm leading-relaxed">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contato" className="btn-primary">
                Entre em Contato
              </a>
              <a
                href="https://www.instagram.com/pr_projetos/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
