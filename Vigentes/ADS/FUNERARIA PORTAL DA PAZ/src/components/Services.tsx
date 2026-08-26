import { Plane, Car, Heart, Package, Flower2, MapPin, Building2, Users } from 'lucide-react';

const SERVICES = [
  {
    icon: <Car size={28} />,
    title: 'Translado Nacional',
    description: 'Transporte terrestre, aéreo ou fluvial para qualquer parte do Brasil com toda segurança e respeito.',
  },
  {
    icon: <Plane size={28} />,
    title: 'Transporte Aéreo',
    description: 'Remoção e traslado aéreo nacional com agilidade, documentação completa e acompanhamento especializado.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Tanatopraxia',
    description: 'Procedimento técnico e humanizado de conservação, realizado por profissionais capacitados e certificados.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Capelas',
    description: 'Espaços acolhedores e dignos para a realização de velórios com conforto e amparo à família.',
  },
  {
    icon: <Package size={28} />,
    title: 'Urnas e Roupas',
    description: 'Amplo acervo de urnas, roupas, véus e adornos para um último adeus com distinção e carinho.',
  },
  {
    icon: <Flower2 size={28} />,
    title: 'Coroas e Arranjos',
    description: 'Coroas naturais e artificiais, arranjos florais e homenagens personalizadas para cada ocasião.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Venda de Sepulturas',
    description: 'Assessoria completa na aquisição de sepulturas em cemitérios parceiros na região metropolitana.',
  },
  {
    icon: <Users size={28} />,
    title: 'Convênios Empresariais',
    description: 'Planos e convênios para empresas com cobertura para colaboradores e dependentes, com tabelas especiais.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[rgb(2,12,4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[rgb(156,133,92)] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Serviços Completos para<br className="hidden sm:block" />{' '}
            <span className="text-[rgb(202,183,144)]">Cada Necessidade</span>
          </h2>
          <p className="text-[rgb(146,171,185)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Da remoção ao sepultamento, oferecemos suporte integral com profissionalismo e
            sensibilidade em cada etapa desse momento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-[rgb(23,56,32)] bg-opacity-40 border border-[rgb(55,104,68)] border-opacity-30 rounded-2xl p-6 hover:bg-[rgb(23,56,32)] hover:border-[rgb(110,92,59)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[rgb(55,104,68)] bg-opacity-30 text-[rgb(156,133,92)] group-hover:bg-[rgb(110,92,59)] group-hover:text-white transition-all duration-300 mb-5">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-3">{service.title}</h3>
              <p className="text-[rgb(146,171,185)] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="http://wa.me/5591981493608?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(55,104,68)] hover:bg-[rgb(23,56,32)] text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-2xl border border-[rgb(55,104,68)]"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
