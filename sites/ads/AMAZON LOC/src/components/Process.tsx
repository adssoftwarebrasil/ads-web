import { MessageSquare, Calculator, FileText, Truck, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: '01',
    Icon: MessageSquare,
    iconClass: 'lucide lucide-message-square',
    title: 'Avaliação Inicial',
    desc: 'Identificação das necessidades de equipamentos para obra pelo WhatsApp ou telefone',
  },
  {
    num: '02',
    Icon: Calculator,
    iconClass: 'lucide lucide-calculator',
    title: 'Orçamento e Planejamento',
    desc: 'Elaboração de um plano detalhado e orçamento personalizado sem compromisso',
  },
  {
    num: '03',
    Icon: FileText,
    iconClass: 'lucide lucide-file-text',
    title: 'Cadastro e Contrato',
    desc: 'Cadastro simplificado sem burocracia e formalização do contrato',
  },
  {
    num: '04',
    Icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Entrega e Teste',
    desc: 'Entrega rápida do equipamento na obra e realização de teste completo',
  },
  {
    num: '05',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Suporte e Funcionalidade',
    desc: 'Nossa equipe ensina o funcionamento correto e fica disponível para suporte',
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(63,59,116)] mb-4">
            Nosso Processo de Locação
          </h2>
          <p className="text-lg text-gray-600">Simples, rápido e sem burocracia</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[rgb(13,133,77)]"></div>
          <div className="space-y-12">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.num}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <span className="text-5xl font-bold text-[rgb(13,133,77)] mr-4">
                          {s.num}
                        </span>
                        <s.Icon className={`${s.iconClass} w-12 h-12 text-[rgb(13,133,77)]`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{s.title}</h3>
                      <p className="text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-2/12 justify-center items-center my-8 lg:my-0">
                    <div className="w-6 h-6 rounded-full bg-[rgb(13,133,77)] border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
