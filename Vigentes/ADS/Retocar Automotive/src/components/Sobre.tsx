import { Award, ShieldCheck, Users, Sparkles, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[#DB151F]',
    title: '+15 Anos de Experiência',
    desc: 'Trajetória sólida construída com dedicação e excelência no serviço.',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#DB151F]',
    title: 'Qualidade Garantida',
    desc: 'Peças de qualidade e serviços realizados por profissionais especializados.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[#DB151F]',
    title: 'Equipe Qualificada',
    desc: 'Time altamente treinado e atualizado com as últimas tecnologias automotivas.',
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-[#DB151F]',
    title: 'Estrutura Moderna',
    desc: 'Equipamentos de ponta e espaço amplo para receber todos os tipos de veículos.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/RETOCAR/retocar-servicos-e-pecas-carros-estacionados_773x580.webp"
                alt="Retocar - Oficina"
                className="w-full h-72 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-[#DB151F] rounded-2xl px-6 py-5 shadow-2xl shadow-red-900/50">
              <p className="text-white font-black text-4xl md:text-5xl leading-none">15+</p>
              <p className="text-red-200 text-sm font-semibold mt-1">Anos no Mercado</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-[#DB151F] text-xs font-bold tracking-widest uppercase mb-4">
              Sobre a Retocar
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Excelência Automotiva
              <br />
              <span className="text-gray-400">com Propósito</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              A Retocar é a oficina mais completa de Santa Terezinha de Goiás, com mais de 15 anos de
              experiência oferecendo soluções automotivas completas.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Nossa trajetória é marcada por transparência, seriedade e excelência, sempre colocando o
              cliente em primeiro lugar. Contamos com uma estrutura moderna, ampla variedade de peças,
              frota revisada e uma equipe altamente qualificada para garantir segurança, qualidade e
              agilidade em cada atendimento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 bg-[#0A0A0A] rounded-2xl p-4 border border-white/5"
                  >
                    <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className={feature.iconClass} width={18} height={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
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
