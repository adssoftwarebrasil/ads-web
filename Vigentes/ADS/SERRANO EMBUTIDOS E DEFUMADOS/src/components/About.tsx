import { Award, MapPin, Clock, Users } from 'lucide-react';

const features = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-[#FF6601]',
    title: 'Qualidade Garantida',
    description:
      'Produtos elaborados com matéria-prima selecionada e processos artesanais que preservam o sabor autêntico.',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-[#FF6601]',
    title: 'Orgulho de Sorriso-MT',
    description:
      'Empresa local atendendo mercados e conveniências de toda a região Centro-Oeste do Mato Grosso.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[#FF6601]',
    title: 'Mais de 30 Anos de História',
    description:
      'Fundada em 1994, a Serrano construiu sua reputação sobre tradição, capricho e sabor inconfundível.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-[#FF6601]',
    title: 'Foco no Cliente',
    description:
      'Atendemos mercados e conveniências com entrega dedicada e compromisso com a satisfação de cada cliente.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                src="https://storage.lucasmendes.dev/site-sp/serrano%20embutidos%20e%20defumados/img/fachada.webp"
                alt="Fachada Serrano Embutidos e Defumados"
                className="w-full h-72 sm:h-96 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#FF6601] text-white rounded-2xl p-5 shadow-2xl shadow-[#FF6601]/40 z-10">
              <div className="text-4xl font-black leading-none">30+</div>
              <div className="text-xs font-semibold uppercase tracking-wide mt-1 opacity-90">
                Anos de<br />Tradição
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#FF6601]/30 rounded-2xl hidden sm:block"></div>
            <div className="absolute top-8 left-8 w-12 h-12 border border-[#FF6601]/20 rounded-xl hidden sm:block"></div>
          </div>
          <div>
            <span className="text-[#FF6601] text-xs font-bold uppercase tracking-widest">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
              Desde 1994 Levando<br />
              <span className="text-[#FF6601]">o Melhor Sabor</span>
              <br />à Sua Mesa
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              A Serrano Embutidos e Defumados nasceu na cidade de Sorriso-MT com um propósito
              claro: levar produtos coloniais de alta qualidade para a mesa dos mato-grossenses.
              Desde 1994, trabalhamos no ramo de carnes e produtos coloniais com foco e dedicação.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Nossa missão é garantir que cada produto chegue ao cliente com o sabor único e o
              capricho que só uma empresa com décadas de experiência pode oferecer. Atendemos
              mercados e conveniências em Sorriso, Sinop, Lucas do Rio Verde, Nova Mutum e toda a
              região.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ Icon, iconClass, title, description }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#FF6601]/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-[#FF6601]/15 rounded-lg flex items-center justify-center">
                    <Icon size={18} className={iconClass} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold mb-1">{title}</div>
                    <div className="text-white/45 text-xs leading-relaxed">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
