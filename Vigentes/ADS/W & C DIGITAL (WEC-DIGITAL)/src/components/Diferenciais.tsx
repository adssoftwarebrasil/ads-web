import { CreditCard, Truck, Shield, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

const items: Diferencial[] = [
  { Icon: CreditCard, title: 'Parcelamento Flexível', desc: 'Até 15x no cartão', delay: 0 },
  {
    Icon: Truck,
    title: 'Entrega Rápida',
    desc: 'Compre em nossa loja física ou pelas nossas redes sociais e receba em sua casa com rapidez e segurança.',
    delay: 100,
  },
  { Icon: Shield, title: 'Garantia Total', desc: 'Produtos com nota fiscal', delay: 200 },
  { Icon: Headphones, title: 'Atendimento Humanizado', desc: 'Suporte especializado', delay: 300 },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-[rgb(248,248,248)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-[rgb(237,27,38)] animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 pulse">
                  <Icon size={48} className="text-[rgb(237,27,38)]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
