import { ShoppingCart, CreditCard, Headphones, MapPin, Package, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Differential = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const differentials: Differential[] = [
  { Icon: ShoppingCart, title: 'Múltiplos Canais de Venda', desc: 'Compre como preferir: presencial, WhatsApp, telefone ou Mercado Livre.' },
  { Icon: CreditCard, title: 'Facilidades de Pagamento', desc: 'Diversas opções de pagamento para facilitar sua compra.' },
  { Icon: Headphones, title: 'Atendimento Personalizado', desc: 'Equipe especializada pronta para ajudar na escolha ideal.' },
  { Icon: MapPin, title: 'Localização Estratégica', desc: 'Fácil acesso na Av. Araguaia, em Redenção - PA.' },
  { Icon: Package, title: 'Estoque Completo', desc: 'Ampla variedade de produtos sempre disponíveis.' },
  { Icon: ThumbsUp, title: 'Marcas Confiáveis', desc: 'Trabalhamos apenas com as melhores marcas do mercado.' },
];

export default function Differentials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E6E6E4] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#AA1C1F] font-semibold text-sm uppercase tracking-wide">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E55] mt-3 mb-6">
              Por que a FORTMAQ é sua <span className="text-[#AA1C1F]">Melhor Escolha</span>
            </h2>
            <div className="w-24 h-1 bg-[#AA1C1F] mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#AA1C1F] group"
              >
                <div className="bg-gradient-to-br from-[#0A1E55] to-[#0A1E55]/80 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E55] mb-3 group-hover:text-[#AA1C1F] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-[#0A1E55] rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-r from-[#AA1C1F] to-[#8A1619] rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Horário de Funcionamento</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm opacity-90">Segunda a Sábado</p>
                    <p className="text-2xl font-bold">07:00 às 18:00</p>
                  </div>
                </div>
              </div>
              <p className="text-white/90 mt-6 text-lg">Estamos prontos para atendê-lo com excelência!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
