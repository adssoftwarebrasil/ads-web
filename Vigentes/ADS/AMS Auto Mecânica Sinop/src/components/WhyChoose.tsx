import { Shield, Search, Wrench, DollarSign, Users, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    Icon: Shield,
    title: 'Confiança Comprovada',
    description:
      'Mais de 15 anos atendendo Sinop e região com honestidade, transparência e serviços que falam por si mesmos.',
  },
  {
    Icon: Search,
    title: 'Diagnóstico Preciso',
    description:
      'Usamos equipamentos modernos de scanner eletrônico para identificar qualquer falha com rapidez e assertividade.',
  },
  {
    Icon: Wrench,
    title: 'Equipe Especializada',
    description:
      'Mecânicos treinados e atualizados com as mais recentes tecnologias automotivas. Seu carro em boas mãos.',
  },
  {
    Icon: DollarSign,
    title: 'Melhor Custo-Benefício',
    description:
      'Orçamento claro e sem surpresas. Trabalhamos com peças de qualidade e preços justos para todo tipo de bolso.',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente recebe atenção individual. Explicamos o que será feito, por que e quanto vai custar antes de iniciar.',
  },
  {
    Icon: CheckCircle,
    title: 'Serviços com Garantia',
    description: 'Todos os serviços realizados contam com garantia. Sua tranquilidade é nossa responsabilidade.',
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(50, 44, 135) 0%, rgb(38, 33, 106) 100%)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            O que nos Torna a Melhor
            <br />
            Oficina de Sinop
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Não basta consertar, é preciso fazer certo. Conheça os diferenciais que nos tornaram referência em mecânica
            na região.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const { Icon } = reason;
            return (
              <div
                key={reason.title}
                className="reason-card group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-red/20 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
