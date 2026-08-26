import { Wrench, Calendar, Settings, Wind, Layers, type LucideIcon } from 'lucide-react';

interface Servico {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    Icon: Wrench,
    iconName: 'wrench',
    title: 'Instalação de Sistemas de Climatização',
    desc: 'Instalação profissional de equipamentos de grande porte com tecnologia avançada, incluindo chillers (central de água gelada) e sistemas VRF. Projeto, dimensionamento e implementação completa.',
  },
  {
    Icon: Calendar,
    iconName: 'calendar',
    title: 'Manutenção Preventiva',
    desc: 'Manutenção programada para garantir maior qualidade do ar, eficiência energética e vida útil prolongada dos equipamentos. Evite paradas inesperadas.',
  },
  {
    Icon: Settings,
    iconName: 'settings',
    title: 'Manutenção Corretiva',
    desc: 'Atendimento rápido e eficiente para correção de falhas e panes nos equipamentos. Equipe técnica especializada disponível para emergências.',
  },
  {
    Icon: Wind,
    iconName: 'wind',
    title: 'Sistema Split e Splitão',
    desc: 'Instalação e manutenção de sistemas de expansão direta para ambientes comerciais e residenciais, com foco em eficiência e conforto térmico.',
  },
];

const servicoDestaque: Servico = {
  Icon: Layers,
  iconName: 'layers',
  title: 'Sistemas VRF e Central de Água Gelada',
  desc: 'Especialistas em sistemas de grande porte com tecnologia de ponta. Instalação, manutenção e todos os acessórios necessários para máxima performance.',
};

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="transition-all duration-700 opacity-0 translate-y-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)] mb-4">Nossos Serviços</h2>
            <p className="text-[18px] text-[rgb(28,123,179)]">Soluções completas em climatização para seu negócio</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {servicos.map((s, i) => (
              <div
                key={s.title}
                className="bg-white border border-[rgb(247,247,247)] p-8 lg:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[rgb(28,123,179)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center mb-5">
                  <s.Icon
                    width={28}
                    height={28}
                    strokeWidth={2}
                    className={`lucide lucide-${s.iconName} text-[rgb(28,123,179)]`}
                  />
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[rgb(9,74,104)] mb-3">{s.title}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed flex-grow">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 lg:mt-8">
            <div
              className="bg-white border border-[rgb(247,247,247)] p-8 lg:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[rgb(28,123,179)] transition-all duration-300 hover:-translate-y-1 w-full md:max-w-[calc(50%-1rem)] flex flex-col opacity-0 translate-y-10"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-14 h-14 bg-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center mb-5">
                <servicoDestaque.Icon
                  width={28}
                  height={28}
                  strokeWidth={2}
                  className={`lucide lucide-${servicoDestaque.iconName} text-[rgb(28,123,179)]`}
                />
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-[rgb(9,74,104)] mb-3">
                {servicoDestaque.title}
              </h3>
              <p className="text-[16px] text-gray-600 leading-relaxed flex-grow">{servicoDestaque.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
