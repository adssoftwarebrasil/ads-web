import { Calculator, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Calculator,
    iconClass: 'lucide-calculator',
    title: 'Contabilidade',
    description:
      'Serviços contábeis completos para manter seu negócio em dia com todas as obrigações fiscais e tributárias.',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide-trending-up',
    title: 'Consultoria Empresarial',
    description:
      'Orientação estratégica para o crescimento sustentável do seu negócio no Distrito Federal.',
  },
  {
    Icon: Building2,
    iconClass: 'lucide-building2',
    title: 'Assessoria Societária',
    description:
      'Orientações para dirimir dúvidas em sociedades e suporte completo para constituição e alteração de empresas.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções contábeis completas para impulsionar seu negócio no Distrito Federal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ Icon, iconClass, title, description }) => (
            <div key={title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
                <Icon className={`lucide ${iconClass}`} width={32} height={32} style={{ color: 'rgb(192, 160, 98)' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
              <button className="inline-flex items-center font-semibold hover:underline" style={{ color: 'rgb(192, 160, 98)' }}>
                Saiba Mais
                <ArrowRight className="lucide lucide-arrow-right ml-2" width={18} height={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
