import { Cpu, Zap, ShieldCheck, Gauge, Wrench, Cog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  category: string;
  variant: 'blue' | 'red';
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Cpu,
    category: 'Eletrônica',
    variant: 'blue',
    title: 'Reparo de Módulos ABS',
    description:
      'Laboratório especializado para reparo de unidades de comando, evitando a troca desnecessária da peça completa.',
  },
  {
    icon: Zap,
    category: 'Eletrônica',
    variant: 'blue',
    title: 'Diagnóstico Computadorizado',
    description:
      'Identificação precisa de falhas em sistemas elétricos e eletrônicos utilizando scanners de última geração.',
  },
  {
    icon: ShieldCheck,
    category: 'Eletrônica',
    variant: 'blue',
    title: 'Reparo de ECUs',
    description: 'Recuperação técnica de centrais eletrônicas com garantia e certificação de qualidade.',
  },
  {
    icon: Gauge,
    category: 'Mecânica',
    variant: 'red',
    title: 'Freios Pneumáticos',
    description:
      'Manutenção completa em válvulas, cuícas e sistemas de ar para garantir a frenagem segura da frota.',
  },
  {
    icon: Wrench,
    category: 'Mecânica',
    variant: 'red',
    title: 'Mecânica Pesada',
    description: 'Serviços de suspensão, direção e freios para cavalos mecânicos e carretas de todas as marcas.',
  },
  {
    icon: Cog,
    category: 'Mecânica',
    variant: 'red',
    title: 'Preventiva & Revisão',
    description:
      'Planos de manutenção preventiva para reduzir custos operacionais e evitar paradas imprevistas.',
  },
];

export default function Services() {
  return (
    <div id="services">
      <section className="py-24 bg-slate-50 relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgb(8, 36, 75) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[rgb(230,10,12)] uppercase tracking-widest mb-3">
              Nossas Especialidades
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[rgb(8,36,75)] mb-6">
              Soluções Completas para sua Frota
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Unimos a precisão do diagnóstico eletrônico com a robustez da mecânica pesada.
              <strong className="font-semibold text-slate-800"> O padrão de concessionária que você procura.</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              const isBlue = s.variant === 'blue';
              return (
                <div
                  key={s.title}
                  className={`group relative bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ${
                    isBlue ? 'group-hover:border-blue-200' : 'group-hover:border-red-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isBlue
                          ? 'bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white'
                          : 'bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white'
                      }`}
                    >
                      <Icon width={28} height={28} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isBlue ? 'bg-blue-50 text-blue-800' : 'bg-red-50 text-red-800'
                      }`}
                    >
                      {s.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[rgb(8,36,75)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
