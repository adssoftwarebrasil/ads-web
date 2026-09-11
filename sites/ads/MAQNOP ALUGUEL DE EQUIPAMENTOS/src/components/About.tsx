import { Wrench, Truck, Shield, Users, Target, Eye, Star } from 'lucide-react';

const stats = [
  { icon: Wrench, value: '100+', label: 'Tipos de Equipamentos' },
  { icon: Truck, value: 'Rápida', label: 'Entrega em Sinop' },
  { icon: Shield, value: '100%', label: 'Equipamentos Revisados' },
  { icon: Users, value: 'Todos', label: 'Bairros de Sinop' },
];

const pillars = [
  {
    icon: Target,
    iconBg: 'bg-brand-orange/10',
    iconColor: 'text-brand-orange',
    title: 'Missão',
    text: 'Oferecer soluções rápidas e temporárias para a construção civil, através da locação de equipamentos que atendam suas necessidades, com qualidade e agilidade no atendimento.',
  },
  {
    icon: Eye,
    iconBg: 'bg-brand-blue/10',
    iconColor: 'text-brand-blue',
    title: 'Visão',
    text: 'Ser referência no ramo de locação de equipamentos para construção civil, buscando continuo crescimento com responsabilidade.',
  },
  {
    icon: Star,
    iconBg: 'bg-brand-orange/10',
    iconColor: 'text-brand-orange',
    title: 'Valores',
    text: 'Organização – Inovação – Ética – Responsabilidade – Competência – Transparência – Respeito e Cordialidade nos relacionamentos interpessoais.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative animate-slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/maqnop/img/about.webp"
                alt="Sobre a MAQNOP"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-3xl font-extrabold">5.0</div>
              <div className="text-sm font-medium mt-1">Avaliação Google</div>
              <div className="flex mt-2 gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-slide-right">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Sobre a MAQNOP</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
              Sua parceira de confiança na<span className="text-brand-orange"> construção civil</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base">
              A MAQNOP e especializada em locacao de equipamentos para a construção civil em Sinop e região. Trabalhamos com uma ampla variedade de máquinas e equipamentos de alta qualidade, oferecendo soluções eficientes e confiáveis para projetos de pequeno, médio e grande porte.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              Nosso foco é atender com agilidade, equipamentos revisados e suporte próximo ao cliente, garantindo mais produtividade, segurança e eficiência em cada obra.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-brand-orange/5 transition-colors group"
                >
                  <stat.icon className="w-6 h-6 text-brand-blue mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-brand-orange">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div
                className={`w-14 h-14 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
