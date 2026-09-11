import { Shield, Clock, DollarSign, Smile, Sparkles, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: 'Produtos selecionados e inspecionados para garantir o melhor para sua mesa',
  },
  {
    icon: Clock,
    title: 'Horário Estendido',
    description: 'Aberto das 6h às 21h para servir você no melhor horário',
  },
  {
    icon: DollarSign,
    title: 'Preços Justos',
    description: 'Os melhores preços da região com promoções imperdíveis toda semana',
  },
  {
    icon: Smile,
    title: 'Atendimento de Excelência',
    description: 'Equipe treinada e sempre pronta para te atender com um sorriso',
  },
  {
    icon: Sparkles,
    title: 'Ambiente Limpo',
    description: 'Loja organizada e higienizada para sua segurança e conforto',
  },
  {
    icon: Truck,
    title: 'Produtos Frescos',
    description: 'Recebimento diário de mercadorias para máximo frescor',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Por Que Escolher</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            O Supermercado <span className="text-[rgb(221,40,45)]">Conquista?</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos referência em Indiara pela nossa dedicação em oferecer o melhor para nossos clientes
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgb(221,40,45)] opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-[rgb(221,40,45)] to-[rgb(200,30,35)] p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
