import {
  Sprout,
  Bug,
  DollarSign,
  Package,
  CloudRain,
  Wrench,
  BarChart3,
  Layers,
  ShoppingCart,
  TrendingUp,
  FileText,
  Banknote,
  RefreshCw,
  Building2,
  Users,
  CreditCard,
  ArrowLeftRight,
  FileInput,
  BookOpen,
  Wifi,
  Scale,
  Truck,
  Archive,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  label: string;
}

const features: Feature[] = [
  { icon: Sprout, label: 'Tratos Culturais' },
  { icon: Bug, label: 'Monitoramento de Pragas' },
  { icon: DollarSign, label: 'Custos (ha, talhão e fazenda)' },
  { icon: Package, label: 'Estoque de Insumos' },
  { icon: CloudRain, label: 'Monitoramento Pluviométrico' },
  { icon: Wrench, label: 'Máquinas e Equipamentos' },
  { icon: BarChart3, label: 'Produtividade' },
  { icon: Layers, label: 'Variedades' },
  { icon: ShoppingCart, label: 'Controle de Pedidos' },
  { icon: TrendingUp, label: 'Fluxo de Caixa' },
  { icon: FileText, label: 'NF-e / MDF-e Produtor Rural' },
  { icon: Banknote, label: 'Lançamentos Financeiros' },
  { icon: RefreshCw, label: 'Conciliação Bancária' },
  { icon: Building2, label: 'Gestão de Silos e Armazéns' },
  { icon: Users, label: 'Recursos Humanos' },
  { icon: CreditCard, label: 'Financiamentos' },
  { icon: ArrowLeftRight, label: 'Gestão de Negociações (Barter)' },
  { icon: FileInput, label: 'Importação de Notas de Compra' },
  { icon: BookOpen, label: 'LCDPR' },
  { icon: Wifi, label: 'Trabalho Off-line no App' },
  { icon: Scale, label: 'Conexão por Balança' },
  { icon: Truck, label: 'Transportador e Fretistas' },
  { icon: Archive, label: 'Controle de Estoques' },
  { icon: Package, label: 'Gestão de Produtos de Terceiros' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-plantae-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-plantae-blue font-black text-sm tracking-widest uppercase mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-plantae-dark leading-tight mb-4">
            MAIS DE <span className="text-plantae-blue">1.200.000 HECTARES</span>
            <br />
            GERIDOS COM EFICÁCIA
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tudo que você precisa para uma gestão rural completa em um único sistema.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="group bg-white rounded-2xl p-4 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default opacity-100 scale-100"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-plantae-blue/10 group-hover:bg-plantae-blue/20 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <Icon width={20} height={20} className="text-plantae-blue" />
                </div>
                <span className="text-xs font-bold text-gray-700 leading-tight">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
