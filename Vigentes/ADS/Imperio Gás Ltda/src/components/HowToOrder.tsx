import { Phone, MessageCircle, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Phone,
    title: 'Entre em Contato',
    text: 'Ligue, chame no WhatsApp ou preencha o formulário. Nosso time está pronto para atender.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Confirme Seu Pedido',
    text: 'Informe o produto, quantidade e endereço de entrega. Rápido e sem complicação.',
    delay: '0.2s',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Receba em Casa',
    text: 'Aguarde nosso entregador levar seu pedido com segurança e pontualidade.',
    delay: '0.4s',
  },
];

export default function HowToOrder() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fcilindros-gas-prateados.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in animate-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Como Fazer Seu Pedido</h2>
          <p className="text-lg text-gray-600">Simples, rápido e seguro em apenas 3 passos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center slide-up" style={step.delay ? { animationDelay: step.delay } : undefined}>
                <div className="relative mb-6">
                  <div className="bg-[#DEAC6C] text-black text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="bg-[#DEAC6C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-[#DEAC6C]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
