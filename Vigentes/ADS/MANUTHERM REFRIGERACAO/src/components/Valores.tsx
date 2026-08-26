import { Thermometer, Activity, Wind, Snowflake, Cpu, type LucideIcon } from 'lucide-react';

interface Valor {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  desc: string;
}

const valores: Valor[] = [
  {
    Icon: Thermometer,
    iconName: 'thermometer',
    title: 'Qualificação Térmica',
    desc: 'Expertise técnica em projetos de climatização',
  },
  {
    Icon: Activity,
    iconName: 'activity',
    title: 'Monitoramento',
    desc: 'Acompanhamento contínuo de performance',
  },
  {
    Icon: Wind,
    iconName: 'wind',
    title: 'Qualidade do Ar',
    desc: 'Ambientes saudáveis e confortáveis',
  },
  {
    Icon: Snowflake,
    iconName: 'snowflake',
    title: 'Conforto Térmico',
    desc: 'Temperatura ideal em todos os ambientes',
  },
  {
    Icon: Cpu,
    iconName: 'cpu',
    title: 'Tecnologia Aplicada',
    desc: 'Soluções inovadoras e eficientes',
  },
];

export default function Valores() {
  return (
    <section id="valores" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="transition-all duration-700 opacity-0 translate-y-10">
          <div className="text-center mb-12">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)]">Nossos Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valores.map((v, i) => (
              <div
                key={v.title}
                className="bg-[rgb(247,247,247)] p-8 rounded-xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300 opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <v.Icon
                  width={56}
                  height={56}
                  strokeWidth={2}
                  className={`lucide lucide-${v.iconName} text-[rgb(28,123,179)] mx-auto mb-4`}
                />
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[rgb(9,74,104)] mb-2">{v.title}</h3>
                <p className="text-[14px] lg:text-[15px] text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
