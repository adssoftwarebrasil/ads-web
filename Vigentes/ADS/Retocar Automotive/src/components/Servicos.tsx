import {
  Wrench,
  PaintBucket,
  Zap,
  Wind,
  RotateCcw,
  KeyRound,
  Cpu,
  Settings2,
  Package,
  Car,
  type LucideIcon,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

interface Servico {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-[#DB151F]',
    title: 'Mecânica Geral',
    desc: 'Revisão completa, troca de óleo, filtros, freios, suspensão e muito mais.',
  },
  {
    icon: PaintBucket,
    iconClass: 'lucide lucide-paint-bucket text-[#DB151F]',
    title: 'Lanternagem e Pintura',
    desc: 'Funilaria e pintura automotiva com acabamento profissional e qualidade premium.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-[#DB151F]',
    title: 'Elétrica Automotiva',
    desc: 'Diagnóstico e reparo elétrico, instalação de equipamentos e sistemas.',
  },
  {
    icon: Wind,
    iconClass: 'lucide lucide-wind text-[#DB151F]',
    title: 'Ar Condicionado',
    desc: 'Manutenção, limpeza e recarga de ar condicionado automotivo.',
  },
  {
    icon: RotateCcw,
    iconClass: 'lucide lucide-rotate-ccw text-[#DB151F]',
    title: 'Alinhamento e Balanceamento',
    desc: 'Equipamentos modernos para garantir segurança e economia nos pneus.',
  },
  {
    icon: KeyRound,
    iconClass: 'lucide lucide-key-round text-[#DB151F]',
    title: 'Chaveiro Automotivo',
    desc: 'Cópia de chaves, abertura de veículos e programação de telecomandos.',
  },
  {
    icon: Cpu,
    iconClass: 'lucide lucide-cpu text-[#DB151F]',
    title: 'Injeção Eletrônica',
    desc: 'Diagnóstico eletrônico avançado e manutenção do sistema de injeção.',
  },
  {
    icon: Settings2,
    iconClass: 'lucide lucide-settings2 text-[#DB151F]',
    title: 'Módulos',
    desc: 'Reparo, programação e substituição de módulos eletrônicos veiculares.',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package text-[#DB151F]',
    title: 'Peças em Geral',
    desc: 'Grande variedade de peças originais e de qualidade para todas as marcas.',
  },
  {
    icon: Car,
    iconClass: 'lucide lucide-car text-[#DB151F]',
    title: 'Locação de Veículos',
    desc: 'Frota revisada disponível para locação com total segurança e praticidade.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#DB151F] text-xs font-bold tracking-widest uppercase mb-4">
            O Que Oferecemos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Serviços Especializados</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções automotivas completas em um único lugar. Equipe qualificada, estrutura moderna e
            atendimento personalizado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.title}
                className="group bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-[#DB151F]/40 hover:bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/10"
              >
                <div className="w-12 h-12 bg-[#DB151F]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#DB151F]/20 transition-colors duration-300">
                  <Icon className={servico.iconClass} width={22} height={22} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{servico.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{servico.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#DB151F] hover:bg-[#b8101a] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
