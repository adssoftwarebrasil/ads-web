import { Phone, Wrench, MonitorSmartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Step {
  icon: LucideIcon;
  iconCls: string;
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    icon: Phone,
    iconCls: 'lucide lucide-phone',
    num: '1',
    title: 'Entre em Contato',
    desc: 'Fale com nossa equipe via WhatsApp ou telefone. Apresentamos os planos e tiramos todas as suas dúvidas sem compromisso.',
  },
  {
    icon: Wrench,
    iconCls: 'lucide lucide-wrench',
    num: '2',
    title: 'Instalação Profissional',
    desc: 'Nossa equipe técnica instala o rastreador no seu veículo de forma rápida, discreta e sem interferir nos sistemas elétricos.',
  },
  {
    icon: MonitorSmartphone,
    iconCls: 'lucide lucide-monitor-smartphone',
    num: '3',
    title: 'Ative o Monitoramento',
    desc: 'Acesse o aplicativo e acompanhe seu veículo em tempo real. Receba alertas e notificações diretamente no seu celular.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(5, 31, 52)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: 'rgba(70, 96, 117, 0.4)',
              color: 'rgb(203, 219, 233)',
              border: '1px solid rgba(112, 136, 160, 0.3)',
            }}
          >
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Proteção em <span style={{ color: 'rgb(203, 219, 233)' }}>3 Passos Simples</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(112, 136, 160)' }}>
            Do primeiro contato à proteção ativa, todo o processo é rápido, simples e sem burocracia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="intersection-animate relative" style={{ transitionDelay: `${i * 120}ms` }}>
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-[calc(50%+3rem)] right-[-calc(50%-3rem)] h-px"
                    style={{ width: 'calc(100% - 6rem)', backgroundColor: 'rgba(112, 136, 160, 0.3)', zIndex: 0 }}
                  ></div>
                )}
                <div
                  className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl h-full"
                  style={{ backgroundColor: 'rgba(27, 53, 74, 0.6)', border: '1px solid rgba(70, 96, 117, 0.4)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative shrink-0"
                    style={{ backgroundColor: 'rgb(70, 96, 117)' }}
                  >
                    <span style={{ color: 'rgb(203, 219, 233)' }}>
                      <Icon className={s.iconCls} width={28} height={28} />
                    </span>
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                      style={{ backgroundColor: 'rgb(203, 219, 233)', color: 'rgb(5, 31, 52)' }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgb(112, 136, 160)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-14 intersection-animate">
          <a
            href="http://wa.me/556592264219?text=Olá!%20Quero%20instalar%20um%20rastreador%20no%20meu%20veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 24px' }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Quero Instalar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
