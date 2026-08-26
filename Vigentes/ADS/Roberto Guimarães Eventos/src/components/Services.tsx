import { Music2, Lightbulb, MonitorPlay, Tent, Droplets, Layers, Cpu, Zap, Grid3x3, Wind, Camera, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Music2,
    title: 'Sonorização Profissional',
    desc: 'Sistemas de som para shows nacionais, palestras, casamentos, formaturas e eventos corporativos com potência e clareza.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminação para Eventos',
    desc: 'Iluminação decorativa e técnica para criar atmosferas únicas. Luz para shows, 15 anos, casamentos e feiras.',
  },
  {
    icon: MonitorPlay,
    title: 'Painel de LED',
    desc: 'Painéis de LED de alta resolução para transmissões, apresentações e cenografia de impacto.',
  },
  {
    icon: Layers,
    title: 'Palcos e Camarotes',
    desc: 'Palcos profissionais para shows nacionais e camarotes estruturados para grandes eventos e festivais.',
  },
  {
    icon: Tent,
    title: 'Tendas e Coberturas',
    desc: 'Tendas galpão, coberturas de alumínio 20x50, tendas para feiras, dias de campo e eventos ao ar livre.',
  },
  {
    icon: Droplets,
    title: 'Banheiro Químico de Luxo',
    desc: 'Trailer de banheiro químico de luxo e modelos convencionais para eventos de todos os portes e públicos.',
  },
  {
    icon: Grid3x3,
    title: 'Estruturas de Alumínio',
    desc: 'Treliças, grids, backdrops, piso Paris e piso Deck. Estruturas para montagem de qualquer evento.',
  },
  {
    icon: Zap,
    title: 'Gerador de Energia',
    desc: 'Geradores de energia para garantir que nenhum evento fique sem luz. Suporte completo para grandes produções.',
  },
  {
    icon: Wind,
    title: 'Turbo Jet CO₂ & Efeitos',
    desc: 'Kinnect Lights, turbo jet de CO₂ e efeitos especiais para criar momentos cinematográficos no seu evento.',
  },
  {
    icon: Cpu,
    title: 'Piso Paris & Piso Deck',
    desc: 'Pisos premium para stands, feiras e eventos corporativos. Elegância e praticidade na montagem.',
  },
  {
    icon: Camera,
    title: 'Gradil de Proteção',
    desc: 'Gradis metálicos para controle de acesso e segurança em shows, festivais e grandes aglomerações.',
  },
  {
    icon: Award,
    title: 'Eventos Corporativos',
    desc: 'Estrutura completa para feiras, congressos, lançamentos e eventos de mérito empresarial.',
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="servicos" className="py-24 bg-[rgb(3,7,8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
            O Que Oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-4">
            Estrutura Completa para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
              Qualquer Evento
            </span>
          </h2>
          <p className="text-[rgb(245,244,249)]/60 max-w-2xl mx-auto text-base sm:text-lg">
            Da sonorização ao palco, do banheiro químico à iluminação — entregamos tudo que você precisa em um único fornecedor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: { icon: React.ElementType; title: string; desc: string };
  delay: number;
}) {
  const { ref, inView } = useInView(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group p-6 rounded-2xl bg-[rgb(39,41,45)] border border-white/5 hover:border-[#C9962F]/40 transition-all duration-500 hover:bg-[rgb(39,41,45)]/80 hover:shadow-xl hover:shadow-[#C9962F]/5 cursor-default ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-11 h-11 rounded-xl bg-[#C9962F]/15 flex items-center justify-center mb-4 group-hover:bg-[#C9962F]/25 transition-colors">
        <Icon size={22} className="text-[#C9962F]" />
      </div>
      <h3 className="text-[rgb(245,244,249)] font-bold text-base mb-2">{service.title}</h3>
      <p className="text-[rgb(245,244,249)]/55 text-sm leading-relaxed">{service.desc}</p>
    </div>
  );
}
