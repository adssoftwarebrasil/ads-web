import { ArrowRight } from 'lucide-react';
import { openWhatsApp, waLink } from '../lib/site';

interface Service {
  title: string;
  category: string;
  description: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    title: 'Restituição Fiscal',
    category: 'Fiscal',
    description: 'Dedutibilidade fiscal para produtos obsoletos ou sem valor comercial, conforme Decreto Nº 9.580/2018.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-restituicao-fiscal.webp',
  },
  {
    title: 'Descomissionamento',
    category: 'Industrial',
    description: 'Encerramento responsável de empreendimentos, com mitigação de impactos e recuperação de áreas degradadas.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-descomissionamento.webp',
  },
  {
    title: 'Descaracterização',
    category: 'Segurança',
    description: 'Descaracterização seguro de insumos empresariais, garantindo sigilo e impedindo reutilização não autorizada.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-descaracterizacao.webp',
  },
  {
    title: 'Descontaminação',
    category: 'Tratamento',
    description: 'Remoção e alteração química de contaminantes, tornando materiais seguros para manuseio.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-descontaminacao.webp',
  },
  {
    title: 'Coprocessamento / Blendagem',
    category: 'Energia',
    description: 'Transformação de resíduos em combustível alternativo (CDR) de alto poder calorífico para indústrias.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-coprocessamento-blendagem.webp',
  },
  {
    title: 'Autoclave',
    category: 'Esterilização',
    description: 'Esterilização por vapor e pressão em alta temperatura, eliminando agentes patogênicos.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-autoclave.webp',
  },
  {
    title: 'Incineração',
    category: 'Tratamento',
    description: 'Queima controlada de resíduos perigosos em altas temperaturas (800-1.250ºC) para eliminação segura.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-incineracao.webp',
  },
  {
    title: 'Armazenamento',
    category: 'Logística',
    description: 'Guarda temporária autorizada de resíduos até reciclagem, tratamento ou descarte adequado.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-armazenamento.webp',
  },
  {
    title: 'Hotelaria, Condomínios, Clubes',
    category: 'Comercial',
    description: 'Soluções especializadas para gestão de resíduos em estabelecimentos comerciais e residenciais.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-hotelaria-condominios-clubes.webp',
  },
  {
    title: 'Gestão de Resíduos',
    category: 'Gestão',
    description: 'Triagem, separação e armazenamento de resíduos conforme normas ambientais vigentes.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-gestao-de-residuos.webp',
  },
  {
    title: 'Descarte Seguro',
    category: 'Compliance',
    description: 'Descarte de materiais em total conformidade com legislações ambientais federais e estaduais.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-descarte-seguro.webp',
  },
  {
    title: 'Coleta e Transporte',
    category: 'Logística',
    description: 'Coleta on-site e transporte seguro de resíduos com frota própria e rastreada.',
    image: 'https://storage.lucasmendes.dev/site-sp/indcom/servicos/nossos-servicos-coleta-e-transporte-de-residuos.webp',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-gradient-to-b from-[rgb(245,247,250)] to-white py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-8">
          <div className="text-sm font-semibold uppercase tracking-wider text-[rgb(130,196,92)] mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,120,80)] mb-6">
            Soluções completas em gestão de resíduos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oferecemos uma gama completa de serviços especializados, adaptados às necessidades específicas do seu negócio e sempre em conformidade com as legislações ambientais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              onClick={() =>
                openWhatsApp(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`)
              }
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-[rgba(40,120,80,0.9)] backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                  {service.category}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[rgb(40,120,80)] mb-3 group-hover:text-[rgb(130,196,92)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[rgba(45,55,65,0.7)] leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-[rgb(130,196,92)] group-hover:gap-3 transition-all mt-auto">
                  Saiba Mais
                  <ArrowRight className="lucide lucide-arrow-right w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 transition-all duration-700 delay-300 opacity-0 translate-y-8">
          <a
            href={waLink('Olá! Gostaria de falar com um especialista sobre consultoria geral.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border-2 border-[rgb(130,196,92)] text-[rgb(40,120,80)] rounded-full font-semibold hover:bg-gradient-to-r hover:from-[rgb(40,120,80)] hover:to-[rgb(130,196,92)] hover:text-white hover:border-transparent transition-all"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
