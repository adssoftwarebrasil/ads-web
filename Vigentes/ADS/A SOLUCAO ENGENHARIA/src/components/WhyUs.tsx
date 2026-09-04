import {
  BadgeCheck,
  Clock,
  Headphones,
  ShieldCheck,
  Star,
  Wrench,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Conformidade Total',
    description:
      'Todos os nossos projetos e instalações seguem rigorosamente as normas ABNT e as exigências do Corpo de Bombeiros Militar de Sergipe.',
  },
  {
    icon: Wrench,
    title: 'Equipe Técnica Especializada',
    description:
      'Profissionais treinados e certificados com ampla experiência em sistemas de prevenção de incêndio para todo tipo de edificação.',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description:
      'Respondemos rapidamente às solicitações dos nossos clientes, com agilidade na elaboração de orçamentos e execução dos serviços.',
  },
  {
    icon: Star,
    title: 'Produtos Premium',
    description:
      'Trabalhamos apenas com fabricantes homologados e equipamentos de qualidade superior, garantindo durabilidade e eficiência.',
  },
  {
    icon: BadgeCheck,
    title: 'Solução Completa',
    description:
      'Da venda de equipamentos ao projeto, consultoria, instalação e regularização — somos seu parceiro completo em segurança.',
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description:
      'Oferecemos manutenção preventiva, recarga de extintores e suporte técnico para manter seu sistema sempre operante.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-block bg-[#92AA40]/10 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Por que nos escolher
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#090B4A] leading-tight mb-6">
              Referência em Segurança{' '}
              <span className="text-[#92AA40]">Contra Incêndios</span> em Sergipe
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Com mais de 15 anos de experiência, a A Solução Engenharia se
              consolidou como a empresa mais completa em prevenção contra
              incêndio e pânico no estado de Sergipe. Nosso compromisso vai além
              da venda — entregamos segurança real.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-[#92AA40]/10 group-hover:bg-[#92AA40]/20 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5">
                    <reason.icon size={18} className="text-[#92AA40]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#090B4A] text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/fachada.webp"
                alt="Fachada A Solução Engenharia"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#92AA40]/15 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#090B4A]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
