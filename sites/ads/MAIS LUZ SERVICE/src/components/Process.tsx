import React from 'react';
import { ClipboardList, PenTool, Hammer, CheckCircle, RefreshCw } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      icon: <ClipboardList className="w-10 h-10" />,
      title: 'Diagnóstico Técnico',
      description: 'Avaliação detalhada das necessidades elétricas, carga instalada e pontos críticos do seu negócio'
    },
    {
      number: '02',
      icon: <PenTool className="w-10 h-10" />,
      title: 'Projeto Executivo',
      description: 'Desenvolvimento de projeto elétrico completo conforme normas técnicas e regulatórias'
    },
    {
      number: '03',
      icon: <Hammer className="w-10 h-10" />,
      title: 'Execução Profissional',
      description: 'Instalação com equipe certificada, materiais de primeira linha e conformidade NR10'
    },
    {
      number: '04',
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Testes e Comissionamento',
      description: 'Verificação rigorosa de todos os sistemas antes da energização e entrega'
    },
    {
      number: '05',
      icon: <RefreshCw className="w-10 h-10" />,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento técnico pós-instalação e manutenção preventiva programada'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Nosso Processo de Trabalho
          </h2>
        </div>

        {/* Timeline - Horizontal on Desktop */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-blue-200"></div>

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto bg-blue-900 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-3xl font-bold text-yellow-400">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-blue-900 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Vertical on Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Left Side - Number and Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-yellow-400">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-grow bg-blue-200 mt-4"></div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex-grow border border-gray-100">
                <div className="text-blue-900 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
