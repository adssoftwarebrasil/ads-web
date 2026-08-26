import { ShieldCheck, Zap, Handshake, MapPin, Clock, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-brand-yellow',
    title: 'Confiança e Transparência',
    description: 'Trabalhamos com honestidade em cada etapa do processo. Você sabe exatamente o que está sendo feito com seus documentos.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-brand-yellow',
    title: 'Agilidade no Atendimento',
    description: 'Resolvemos suas pendências no menor tempo possível, sem enrolação. Seu tempo é precioso e a gente sabe disso.',
  },
  {
    icon: Handshake,
    iconClass: 'lucide lucide-handshake text-brand-yellow',
    title: 'Atendimento Humanizado',
    description: 'Cada cliente é tratado com atenção e cuidado. Explicamos todo o processo de forma clara e acessível.',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-brand-yellow',
    title: 'Atendimento Regional',
    description: 'Atendemos Primavera do Leste, Campo Verde, Rondonópolis, Poxoréu, Paranatinga e toda a região.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-brand-yellow',
    title: 'Horários Convenientes',
    description: 'Funcionamos de segunda a sexta das 7h às 11h e das 13h às 17h para melhor atender sua rotina.',
  },
  {
    icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up text-brand-yellow',
    title: 'Experiência Comprovada',
    description: 'Com passagem pela CIRETRAN e mais de 9 anos de atuação, Helena conhece cada detalhe da documentação veicular.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Diferenciais que fazem
            <br />
            <span className="text-brand-yellow">toda a diferença</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto text-lg">Mais do que resolver documentos, entregamos tranquilidade e segurança para você.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex gap-5 p-6 bg-brand-dark-card border border-brand-dark-border rounded-2xl hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors duration-300">
                  <Icon width={22} height={22} className={item.iconClass} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
