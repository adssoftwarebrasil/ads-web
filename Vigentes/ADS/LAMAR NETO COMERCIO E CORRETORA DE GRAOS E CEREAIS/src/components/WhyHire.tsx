import { Shield, Users, Truck, Check } from 'lucide-react';

interface FeatureCardProps {
  image: string;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
  imagePosition: 'left' | 'right';
  borderColor: string;
}

function FeatureCard({ image, icon, iconColor, title, description, features, imagePosition, borderColor }: FeatureCardProps) {
  const imageElement = (
    <div className="w-full md:w-[40%]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:rounded-r-2xl"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minHeight: '250px', maxHeight: '350px' }}
        loading="lazy"
      />
    </div>
  );

  const contentElement = (
    <div className="w-full md:w-[60%] p-5 md:p-8 lg:p-12">
      <div className="mb-3 md:mb-5" style={{ color: iconColor }}>
        {icon}
      </div>

      <h3 className="text-[#324422] text-xl md:text-2xl lg:text-[28px] font-semibold mb-3 md:mb-5">
        {title}
      </h3>

      <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
        {description}
      </p>

      <div className="space-y-2 md:space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-3">
            <Check className="w-4 md:w-5 h-4 md:h-5 text-[#688631] flex-shrink-0 mt-0.5" />
            <span className="text-[#383838] text-sm md:text-[15px]">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="bg-white rounded-2xl md:rounded-3xl overflow-hidden card-hover"
      style={{
        boxShadow: '0 6px 30px rgba(50, 68, 34, 0.1)',
        borderLeft: `4px md:6px solid ${borderColor}`
      }}
    >
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {imageElement}
        {contentElement}
      </div>
    </div>
  );
}

export default function WhyHire() {
  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10"
      style={{
        background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)'
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="text-[#688631] text-xs md:text-sm font-semibold uppercase mb-3 md:mb-4" style={{ letterSpacing: '1px' }}>
            Diferenciais
          </div>
          <h2 className="text-[#324422] text-2xl md:text-3xl lg:text-[42px] font-semibold mb-3 md:mb-4 px-4">
            Por Que Contratar Nossos Serviços
          </h2>
          <p className="text-[#666666] text-sm md:text-base lg:text-lg max-w-[700px] mx-auto px-4">
            Nosso foco é fornecer produtos de qualidade com atendimento excepcional
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <FeatureCard
            image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Faperto-maos-campo.webp"
            icon={<Shield className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16" />}
            iconColor="#688631"
            title="Garantia de Qualidade"
            description="Grãos selecionados e testados rigorosamente seguindo protocolos internacionais de qualidade. Cada lote passa por análises detalhadas de umidade, impurezas e classificação antes da comercialização."
            features={[
              'Análise laboratorial completa',
              'Certificação de qualidade',
              'Rastreabilidade total'
            ]}
            imagePosition="left"
            borderColor="#688631"
          />

          <FeatureCard
            image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Fpessoas-com-headsets.webp"
            icon={<Users className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16" />}
            iconColor="#fbbf1f"
            title="Suporte Especializado"
            description="Equipe experiente e dedicada ao seu serviço, disponível para orientação técnica e comercial. Acompanhamento completo desde a negociação até a entrega final."
            features={[
              'Atendimento personalizado',
              'Consultoria técnica especializada',
              'Acompanhamento completo'
            ]}
            imagePosition="right"
            borderColor="#fbbf1f"
          />

          <FeatureCard
            image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Fcaminhao-estrada-arvores.webp"
            icon={<Truck className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16" />}
            iconColor="#faa431"
            title="Logística Eficiente e Confiável"
            description="Cada cliente é único e merece atenção especial. Planejamento logístico otimizado para entregas pontuais, frota própria e parcerias estratégicas garantem agilidade."
            features={[
              'Entregas pontuais e programadas',
              'Rastreamento em tempo real',
              'Parcerias estratégicas de transporte'
            ]}
            imagePosition="left"
            borderColor="#faa431"
          />
        </div>
      </div>
    </section>
  );
}