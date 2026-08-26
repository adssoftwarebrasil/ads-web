import { ShieldCheck, Headphones, Store, Clock, Truck, CreditCard } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const differentials: Differential[] = [
  {
    icon: Headphones,
    iconClass: 'lucide lucide-headphones',
    title: 'Atendimento Técnico Especializado',
    description:
      'Nossa equipe é treinada para orientar você na escolha ideal de iluminação, considerando projeto, consumo energético e estética.',
    delay: '0s',
  },
  {
    icon: Store,
    iconClass: 'lucide lucide-store',
    title: 'Showroom para Visitação',
    description:
      'Visite nosso showroom e veja pessoalmente os produtos funcionando antes de escolher. Uma experiência única para tomar a decisão certa.',
    delay: '0.08s',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Produtos a Pronta Entrega',
    description:
      'Estoque completo e diversificado para atender sua demanda imediatamente, sem esperas desnecessárias em seu projeto ou obra.',
    delay: '0.16s',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: '12 Meses de Garantia',
    description:
      'Todos os produtos têm garantia de 12 meses diretamente em nossa loja. Você compra com total segurança e tranquilidade.',
    delay: '0.24s',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Entrega Grátis',
    description:
      'Entregamos seus produtos sem custo adicional para Poços de Caldas e região. Conforto e praticidade do início ao fim.',
    delay: '0.32s',
  },
  {
    icon: CreditCard,
    iconClass: 'lucide lucide-credit-card',
    title: 'Pagamento a Distância',
    description:
      'Compre de onde estiver! Aceitamos pagamentos remotos para facilitar o processo de compra, seja para você ou seus clientes.',
    delay: '0.4s',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#239110]/10 text-[#239110] px-4 py-2 rounded-full text-sm font-semibold mb-6 in-view">
            <ShieldCheck className="lucide lucide-shield-check" width={14} height={14} />
            Por Que Nos Escolher
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-[#010101] leading-tight mb-4 in-view">
            Nossos <span className="text-[#239110]">Diferenciais</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto">
            Mais do que vender produtos, oferecemos uma experiência completa desde a escolha até a
            instalação.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#239110]/30 hover:shadow-xl transition-all duration-400 group"
                style={{ transitionDelay: item.delay }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#239110]/10 text-[#239110] rounded-2xl mb-5 group-hover:bg-[#239110] group-hover:text-white transition-all duration-300">
                  <Icon className={item.iconClass} width={28} height={28} />
                </div>
                <h3 className="text-lg font-bold text-[#010101] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="animate-on-scroll mt-16 bg-[#010101] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#239110] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F9AA0C] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Atendemos Arquitetos, Construtoras e Lojistas
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Parcerias sólidas e condições especiais para profissionais do setor. Entre em contato
              e descubra como podemos trabalhar juntos.
            </p>
            <a
              href="http://wa.me/553530646373?text=Olá!%20Sou%20profissional%20do%20setor%20e%20gostaria%20de%20discutir%20uma%20parceria%20com%20a%20Caldense%20LED."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#239110] hover:bg-[#1a6b0c] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Quero ser Parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
