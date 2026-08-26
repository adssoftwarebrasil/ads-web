import { Clock, Users, Award, MapPin, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-brand-red mb-2',
    value: '+15',
    label: 'Anos de experiência',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-brand-red mb-2',
    value: '+5k',
    label: 'Clientes atendidos',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-brand-red mb-2',
    value: '100%',
    label: 'Dedicação e qualidade',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-brand-red mb-2',
    value: '3',
    label: 'Cidades atendidas',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
              Nossa história
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-navy leading-tight mb-6">
              TRADIÇÃO E<span className="text-brand-red"> CONFIANÇA</span>
              <br />
              DESDE 2009
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Tudo começou com um ferro velho do meu pai. Desde criança, a paixão por carros já
                corria nas veias. Comecei como ajudante no comércio local e logo me tornei mecânico.
              </p>
              <p>
                Para conquistar o capital necessário, morei em Londres por quatro anos, onde também
                trabalhei na área de mecânica. Quando voltei, em março de 2009, juntei forças com meu
                pai e fundamos a <strong className="text-brand-navy">Eslei Auto Peças</strong>.
              </p>
              <p>
                Mais de 15 anos depois, somos referência em Minaçu e região. Contamos com um quadro de
                funcionários qualificados, com anos de experiência e total dedicação ao cliente.
                Agora, além da oficina completa e venda de peças, oferecemos serviço de{' '}
                <strong className="text-brand-red">guincho 24h</strong>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-brand-gray rounded-2xl p-5 border border-gray-100 hover:border-brand-red/30 transition-colors duration-200"
                  >
                    <Icon width={20} height={20} className={stat.iconClass} />
                    <span className="block font-display text-3xl text-brand-navy">{stat.value}</span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Eslei%20Auto/hero.jpg"
                alt="Eslei Auto Peças - Oficina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-brand-red text-white rounded-2xl p-5 shadow-xl">
              <span className="block font-display text-4xl leading-none">2009</span>
              <span className="text-white/80 text-xs uppercase tracking-widest">Fundação</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-yellow rounded-2xl p-4 shadow-xl">
              <span className="block font-display text-3xl text-brand-navy leading-none">24h</span>
              <span className="text-brand-navy/70 text-xs uppercase tracking-widest">Guincho</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
