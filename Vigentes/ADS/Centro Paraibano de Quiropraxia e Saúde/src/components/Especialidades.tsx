import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  image: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/Quiropraxia.jpg',
    badge: 'Mais Procurado',
    title: 'Método Clix',
    description:
      'Trabalhamos com um método exclusivo, desenvolvido ao longo de mais de 16 anos, que integra quiropraxia, terapia manual e reequilíbrio biomecânico para identificar e tratar a causa real da dor — não apenas os sintomas.',
    tags: ['Tratamento Inovador', 'Alívio Rápido', 'Sem Dor', 'Mobilidade'],
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/Pilates.jpg',
    badge: 'Clínico',
    title: 'Pilates Clínico',
    description:
      'Pilates com foco clínico para ganho de força muscular, equilíbrio, flexibilidade e reabilitação. Ideal como complemento terapêutico para potencializar seus resultados.',
    tags: ['Reabilitação', 'Fortalecimento', 'Flexibilidade', 'Equilíbrio'],
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/Fisioterapia.jpg',
    badge: 'Especializado',
    title: 'Fisioterapia',
    description:
      'Alívio de dores musculares, alinhamento postural, acompanhamento de gestantes, volta ao esporte, reabilitação pré e pós-operatória, contusões e lesões.',
    tags: ['Pós-operatório', 'Fisioterapia Pélvica', 'Gestantes', 'Esportiva'],
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight">
            Referência e exclusividade com o <span className="text-cyan-brand">Método Clix</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Uma abordagem avançada que vai direto à causa do problema. Aliamos o Método Clix à
            fisioterapia e ao pilates para transformar a sua saúde e eliminar suas dores.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-cyan-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                    {s.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-navy/5 text-navy text-xs font-medium px-3 py-1 rounded-full border border-navy/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-200 group/btn"
                >
                  Quero saber mais
                  <ArrowRight
                    width={16}
                    height={16}
                    className="lucide lucide-arrow-right group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Também oferecemos: Quiropraxia · Método Busquet · Estética
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg text-base"
          >
            Agendar Consulta Agora
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
