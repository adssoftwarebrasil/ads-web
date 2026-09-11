import { Tractor, Car, Factory, HardHat, Shield, Settings, Droplets, Gem } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Produto {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  desc: string;
}

const produtos: Produto[] = [
  {
    Icon: Tractor,
    iconName: 'tractor',
    title: 'Rolamentos Agrícolas',
    desc: 'Rolamentos de alta performance para máquinas e implementos agrícolas, garantindo durabilidade no campo.',
  },
  {
    Icon: Car,
    iconName: 'car',
    title: 'Rolamentos Automotivos',
    desc: 'Linha completa para veículos leves e pesados, com marcas líderes do mercado.',
  },
  {
    Icon: Factory,
    iconName: 'factory',
    title: 'Rolamentos Industriais',
    desc: 'Soluções para maquinários industriais, esteiras, mineração e garimpo.',
  },
  {
    Icon: HardHat,
    iconName: 'hard-hat',
    title: 'Linha Amarela',
    desc: 'Rolamentos específicos para tratores, escavadeiras e equipamentos de construção pesada.',
  },
  {
    Icon: Shield,
    iconName: 'shield',
    title: 'Retentores',
    desc: 'Retentores das marcas SABO, ARCA, SAV e APC para vedação confiável em qualquer aplicação.',
  },
  {
    Icon: Settings,
    iconName: 'settings',
    title: 'Cruzetas, Buchas e Mancais',
    desc: 'Componentes de transmissão e fixação para toda linha automotiva e industrial.',
  },
  {
    Icon: Droplets,
    iconName: 'droplets',
    title: 'Rótulas e Graxa',
    desc: 'Rótulas para direção e suspensão, além de graxas especiais e químicos para conservação.',
  },
  {
    Icon: Gem,
    iconName: 'gem',
    title: 'Garimpo e Esteira',
    desc: 'Rolamentos especiais para máquinas de garimpo e equipamentos de esteira.',
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EC3132]/10 text-[#EC3132] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Soluções Completas em <span className="text-[#2B559F]">Rolamentos</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Atendemos todas as necessidades — do campo à indústria, do veículo leve ao equipamento
            pesado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map(({ Icon, iconName, title, desc }) => (
            <div
              key={title}
              className="group bg-gray-50 hover:bg-[#2B559F] border border-gray-100 hover:border-[#2B559F] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#2B559F]/20 hover:-translate-y-1 cursor-default"
            >
              <div className="w-14 h-14 bg-[#EC3132]/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-[#EC3132] group-hover:text-white mb-5 transition-all duration-300">
                <Icon width={28} height={28} className={`lucide lucide-${iconName}`} />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
