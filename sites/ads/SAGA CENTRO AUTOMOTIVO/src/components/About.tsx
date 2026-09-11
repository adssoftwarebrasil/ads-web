import { Shield, Award, Users, Clock, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconName: string;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: Shield,
    iconName: 'shield',
    title: 'Transparência Total',
    description: 'Orçamento honesto e detalhado antes de qualquer serviço. Sem surpresas na hora do pagamento.',
    delay: 300,
  },
  {
    icon: Award,
    iconName: 'award',
    title: 'Equipamentos Modernos',
    description:
      'Investimos constantemente em tecnologia para oferecer diagnósticos precisos e serviços de alto padrão.',
    delay: 380,
  },
  {
    icon: Users,
    iconName: 'users',
    title: 'Equipe Qualificada',
    description: 'Mecânicos experientes e em constante atualização, prontos para resolver qualquer problema.',
    delay: 460,
  },
  {
    icon: Clock,
    iconName: 'clock',
    title: 'Agilidade no Atendimento',
    description: 'Sem enrolação, com horários flexíveis inclusive aos sábados para se adaptar à sua rotina.',
    delay: 540,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/fachada-saga-centro-automotivo-carros-estacionados_1080x589.webp"
                alt="Fachada da Saga Sorriso Centro Automotivo"
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#EF1C1A] rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="text-white text-center">
                <div className="text-3xl sm:text-4xl font-black">5+</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium mt-1">Anos no Mercado</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[#FFFEDC] rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="text-black text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#EF1C1A]">5k+</div>
                <div className="text-gray-700 text-xs sm:text-sm font-medium mt-1">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#EF1C1A]"></div>
              <span className="text-[#EF1C1A] text-sm font-bold uppercase tracking-widest">Nossa História</span>
              <div className="h-px w-8 bg-[#EF1C1A]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Referência em Manutenção
              <br />
              <span className="text-[#FFFEDC]">Automotiva em Sorriso</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              A Saga Sorriso Centro Automotivo nasceu do amor pelos carros e do compromisso com a qualidade. Ao longo
              de mais de uma década, construímos uma reputação sólida baseada em honestidade, transparência e
              excelência técnica em Sorriso/MT.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
              Oferecemos serviços completos — da mecânica geral à auto elétrica, alinhamento, balanceamento, troca de
              óleo e câmbio automático — tudo sob um único teto, com profissionais qualificados e equipamentos de
              última geração. Nosso objetivo é simples: entregar segurança, desempenho e tranquilidade para você.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-3 items-start transition-all duration-500 opacity-100 translate-y-0"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#EF1C1A]/10 border border-[#EF1C1A]/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className={`lucide lucide-${feature.iconName} text-[#EF1C1A]`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
