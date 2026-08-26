import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Recuperação de Rodante de Trator de Esteiras',
    description:
      'Reforma e recuperação completa de rodantes de tratores de esteira D5, D6, D7, D8 e similares. Peças com alta durabilidade e qualidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/refamaq/servicos/RECUPERA%C3%87%C3%83O%20DE%20RODANTE%20DE%20TRATOR%20DE%20ESTEIRAS.webp',
  },
  {
    title: 'Embuchamento de Máquinas Pesadas',
    description:
      'Serviço especializado em embuchamento de carregadeiras, tratores, escavadeiras, motoniveladoras, skidders e máquinas pesadas em geral.',
    image:
      'https://storage.lucasmendes.dev/site-sp/refamaq/servicos/EMBUCHAMENTO%20DE%20CARREGADEIRAS%2C%20TRATORES%20E%20M%C3%81QUINAS%20PESADAS%20EM%20GERAL.webp',
  },
  {
    title: 'Recuperação de Garfos e Escarificadores',
    description:
      'Recuperação e manutenção de garfos enleiradores, escarificadores frontais e implementos agrícolas. Prolongue a vida útil do seu equipamento.',
    image:
      'https://storage.lucasmendes.dev/site-sp/refamaq/servicos/RECUPERA%C3%87%C3%83O%20DE%20GARFOS%20ENLEIRADORES%20E%20ESCARIFICADORES.webp',
  },
  {
    title: 'Serviços de Torno e Solda',
    description:
      'Usinagem em torno mecânico e solda especializada para máquinas pesadas, implementos e estruturas metálicas de alta resistência.',
    image:
      'https://storage.lucasmendes.dev/site-sp/refamaq/servicos/SERVI%C3%87OS%20DE%20TORNO%20E%20SOLDA%20EM%20GERAL.webp',
  },
  {
    title: 'Pintura Industrial de Tratores e Máquinas',
    description:
      'Pintura profissional de tratores de esteiras, carregadeiras e máquinas pesadas com acabamento de alta qualidade e durabilidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/refamaq/servicos/PINTURA%20TRATOR%20ESTEIRAS.webp',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block text-[#466fc5] font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#373536] mb-4">
            Soluções Completas para
            <span className="text-[#466fc5]"> Máquinas Pesadas</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Há mais de 30 anos oferecemos serviços especializados de recuperação, reforma e manutenção de equipamentos agrícolas e florestais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={i * 100} />
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
  service: (typeof services)[0];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243b8e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-base font-bold text-[#373536] mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
          {service.description}
        </p>
        <a
          href="http://wa.me/5566984028763?text=Olá! Gostaria de saber mais sobre o serviço: {service.title}"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#466fc5] font-semibold text-sm hover:text-[#243b8e] transition-colors"
        >
          Solicitar Orçamento
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
