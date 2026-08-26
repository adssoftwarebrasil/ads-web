import { Shield, Clock, Award, Users, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  label: string;
}

const features: Feature[] = [
  { icon: Shield, label: 'Garantia de Servico' },
  { icon: Clock, label: 'Pontualidade nos Agendamentos' },
  { icon: Award, label: '+8 Anos de Experiencia' },
  { icon: Users, label: '+4.000 Clientes Atendidos' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative scroll-reveal-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/climatec%2Ffamilia-sorrindo-sofa.webp"
                alt="Familia confortavel"
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/climatec%2Fsala-ar-condicionado-sofa.webp"
                alt="Sala climatizada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="scroll-reveal-right">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Sobre a Climatec
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Seu Conforto e a<br />
              <span className="text-primary">Nossa Prioridade</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              A Climatec foi fundada em 2016 por Claudir Vieira, profissional com mais de 15 anos de experiencia no mercado de varejo e eletrodomesticos. Com foco total no cliente e dedicacao ao atendimento de excelencia, a empresa vem crescendo a cada ano em Sorriso - MT.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Hoje contamos com mais de 4.000 clientes cadastrados em nossa base, atendendo desde Split Hi Wall, Piso Teto e Cassete ate sistemas VRF, infraestrutura de tubulacao e aluguel de equipamentos de 9.000 a 60.000 BTUs. Pontualidade, qualidade e responsabilidade sao nossos pilares.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-2xl flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{feature.label}</span>
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
