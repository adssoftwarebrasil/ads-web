import { Phone, Search, FileText, Cog, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  Icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
  highlight: string;
}

const steps: Step[] = [
  {
    Icon: Phone,
    number: '1',
    title: 'CONTATO INICIAL',
    desc: 'Entre em contato por WhatsApp ou telefone',
    highlight: '(61) 3488-6060',
  },
  {
    Icon: Search,
    number: '2',
    title: 'ANÁLISE',
    desc: 'Analisamos suas necessidades e especificações',
    highlight: 'Consultoria técnica',
  },
  {
    Icon: FileText,
    number: '3',
    title: 'ORÇAMENTO',
    desc: 'Enviamos proposta detalhada em até 24h',
    highlight: 'Sem compromisso',
  },
  {
    Icon: Cog,
    number: '4',
    title: 'PRODUÇÃO',
    desc: 'Fabricação com tecnologia de ponta',
    highlight: 'Qualidade garantida',
  },
  {
    Icon: Truck,
    number: '5',
    title: 'ENTREGA',
    desc: 'Entregamos no prazo combinado',
    highlight: 'Pontualidade',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            COMO FUNCIONA?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Do contato à entrega: simples e profissional
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-black transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 relative">
            {steps.map(({ Icon, number, title, desc, highlight }, i) => (
              <div key={number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[rgb(139,0,2)] flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-4 shadow-xl relative z-10 transform hover:scale-110 transition-all">
                    {number}
                  </div>
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div className="text-[rgb(139,0,2)] mb-3 flex justify-center">
                      <Icon width={40} height={40} />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
                    <p className="text-gray-700 mb-2 text-sm">{desc}</p>
                    <div className="text-[rgb(139,0,2)] font-semibold text-sm">{highlight}</div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-12 bg-black"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
