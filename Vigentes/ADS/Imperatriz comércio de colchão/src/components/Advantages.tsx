import {
  Truck,
  CreditCard,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Headphones,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  wrapClass: string;
}

const advantages: Advantage[] = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description:
      'Produtos em pronta entrega. Receba no mesmo dia em Uberlândia e região',
    wrapClass: 'bg-blue-100 text-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Facilidade de Pagamento',
    description: 'Múltiplas formas de pagamento e parcelamento facilitado',
    wrapClass: 'bg-green-100 text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia Ortobom',
    description:
      'Produtos originais com garantia de fábrica e certificação de qualidade',
    wrapClass: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Atendimento Flexível',
    description: 'Horário estendido de seg a sex (08h-18h) e sábado (08h-14h)',
    wrapClass: 'bg-orange-100 text-orange-600',
  },
  {
    icon: ThumbsUp,
    title: 'Teste Antes de Comprar',
    description:
      'Experimente os produtos em nossa loja e escolha com segurança',
    wrapClass: 'bg-red-100 text-red-600',
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description:
      'Equipe treinada para orientar na melhor escolha para seu perfil',
    wrapClass: 'bg-[rgb(0,0,160)]/10 text-[rgb(0,0,160)]',
  },
];

export default function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vantagens de Comprar Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que produtos de qualidade, oferecemos uma experiência
            completa de compra
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl ${a.wrapClass} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {a.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{a.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(0,0,160)] to-[rgb(0,0,200)] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto Para Ter o Melhor Sono da Sua Vida?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Nossa equipe está pronta para ajudar você a encontrar o colchão
                perfeito. Entre em contato agora mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20conhecer%20os%20colchões%20Ortobom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[rgb(0,0,160)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:3432362803"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all text-center"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-4">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-lg">
                  <p>Segunda a Sexta: 08h às 18h</p>
                  <p>Sábado: 08h às 14h</p>
                  <p className="text-sm opacity-75 mt-4">
                    *Atendimento via WhatsApp 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
