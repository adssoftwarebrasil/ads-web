import { CreditCard, Wallet, Banknote, ArrowRight, MessageCircle, PiggyBank, UserCheck } from 'lucide-react';
import { useState } from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
}

const services: Service[] = [
  {
    icon: <Banknote size={28} strokeWidth={2.5} />,
    title: 'Empréstimos Consignados',
    description: 'Condições exclusivas para servidores, aposentados e pensionistas.',
    fullDescription: 'Oferecemos empréstimos consignados com as melhores taxas do mercado, desconto direto em folha de pagamento, sem comprometer seu orçamento mensal.'
  },
  {
    icon: <Wallet size={28} strokeWidth={2.5} />,
    title: 'Cartão Benefício',
    description: 'Flexibilidade para gerenciar suas finanças.',
    fullDescription: 'Cartão de crédito consignado com limite pré-aprovado, taxas reduzidas e possibilidade de saque. Ideal para praticidade no dia a dia.'
  },
  {
    icon: <CreditCard size={28} strokeWidth={2.5} />,
    title: 'Cartão Consignado',
    description: 'Limites elevados com taxas reduzidas.',
    fullDescription: 'Cartão com limite diferenciado e juros mais baixos. Parcelas descontadas automaticamente em folha, oferecendo mais crédito com menor custo.'
  },
  {
    icon: <PiggyBank size={28} strokeWidth={2.5} />,
    title: 'Saque Limite do Cartão',
    description: 'Acesso rápido ao limite disponível no seu cartão.',
    fullDescription: 'Transforme o limite do seu cartão de crédito consignado em dinheiro de forma rápida e prática. Processo simples e sem burocracia.'
  },
  {
    icon: <Wallet size={28} strokeWidth={2.5} />,
    title: 'Antecipação do FGTS',
    description: 'Receba seu dinheiro sem burocracia.',
    fullDescription: 'Antecipe o saque do seu FGTS de forma segura e rápida. Processo 100% digital, aprovação em minutos e dinheiro na sua conta.'
  },
  {
    icon: <UserCheck size={28} strokeWidth={2.5} />,
    title: 'Atendimento Personalizado',
    description: 'Soluções feitas sob medida para suas necessidades.',
    fullDescription: 'Nossa equipe especializada está pronta para entender suas necessidades e oferecer as melhores soluções financeiras personalizadas.'
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre: ${service.title}`;
    window.open(`https://wa.me/5563984274000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="group bg-gradient-to-br from-white to-[#fafafa] p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[#f0f0f0] hover:border-[#f88601] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(235,102,1,0.12)] transition-all duration-500 relative overflow-hidden">
      {/* Gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f88601] to-[#eb6601] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      {/* Icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#f88601] to-[#eb6601] flex items-center justify-center text-white mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] mb-2 md:mb-3 group-hover:text-[#eb6601] transition-colors duration-300 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#666666] text-xs md:text-sm leading-relaxed mb-4 md:mb-5 min-h-[60px] md:min-h-[80px]">
        {expanded ? service.fullDescription : service.description}
      </p>

      {/* Ver mais/menos */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[#f88601] text-xs md:text-sm font-semibold flex items-center gap-2 mb-4 hover:gap-3 transition-all group/btn"
      >
        <span>{expanded ? 'ver menos' : 'ver mais'}</span>
        <ArrowRight 
          size={14} 
          className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${expanded ? 'rotate-90' : ''}`} 
        />
      </button>

      {/* CTA Button */}
      <button
        onClick={handleWhatsApp}
        className="w-full gradient-orange text-white py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group/cta"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover/cta:opacity-10 transition-opacity duration-300" />
        <span className="relative">CONTRATAR</span>
      </button>
    </div>
  );
};

const Services = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  return (
    <section id="servicos" className="relative bg-gradient-to-b from-white via-[#fefefe] to-[#f9f9f9] py-16 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f88601] rounded-full filter blur-[150px] opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#eb6601] rounded-full filter blur-[120px] opacity-[0.04]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-[#f88601] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">
              Nossos serviços
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#f88601] to-[#eb6601] mx-auto mb-6 rounded-full" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight tracking-tight">
            Soluções Financeiras para <br className="hidden md:block" />
            <span className="text-[#eb6601]">Todas as Necessidades</span>
          </h2>

          <p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Na Rede Consig, oferecemos um portfólio completo de serviços financeiros para facilitar sua vida.
          </p>
        </div>

        {/* Services Grid - 2 colunas no mobile, 3 no desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up">
          <button
            onClick={handleWhatsApp}
            className="group gradient-orange text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full text-base md:text-lg font-semibold inline-flex items-center gap-3 hover:scale-105 hover:shadow-[0_10px_40px_rgba(235,102,1,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <MessageCircle size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Enviar WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;