import { CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/cacambas-amarelas-empilhadas-terreno-de-construcao_382x510.webp',
    alt: 'Caçamba Estacionária',
    tag: 'Para obras, reformas e limpeza',
    title: 'Caçamba Estacionária',
    description:
      'Ideal para residências, construtoras e empresas. Entregamos a caçamba no local indicado, recolhemos quando estiver cheia e damos a destinação correta ao entulho — tudo sem burocracia.',
    features: [
      'Entrega no mesmo dia ou em poucas horas',
      'Ideal para entulho, terra, madeira e resíduos de obra',
      'Locação por prazo flexível',
      'Retirada pontual e sem surpresas',
    ],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhao-branco-cacambas-amarelas-estacionado_680x510.webp',
    alt: 'Caminhão Truck 12m³',
    tag: 'Maior capacidade, mais economia',
    title: 'Caminhão Truck 12m³',
    description:
      'Para volumes maiores de resíduo ou cargas que exigem mais capacidade, nosso caminhão truck de 12 metros é a solução. Perfeito para grandes reformas, demolições e transporte de materiais.',
    features: [
      'Capacidade de 12 metros cúbicos',
      'Ideal para grandes obras e demolições',
      'Motoristas experientes e pontuais',
      'Transporte seguro de materiais pesados',
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/15 text-[#ec8f2b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            O que oferecemos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#343434] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-[#343434]/60 text-lg max-w-xl mx-auto">
            Soluções completas em locação de caçambas para cada tipo de projeto, entregues com
            agilidade e responsabilidade ambiental.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#343434]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ffaf24] text-[#343434] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-extrabold text-[#343434] mb-3">{service.title}</h3>
                <p className="text-[#343434]/65 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[#343434]/80"
                    >
                      <CheckCircle2
                        className="lucide lucide-check-circle2 text-[#ffaf24] mt-0.5 shrink-0"
                        width={17}
                        height={17}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="http://wa.me/553491233322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#343434] hover:bg-[#ffaf24] text-[#fefefe] hover:text-[#343434] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 group/btn"
                >
                  Solicitar este serviço
                  <ArrowRight
                    className="lucide lucide-arrow-right group-hover/btn:translate-x-1 transition-transform"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
