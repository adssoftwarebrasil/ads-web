import { Stethoscope, Zap, Activity, Target, Scan, Video, Microscope, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image?: string;
  cardClass: string;
  iconWrapClass: string;
  icon: LucideIcon;
  iconClass: string;
}

const services: Service[] = [
  {
    title: 'Consulta Coloproctológica',
    description: 'Avaliação completa das doenças do intestino, reto e ânus com diagnóstico preciso.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/consulta.webp',
    cardClass: 'bg-blue-50 border-blue-100',
    iconWrapClass: 'text-[#144170] bg-blue-100',
    icon: Stethoscope,
    iconClass: 'lucide lucide-stethoscope ',
  },
  {
    title: 'Cirurgia a Laser (CO2)',
    description: 'Tratamento moderno e minimamente invasivo de hemorroidas, fístulas e fissuras com laser.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/laser-de-co2.webp',
    cardClass: 'bg-amber-50 border-amber-100',
    iconWrapClass: 'text-amber-600 bg-amber-100',
    icon: Zap,
    iconClass: 'lucide lucide-zap ',
  },
  {
    title: 'Manometria Anorretal',
    description: 'Exame funcional que avalia a pressão e funcionamento do esfíncter anal e reto.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/manometria.webp',
    cardClass: 'bg-rose-50 border-rose-100',
    iconWrapClass: 'text-rose-600 bg-rose-100',
    icon: Activity,
    iconClass: 'lucide lucide-activity ',
  },
  {
    title: 'Ligadura Elástica',
    description: 'Tratamento minimamente invasivo de hemorroidas internas realizado no próprio consultório.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/ligadura-elastica.webp',
    cardClass: 'bg-indigo-50 border-indigo-100',
    iconWrapClass: 'text-indigo-600 bg-indigo-100',
    icon: Target,
    iconClass: 'lucide lucide-target ',
  },
  {
    title: 'Colonoscopia',
    description: 'Exame endoscópico do intestino grosso para diagnóstico de pólipos, tumores e inflamações.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/colonoscopia.webp',
    cardClass: 'bg-cyan-50 border-cyan-100',
    iconWrapClass: 'text-[#009FC2] bg-cyan-100',
    icon: Scan,
    iconClass: 'lucide lucide-scan ',
  },
  {
    title: 'Videolaparoscopia',
    description: 'Cirurgia minimamente invasiva com câmera para tratamento de diversas patologias abdominais.',
    cardClass: 'bg-teal-50 border-teal-100',
    iconWrapClass: 'text-teal-600 bg-teal-100',
    icon: Video,
    iconClass: 'lucide lucide-video ',
  },
  {
    title: 'Tempo de Trânsito Colônico',
    description: 'Exame para avaliação do tempo de passagem do conteúdo pelo intestino grosso.',
    image: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/servicos/tempo-de-transito-02.webp',
    cardClass: 'bg-green-50 border-green-100',
    iconWrapClass: 'text-green-600 bg-green-100',
    icon: Microscope,
    iconClass: 'lucide lucide-microscope ',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#144170] leading-tight">
            Tratamentos Especializados para
            <span className="text-[#009FC2]"> Sua Saúde</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Oferecemos uma gama completa de serviços em coloproctologia, com tecnologia moderna e foco total no
            bem-estar e recuperação do paciente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg cursor-pointer h-full ${service.cardClass}`}
              >
                {service.image && (
                  <div className="w-full h-48 sm:h-56 overflow-hidden rounded-xl mb-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${service.iconWrapClass}`}
                  >
                    <Icon width={28} height={28} className={service.iconClass} />
                  </div>
                  <h3 className="text-[#144170] font-bold text-lg leading-snug">{service.title}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{service.description}</p>
                </div>
                <button className="text-[#009FC2] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-2">
                  Saiba mais
                  <ArrowRight width={14} height={14} className="lucide lucide-arrow-right transition-transform " />
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/553399711500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#144170] hover:bg-[#0f2f5a] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Agendar Consulta ou Exame
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
