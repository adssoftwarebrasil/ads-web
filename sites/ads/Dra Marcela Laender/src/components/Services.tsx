import { Sparkles, Scissors, Pill, Droplets, Activity, Shield, LucideIcon } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    Icon: Sparkles,
    title: 'Laser Íntimo',
    description:
      'Tratamento revolucionário para ressecamento vaginal, incontinência urinária e rejuvenescimento íntimo. Rápido, sem dor e sem afastamento das atividades.',
    features: ['Sem dor', 'Resultados rápidos', 'Sem afastamento'],
  },
  {
    Icon: Scissors,
    title: 'Ninfoplastia a Laser',
    description:
      'Correção estética e funcional dos pequenos lábios. O uso do Laser reduz o trauma térmico, garantindo cicatrização perfeita e menos dor. Pode ser feita em consultório (anestesia local) ou hospital. Pós-operatório tranquilo: 7 dias de repouso relativo, 15 sem academia e 30-40 dias de resguardo sexual.',
    features: ['Menos dor e trauma', 'Consultório ou Hospital', 'Cicatrização estética'],
  },
  {
    Icon: Pill,
    title: 'Reposição Hormonal',
    description:
      'Tratamento personalizado para equilíbrio hormonal, melhorando qualidade de vida e bem-estar em todas as fases da vida feminina.',
    features: ['Personalizado', 'Baseado em evidências', 'Acompanhamento contínuo'],
  },
  {
    Icon: Droplets,
    title: 'Preenchimento Íntimo',
    description:
      'Procedimento estético para rejuvenescimento e melhora da sensibilidade na região íntima, com resultados naturais e duradouros.',
    features: ['Resultados naturais', 'Procedimento rápido', 'Efeito duradouro'],
  },
  {
    Icon: Activity,
    title: 'Histeroscopia',
    description:
      'Exame diagnóstico e terapêutico para investigação e tratamento de alterações uterinas com precisão e segurança.',
    features: ['Minimamente invasivo', 'Diagnóstico preciso', 'Recuperação rápida'],
  },
  {
    Icon: Shield,
    title: 'Consultas Ginecológicas',
    description:
      'Atendimento completo para prevenção, diagnóstico e tratamento de condições ginecológicas, com foco em sua saúde integral.',
    features: ['Acolhimento', 'Exames preventivos', 'Orientação completa'],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-16 sm:py-24 bg-gradient-to-br from-[#FDF5F7] via-white to-[#F8F4F5]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#613C45] mb-6">
            Tratamentos Avançados para Seu Bem-Estar
          </h2>
          <p className="text-lg text-gray-700">
            Oferecemos procedimentos modernos e seguros, utilizando tecnologia de ponta para cuidar
            da sua saúde íntima com excelência e discrição.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, features }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D88B9B]/20 to-[#613C45]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-[#613C45]" />
              </div>
              <h3 className="text-2xl font-bold text-[#613C45] mb-4">{title}</h3>
              <div className="flex-grow">
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  {description}
                </p>
                <div className="space-y-2 mb-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D88B9B] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#613C45] font-medium hover:text-[#D88B9B] transition-colors group-hover:translate-x-2 transform duration-300 mt-auto"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#613C45] text-white px-10 py-4 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Agende Sua Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
