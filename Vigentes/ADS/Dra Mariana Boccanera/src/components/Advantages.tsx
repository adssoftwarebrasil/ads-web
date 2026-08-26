import { HeartHandshake, ShieldCheck, Clock, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  iconClass: string;
  iconGradient: string;
  numberGradient: string;
  number: string;
  title: string;
  description: string;
  delay: number;
}

const advantages: Advantage[] = [
  {
    icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake ',
    iconGradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)] shadow-[rgb(251,203,185)]/30',
    numberGradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)]',
    number: '01',
    title: 'Atendimento Personalizado e Humanizado',
    description:
      'Planos de cuidado adequados a cada criança, respeitando sua individualidade e história.',
    delay: 0,
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check ',
    iconGradient: 'from-[rgb(235,208,217)] to-[rgb(215,188,197)] shadow-[rgb(235,208,217)]/30',
    numberGradient: 'from-[rgb(235,208,217)] to-[rgb(215,188,197)]',
    number: '02',
    title: 'Ambiente Seguro e Acolhedor',
    description:
      'Um espaço pensado com carinho para o conforto e proteção dos pequenos pacientes e suas famílias.',
    delay: 150,
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock ',
    iconGradient: 'from-[rgb(218,185,165)] to-[rgb(198,165,145)] shadow-[rgb(218,185,165)]/30',
    numberGradient: 'from-[rgb(218,185,165)] to-[rgb(198,165,145)]',
    number: '03',
    title: 'Tempo de Consulta Dedicado',
    description:
      'Consultas sem pressa, com o tempo necessário para tirar todas as dúvidas da família.',
    delay: 300,
  },
  {
    icon: GraduationCap,
    iconClass: 'lucide lucide-graduation-cap ',
    iconGradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)] shadow-[rgb(251,203,185)]/30',
    numberGradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)]',
    number: '04',
    title: 'Especialista em Desenvolvimento',
    description:
      'Pediatra com pós-graduação e foco no desenvolvimento físico, emocional e cognitivo.',
    delay: 450,
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="relative py-24 bg-gradient-to-b from-white to-[rgb(251,203,185)]/10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-[-100px] w-96 h-96 bg-[rgb(218,185,165)]/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
              <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
              Diferenciais
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Por Que Escolher a<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
                Dra. Mariana?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Descubra os diferenciais de um atendimento feito com amor, excelência e dedicação total
              ao seu filho.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.number}
                  className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(218,185,165)]/30 animate-fade-in-side overflow-hidden"
                  style={{ animationDelay: `${adv.delay}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.iconGradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-4 sm:mb-0`}
                    >
                      <Icon
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        className={adv.iconClass}
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${adv.numberGradient} opacity-30 select-none`}
                        >
                          {adv.number}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-[rgb(218,185,165)] transition-colors break-words">
                          {adv.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light">{adv.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
