import {
  ShieldCheck,
  PackageSearch,
  BadgeDollarSign,
  Clock3,
  Users,
  HeartHandshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Item = {
  Icon: LucideIcon;
  iconClass: string;
  number: string;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '01',
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com peças de procedência confirmada e marcas reconhecidas no mercado agrícola.',
  },
  {
    Icon: PackageSearch,
    iconClass: 'lucide lucide-package-search text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '02',
    title: 'Estoque Completo',
    text: 'Grande variedade de peças disponíveis para pronta entrega. Mancais, rolamentos, filtros, discos e muito mais.',
  },
  {
    Icon: BadgeDollarSign,
    iconClass: 'lucide lucide-badge-dollar-sign text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '03',
    title: 'Preço Competitivo',
    text: 'Condições especiais para compras no atacado. Negociamos para que você mantenha seu maquinário funcionando sem pesar no bolso.',
  },
  {
    Icon: Clock3,
    iconClass: 'lucide lucide-clock3 text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '04',
    title: 'Atendimento Rápido',
    text: 'Equipe preparada para identificar a peça certa com agilidade, minimizando o tempo parado do seu equipamento.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '05',
    title: 'Especialistas no Setor',
    text: 'Nossa equipe conhece profundamente os principais modelos de tratores e implementos, oferecendo orientação técnica precisa.',
  },
  {
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-[#0131AC] group-hover:text-[#FCE500] transition-colors duration-300',
    number: '06',
    title: 'Confiança e Tradição',
    text: 'Mais de 25 anos servindo o agronegócio roraimense. Clientes que voltam e indicam nos dizem tudo sobre nossa reputação.',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#0131AC] font-semibold text-sm uppercase tracking-widest mb-3">
            Por que escolher a Dinapel?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Muito além de uma loja de peças – somos parceiros do produtor rural roraimense.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, iconClass, number, title, text }) => (
            <div
              key={number}
              className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#E6ECFA] group-hover:bg-[#0131AC] transition-colors duration-300 flex items-center justify-center">
                  <Icon size={20} className={iconClass} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#CC9C00] mb-1">{number}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
