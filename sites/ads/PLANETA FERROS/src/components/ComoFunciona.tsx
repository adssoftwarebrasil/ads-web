import { MessageCircle, Send, CheckCircle2, Truck, type LucideIcon } from 'lucide-react';

interface Passo {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const passos: Passo[] = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'Entre em contato',
    description: 'Fale com nossa equipe pelo WhatsApp com as medidas e quantidade necessária.',
  },
  {
    icon: Send,
    number: '2',
    title: 'Receba o orçamento',
    description: 'Enviamos o orçamento detalhado rapidamente, com prazo e condições de pagamento.',
  },
  {
    icon: CheckCircle2,
    number: '3',
    title: 'Confirme o pedido',
    description: 'Aprovado o orçamento, confirmamos o pedido e agendamos a entrega ou retirada.',
  },
  {
    icon: Truck,
    number: '4',
    title: 'Entrega garantida',
    description: 'Material entregue no prazo em Luzimangues, Palmas, Paraíso e Porto Nacional.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="processo" className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            Como Funciona
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Simples e transparente do início ao fim.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {passos.map((passo) => {
            const Icon = passo.icon;
            return (
              <div
                key={passo.number}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors duration-300 shadow-sm">
                    <Icon width={28} height={28} aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow">
                    {passo.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">{passo.title}</h3>
                <p className="text-secondary leading-relaxed text-sm">{passo.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
