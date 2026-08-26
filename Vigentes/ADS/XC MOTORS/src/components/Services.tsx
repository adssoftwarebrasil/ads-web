import { Car, RefreshCw, CreditCard, FileText, Truck, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  highlight: boolean;
}

const services: Service[] = [
  {
    icon: Car,
    iconClass: 'lucide lucide-car text-[#f8c102]',
    title: 'Compra de Veículos',
    description:
      'Estoque variado de carros, SUVs, caminhonetes e utilitários com qualidade verificada e garantia de procedência.',
    highlight: false,
  },
  {
    icon: RefreshCw,
    iconClass: 'lucide lucide-refresh-cw text-[#0c0c0c]',
    title: 'Troca de Veículos',
    description:
      'Avaliamos seu veículo na hora e aplicamos o valor como entrada no seu próximo carro. Simples, rápido e justo.',
    highlight: true,
  },
  {
    icon: CreditCard,
    iconClass: 'lucide lucide-credit-card text-[#f8c102]',
    title: 'Financiamento Facilitado',
    description:
      'Parceiros com os principais bancos para garantir a melhor taxa e aprovação mesmo para quem tem restrição.',
    highlight: false,
  },
  {
    icon: FileText,
    iconClass: 'lucide lucide-file-text text-[#f8c102]',
    title: 'Documentação Completa',
    description:
      'Cuidamos de toda a burocracia: transferência, licenciamento e regularização para você não ter dor de cabeça.',
    highlight: false,
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-[#f8c102]',
    title: 'Translado e Logística',
    description:
      'Comprando de outra cidade? Providenciamos o translado até Várzea Grande com toda a comodidade que você merece.',
    highlight: false,
  },
  {
    icon: Headphones,
    iconClass: 'lucide lucide-headphones text-[#f8c102]',
    title: 'Atendimento Online',
    description:
      'Compre por telefone ou WhatsApp com suporte dedicado do primeiro contato até a entrega das chaves.',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">O que oferecemos</span>
            <div className="h-px w-8 bg-[#f8c102]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] mb-4">Serviços Completos</h2>
          <p className="text-[#fefefe]/50 text-lg max-w-xl mx-auto">
            Da pesquisa à entrega, cuidamos de tudo para que sua experiência seja inesquecível.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  s.highlight
                    ? 'bg-[#f8c102] border-transparent'
                    : 'bg-[#1a1a1a] border-white/5 hover:border-[#f8c102]/20'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    s.highlight ? 'bg-[#0c0c0c]/15' : 'bg-[#f8c102]/10'
                  }`}
                >
                  <Icon className={s.iconClass} width={24} height={24} />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${s.highlight ? 'text-[#0c0c0c]' : 'text-[#fefefe]'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed ${s.highlight ? 'text-[#0c0c0c]/70' : 'text-[#fefefe]/50'}`}>
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
