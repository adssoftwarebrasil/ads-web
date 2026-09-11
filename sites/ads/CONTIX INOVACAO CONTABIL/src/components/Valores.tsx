import { Target, Users, Heart } from 'lucide-react';
import type { ReactNode } from 'react';

interface Valor {
  icon: ReactNode;
  title: string;
  text: string;
}

const valores: Valor[] = [
  {
    icon: <Target className="lucide lucide-target text-white" width={48} height={48} />,
    title: 'Visão de Mercado',
    text: 'Nosso escritório de contabilidade tem como visão se destacar como uma referência sólida e confiável em soluções contábeis estratégicas para empresas de todos os portes, nichos e segmentos de atuação, com foco absoluto em maximizar a eficiência financeira, reduzir custos desnecessários e promover o crescimento sustentável, lucrativo e de longo prazo dos nossos clientes. Queremos ser reconhecidos como parceiros estratégicos de negócios, não apenas como prestadores de serviços.',
  },
  {
    icon: <Users className="lucide lucide-users text-white" width={48} height={48} />,
    title: 'Equipe Unida no Propósito',
    text: 'Com uma equipe altamente qualificada, comprometida e apaixonada pelo que faz, buscamos constantemente a inovação, a excelência técnica e o aprimoramento contínuo de nossos serviços e processos, visando sempre antecipar as necessidades do mercado, estar à frente das mudanças legislativas e tecnológicas, e oferecer soluções personalizadas, criativas e eficientes que agreguem valor real, mensurável e significativo ao negócio de cada cliente. Acreditamos no poder da colaboração e do trabalho em equipe.',
  },
  {
    icon: <Heart className="lucide lucide-heart text-white" width={48} height={48} />,
    title: 'Foco nos Nossos Clientes',
    text: 'Acreditamos firmemente que a contabilidade vai muito além dos números, relatórios e obrigações fiscais; é uma ferramenta essencial, poderosa e indispensável para a tomada de decisões assertivas, o planejamento estratégico, a gestão eficiente de recursos e, principalmente, para o sucesso empresarial sustentável. Nosso compromisso é estar sempre ao lado dos nossos clientes, oferecendo suporte próximo, atendimento humanizado, reuniões frequentes e orientações claras que façam a diferença real no dia a dia e nos resultados dos negócios.',
  },
];

export default function Valores() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#234783] to-[#5BA3E8] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contix Inovação Contábil
          </h2>
          <p className="text-xl text-white/90">Alguns dos Nossos Valores</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((v) => (
            <div
              key={v.title}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-white/90 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
