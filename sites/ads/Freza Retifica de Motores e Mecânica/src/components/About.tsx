import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Equipe técnica especializada em motores',
  'Peças e componentes de alta qualidade',
  'Orçamento transparente e sem surpresas',
  'Atendimento personalizado para cada cliente',
  'Localização estratégica no setor industrial de Sinop',
];

const stats = [
  { value: '100%', label: 'Comprometimento' },
  { value: 'Sinop', label: 'Setor Industrial Norte' },
  { value: '+10', label: 'Anos de Experiência' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-on-scroll order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/40">
              <img
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                alt="Mecânico especializado em retifica de motores"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red rounded-2xl p-6 shadow-xl shadow-brand-red/30 max-w-[200px] hidden sm:block">
              <p className="text-white text-4xl font-black leading-none">+10</p>
              <p className="text-white/80 text-sm mt-1 font-medium">Anos no mercado</p>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-red/10 rounded-full border border-brand-red/20 hidden sm:block"></div>
            <div className="absolute top-1/3 -left-8 w-4 h-32 bg-brand-red rounded-full hidden lg:block"></div>
          </div>
          <div className="order-1 lg:order-2 animate-on-scroll">
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Nossa história</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6 tracking-tight leading-tight">
              Qualidade que Faz
              <br />
              <span className="text-brand-red">a Diferença</span>
            </h2>
            <p className="text-brand-gray/80 text-base leading-relaxed mb-5">
              A <strong className="text-white">Freza Retifica de Motores e Mecânica</strong> nasceu com um propósito
              claro: fazer diferença em mão de obra e serviço de qualidade para os clientes de Sinop e região.
            </p>
            <p className="text-brand-gray/80 text-base leading-relaxed mb-8">
              Instalados no Setor Industrial Norte de Sinop — MT, somos referência em retifica de motores, atendendo com
              seriedade, competência e um compromisso genuíno com cada motor que chega em nossas mãos.
            </p>
            <ul className="space-y-3 mb-10">
              {highlights.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-brand-red flex-shrink-0 mt-0.5"
                    width={20}
                    height={20}
                  />
                  <span className="text-brand-gray/90 text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-brand-red pl-4">
                  <p className="text-white text-3xl font-black">{stat.value}</p>
                  <p className="text-brand-gray/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
