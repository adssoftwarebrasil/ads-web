import { MessageCircle, ShoppingCart, CreditCard, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  { number: "01", icon: MessageCircle, title: "Entre em Contato", description: "Fale conosco pelo WhatsApp (62) 99999-8831 ou visite nosso showroom", color: "bg-[#25D366]" },
  { number: "02", icon: ShoppingCart, title: "Escolha sua Cesta", description: "Selecione entre nossas cestas basicas para o ano todo", color: "bg-primary" },
  { number: "03", icon: CreditCard, title: "Confirme o Pedido", description: "Informe endereco de entrega e escolha a forma de pagamento", color: "bg-gray-900" },
  { number: "04", icon: Truck, title: "Receba em Casa", description: "Entrega rapida em Goiania e regiao com todo cuidado", color: "bg-primary-dark" },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Como Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Fazer Seu Pedido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo simples e rapido em 4 passos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${index + 1} group relative`}
              >
                <div className={`${step.color} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 text-6xl sm:text-7xl font-bold text-white/10 select-none">
                    {step.number}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">
                      <Icon className="text-white" size={44} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
