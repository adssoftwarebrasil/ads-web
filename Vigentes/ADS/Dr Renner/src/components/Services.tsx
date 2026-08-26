import { useEffect, useRef } from 'react';
import { Heart, Stethoscope, Baby, Home, User } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/';

const SERVICES = [
  {
    icon: Heart,
    title: 'Puericultura',
    subtitle: 'Acompanhamento Individualizado',
    description:
      'Cuidado contínuo e personalizado para cada criança, acompanhando saúde, crescimento e desenvolvimento com atenção às necessidades únicas de cada família.',
    image: `${BASE}individualizada.webp`,
    color: '#4C6CA3',
  },
  {
    icon: Stethoscope,
    title: 'Pediatria Geral',
    subtitle: 'Do Nascimento à Adolescência',
    description:
      'Acompanhamento completo da saúde infantil, com foco em prevenção, diagnóstico e tratamento, sempre com cuidado acolhedor e atualizado.',
    image: `${BASE}pediatria%20geral.webp`,
    color: '#4C6CA3',
  },
  {
    icon: Baby,
    title: 'Sala de Parto',
    subtitle: 'Certificado pela SBP',
    description:
      'O nascimento é um dos momentos mais marcantes da vida. Como pediatra certificado pela Sociedade Brasileira de Pediatria, levo cuidado especializado e tranquilidade para que esse início seja vivido com amor e confiança.',
    image: `${BASE}sala%20de%20parto.webp`,
    color: '#4C6CA3',
  },
  {
    icon: Home,
    title: 'Consultas Domiciliares',
    subtitle: 'Conforto e Segurança em Casa',
    description:
      'Acompanhamento pediátrico personalizado no ambiente domiciliar, com avaliação de crescimento, vacinação e orientações preventivas, garantindo praticidade para a família.',
    image: `${BASE}consultas%20domiciliares.webp`,
    color: '#4C6CA3',
  },
  {
    icon: User,
    title: 'Atendimento ao Adolescente',
    subtitle: 'De 10 a 19 Anos',
    description:
      'Acompanhamento acolhedor e sigiloso para adolescentes, com foco integral na saúde física, emocional e social, garantindo uma transição saudável da infância para a vida adulta.',
    image: `${BASE}atendimento%20ao%20adolescente.webp`,
    color: '#4C6CA3',
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 100);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="section-observe card-hover bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <Icon size={20} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs text-white/80 font-medium uppercase tracking-widest">
            {service.subtitle}
          </span>
          <h3 className="text-white text-xl font-bold leading-tight">{service.title}</h3>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>
        <a
          href="http://wa.me/553799766089"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-200 group"
        >
          Agendar consulta
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-observe text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            <Stethoscope size={13} />
            Áreas de Atuação
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Cuidado completo em cada fase
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Atendimento especializado do nascimento à adolescência, com foco na saúde integral,
            prevenção e no desenvolvimento pleno de cada criança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {SERVICES.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
