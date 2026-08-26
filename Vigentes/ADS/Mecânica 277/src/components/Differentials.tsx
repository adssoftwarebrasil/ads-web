import { Shield, Clock, Wrench, ThumbsUp, Award, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Item {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const items: Item[] = [
  { Icon: Shield, iconClass: 'lucide lucide-shield text-[#0a0a0a]', title: 'Qualidade Garantida', desc: 'Utilizamos apenas peças originais e de alta qualidade, com garantia em todos os serviços realizados.' },
  { Icon: Clock, iconClass: 'lucide lucide-clock text-[#0a0a0a]', title: 'Agilidade no Atendimento', desc: 'Processos otimizados e equipe dedicada para entregar seu veículo no menor prazo possível.' },
  { Icon: Wrench, iconClass: 'lucide lucide-wrench text-[#0a0a0a]', title: 'Equipe Especializada', desc: 'Mecânicos certificados e treinados constantemente nas mais modernas técnicas automotivas.' },
  { Icon: ThumbsUp, iconClass: 'lucide lucide-thumbs-up text-[#0a0a0a]', title: 'Atendimento Corporativo', desc: 'Experiência comprovada com frotas empresariais e órgãos governamentais.' },
  { Icon: Award, iconClass: 'lucide lucide-award text-[#0a0a0a]', title: 'Tecnologia de Ponta', desc: 'Equipamentos modernos para diagnóstico preciso e reparos de alta qualidade.' },
  { Icon: Headphones, iconClass: 'lucide lucide-headphones text-[#0a0a0a]', title: 'Suporte Completo', desc: 'Atendimento personalizado do orçamento até a entrega do veículo.' },
];

export default function Differentials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#f0e92c] font-semibold text-sm uppercase tracking-wider">Nossos Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mt-2 mb-4">Por Que Escolher a Mecânica 277?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprometimento com excelência e satisfação total em cada serviço prestado</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#f0e92c]">
              <div className="bg-gradient-to-br from-[#f0e92c] to-[#e0d91c] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <item.Icon className={item.iconClass} width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pronto para cuidar do seu veículo com quem entende?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Entre em contato agora e descubra por que somos a escolha número um em Foz do Iguaçu para manutenção automotiva</p>
          <a
            href="http://wa.me/5545998527494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f0e92c] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold hover:bg-[#e0d91c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
