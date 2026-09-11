import { Headphones, DollarSign, Truck, CheckCircle, Handshake, Star, type LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  name: string;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    icon: Headphones,
    name: 'headphones',
    title: 'Atendimento Personalizado',
    text: 'Cada cliente recebe atenção individual. Nossa equipe entende sua necessidade e oferece a solução certa para o seu negócio.',
  },
  {
    icon: DollarSign,
    name: 'dollar-sign',
    title: 'Preços Justos',
    text: 'Praticamos preços competitivos sem abrir mão da qualidade. Transparência total do orçamento à entrega.',
  },
  {
    icon: Truck,
    name: 'truck',
    title: 'Entrega no Prazo',
    text: 'Estoque permanente e logística eficiente para garantir que seus produtos cheguem quando você precisa.',
  },
  {
    icon: CheckCircle,
    name: 'check-circle',
    title: 'Comprometimento',
    text: 'Assumimos cada pedido com seriedade e responsabilidade. Sua satisfação é o nosso maior resultado.',
  },
  {
    icon: Handshake,
    name: 'handshake',
    title: 'Parceria de Longo Prazo',
    text: 'Construímos relações duradouras com nossos clientes. Queremos crescer junto com o seu negócio.',
  },
  {
    icon: Star,
    name: 'star',
    title: 'Produtos de Qualidade',
    text: 'Trabalhamos com mais de 35 fornecedores parceiros e mais de 6.000 produtos para garantir o melhor para você.',
  },
];

const stats = [
  { value: '+15', label: 'Anos de Experiência' },
  { value: '+6.000', label: 'Produtos em Estoque' },
  { value: '+1.000', label: 'Clientes Atendidos' },
  { value: '+35', label: 'Parceiros Fornecedores' },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(16,109,71)] font-semibold text-sm uppercase tracking-widest mb-3">
            Por Que nos Escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Vantagens de ser <span className="text-[rgb(16,109,71)]">cliente EPISOLDA</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nosso objetivo é atender bem, fornecendo soluções completas com comprometimento e responsabilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-green-50 border border-transparent hover:border-[rgb(16,109,71)]/20 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[rgb(16,109,71)]/10 flex items-center justify-center mt-0.5">
                  <Icon className={`lucide lucide-${a.name} text-[rgb(16,109,71)]`} width={20} height={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[rgb(16,109,71)] rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-green-200 text-sm font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
