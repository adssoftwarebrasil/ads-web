import { Clock, Users, Award, MapPin, type LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconName: string;
  value: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { Icon: Clock, iconName: 'clock', value: '50+', label: 'Anos de Mercado', sub: 'Desde 1976' },
  { Icon: Users, iconName: 'users', value: '5.000+', label: 'Clientes Atendidas', sub: 'E crescendo' },
  { Icon: Award, iconName: 'award', value: '6+', label: 'Especialidades', sub: 'Serviços premium' },
  { Icon: MapPin, iconName: 'map-pin', value: 'Cuiabá', label: 'E Região', sub: 'Várzea Grande e mais' },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-cream/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-cabelo-grisalho-avental-preto-emilia_2268x4032.webp"
                alt="Profissional Emilia Hair & Care"
                className="w-full h-[500px] md:h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone/50 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 bg-gold text-white p-6 rounded-2xl shadow-xl">
              <p className="font-serif text-5xl font-light leading-none">50</p>
              <p className="font-sans text-xs uppercase tracking-widest mt-1 font-medium">Anos de</p>
              <p className="font-sans text-xs uppercase tracking-widest font-medium">Excelência</p>
            </div>
            <div className="absolute -top-6 -left-6 z-20 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabeleireiro-ajeitando-cabelo-cliente-salao-beleza_2268x4032.webp"
                alt="Atendimento no salão"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold"></div>
              <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">Nossa História</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone font-light mb-6 leading-tight">
              Beleza que <span className="italic text-gold">Transforma</span> Vidas
            </h2>
            <p className="font-sans text-stone-light text-sm md:text-base leading-relaxed mb-5">
              Fundada em 1976, a <strong className="text-stone font-semibold">Emília Hair &amp; Care</strong> é
              referência em beleza em Cuiabá — MT. Com mais de meio século de atuação, somos especialistas em realçar a
              graciosidade natural de cada cliente, elevando autoestima e autoconfiança por meio de serviços de alta
              qualidade.
            </p>
            <p className="font-sans text-stone-light text-sm md:text-base leading-relaxed mb-5">
              Em um ambiente acolhedor que promove bem-estar, cada atendimento é conduzido com responsabilidade e
              profissionalismo. Utilizamos produtos de marcas renomadas como
              <strong className="text-stone"> Kérastase, Wella, Schwarzkopf, Keune, Lanza e MaisonVisage</strong>,
              aliadas a técnicas sempre atualizadas.
            </p>
            <p className="font-sans text-stone-light text-sm md:text-base leading-relaxed mb-8">
              Do cuidado capilar à estética facial e corporal, oferecemos uma experiência completa de autocuidado —
              porque você merece o melhor.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 border border-cream hover:border-gold/30 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.Icon className={`lucide lucide-${stat.iconName} text-gold`} width={16} height={16} />
                    <span className="font-serif text-2xl text-stone font-light">{stat.value}</span>
                  </div>
                  <p className="font-sans text-xs font-semibold text-stone uppercase tracking-wide">{stat.label}</p>
                  <p className="font-sans text-xs text-stone-light mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556599811065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone hover:bg-stone-light text-white font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg text-sm uppercase tracking-wide"
            >
              Conheça Nosso Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
