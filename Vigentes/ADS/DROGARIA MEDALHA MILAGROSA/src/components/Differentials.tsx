import { useEffect, useRef } from 'react';
import { Truck, Clock, BadgeCheck, FlaskConical, ShieldCheck, HeartPulse } from 'lucide-react';

const items = [
  {
    icon: Truck,
    title: 'Entrega Gratuita',
    description: 'Receba seus medicamentos e produtos em casa sem custo adicional em toda Ipameri.',
    color: 'bg-blue-50 text-brand-blue',
    border: 'border-brand-blue/20',
  },
  {
    icon: Clock,
    title: 'Plantão 24 Horas',
    description: 'Nossa farmácia não para. Atendimento presencial disponível a qualquer hora do dia ou da noite.',
    color: 'bg-red-50 text-brand-red',
    border: 'border-brand-red/20',
  },
  {
    icon: FlaskConical,
    title: 'Melhor Manipulação',
    description: 'Referência regional em manipulação de medicamentos, com qualidade reconhecida pelos nossos clientes.',
    color: 'bg-blue-50 text-brand-blue',
    border: 'border-brand-blue/20',
  },
  {
    icon: BadgeCheck,
    title: 'Melhores Preços',
    description: 'Preços competitivos que fazem a diferença no bolso. Economize sem abrir mão da qualidade.',
    color: 'bg-red-50 text-brand-red',
    border: 'border-brand-red/20',
  },
  {
    icon: HeartPulse,
    title: '44 Anos de Experiência',
    description: 'Quatro décadas de dedicação à saúde da comunidade de Ipameri e região.',
    color: 'bg-blue-50 text-brand-blue',
    border: 'border-brand-blue/20',
  },
  {
    icon: ShieldCheck,
    title: 'Produtos de Qualidade',
    description: 'Medicamentos, perfumaria e cosméticos de marcas confiáveis e com procedência garantida.',
    color: 'bg-red-50 text-brand-red',
    border: 'border-brand-red/20',
  },
];

export default function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="section-title">Nossos Diferenciais</h2>
          <p className="section-subtitle text-center mx-auto">
            Mais do que uma farmácia — somos parceiros da sua saúde há mais de quatro décadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`reveal card-hover bg-white rounded-2xl p-7 border ${item.border} shadow-sm`}
              >
                <div className={`w-13 h-13 ${item.color} rounded-xl flex items-center justify-center mb-5 w-14 h-14`}>
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="text-brand-blue font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '44', label: 'Anos de Experiência' },
            { value: '24h', label: 'Plantão Disponível' },
            { value: '100%', label: 'Entrega Gratuita' },
            { value: '4.4★', label: 'Avaliação Google' },
          ].map((stat, i) => (
            <div
              key={i}
              className="reveal counter-card rounded-2xl p-6 text-center text-white"
            >
              <p className="text-3xl md:text-4xl font-black mb-1">{stat.value}</p>
              <p className="text-white/75 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
