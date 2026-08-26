import { Wrench, Settings, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Servico {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

const servicos: Servico[] = [
  {
    Icon: Wrench,
    title: 'Instalação Profissional',
    description:
      'Equipe qualificada e especializada para instalação precisa e segura, assegurando durabilidade dos produtos.',
    delay: '0s',
  },
  {
    Icon: Settings,
    title: 'Manutenção Preventiva e Corretiva',
    description:
      'Serviços de manutenção que ampliam a vida útil das esquadrias e vidros, com acompanhamento constante.',
    delay: '0.1s',
  },
  {
    Icon: Truck,
    title: 'Extração e Remoção',
    description:
      'Remoção segura de estruturas antigas para facilitar a substituição e renovação de ambientes.',
    delay: '0.2s',
  },
];

function ServicoCard({ servico }: { servico: Servico }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { Icon } = servico;
  return (
    <div
      ref={ref}
      className={`bg-[#F5F5F5] border-2 border-transparent rounded-xl p-10 text-center hover:border-[#29456D] hover:shadow-lg transition-all duration-300 ${
        inView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: servico.delay }}
    >
      <div className="flex justify-center mb-6">
        <Icon className="w-16 h-16 text-[#29456D]" strokeWidth={1.5} />
      </div>
      <h3 className="text-[22px] font-semibold text-[#29456D] mb-4">{servico.title}</h3>
      <p className="text-[#666666] text-[15px] leading-relaxed">{servico.description}</p>
    </div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#29456D] text-3xl lg:text-[42px] font-bold text-center mb-12 lg:mb-15">
          Serviços Personalizados para Cada Necessidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-15">
          {servicos.map((servico) => (
            <ServicoCard key={servico.title} servico={servico} />
          ))}
        </div>
        <div className="bg-[#29456D] rounded-xl p-8 lg:p-10 text-center">
          <p className="text-white text-lg leading-relaxed max-w-[900px] mx-auto">
            Nosso padrão de serviço é guiado pela agilidade e segurança, com monitoramento constante da
            satisfação dos clientes. Cada serviço é realizado com atenção aos detalhes e compromisso com a
            qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}
