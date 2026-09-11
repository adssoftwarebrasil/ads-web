import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  image: string;
  description: string;
  badge?: string;
}

const services: Service[] = [
  {
    title: 'Adesivos',
    image: 'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/adesivos.webp',
    description:
      'Adesivos recortados, impressos, jateados e perfurados para vitrines, veículos, paredes e equipamentos. Alta durabilidade e acabamento profissional.',
    badge: 'Alta demanda',
  },
  {
    title: 'Lonas & Banners',
    image: 'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/lonas-e-banners.webp',
    description:
      'Impressão digital de alta resolução em lonas tensionadas, front-light, back-light e banners para eventos, feiras e fachadas externas.',
  },
  {
    title: 'Fachadas Comerciais',
    image:
      'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/fachada-comercial.webp',
    description:
      'Projetos completos de fachadas que valorizam seu ponto comercial e atraem mais clientes. Estrutura em ACM, inox, madeira e muito mais.',
  },
  {
    title: 'Letras Caixa & Luminosos',
    image:
      'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/letra-caixa-e-luminosos.webp',
    description:
      'Letras e logotipos em caixa com iluminação em LED. Visibilidade de dia e de noite com elegância e impacto visual garantidos.',
    badge: 'Destaque',
  },
  {
    title: 'Totem & Placas em Acrílico',
    image:
      'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/totem-e-placa-de-acrilico.webp',
    description:
      'Totens de sinalização, placas e displays em acrílico cristal, colorido ou espelhado. Recorte a laser com precisão e perfeição nos detalhes.',
  },
  {
    title: 'Envelopamento de Frotas',
    image: 'https://storage.lucasmendes.dev/site-sp/al%20personaliza/products/envelopamento.webp',
    description:
      'Transforme seus veículos em mídias móveis. Envelopamento total ou parcial com adesivos de alta performance que duram anos nas estradas.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#102694] font-semibold text-sm uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Soluções completas em <span className="text-[#102694]">Comunicação Visual</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Do projeto à produção, entregamos qualidade e criatividade para destacar sua marca no
            mercado de Sinop e região.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102694]/60 to-transparent"></div>
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-[#FFC734] text-[#102694] text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#102694] font-semibold text-sm hover:text-[#3E4194] transition-colors group/link"
                >
                  Solicitar orçamento
                  <ArrowRight
                    width={15}
                    height={15}
                    strokeWidth={2}
                    className="lucide lucide-arrow-right group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#102694] hover:bg-[#3E4194] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver todos os serviços
            <ArrowRight width={18} height={18} strokeWidth={2} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
