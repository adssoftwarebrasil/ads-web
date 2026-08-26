import { Building, FileText, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const services: Service[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fservicos%20bancarios.webp',
    icon: Building,
    title: 'Serviços Bancários',
    description: 'Transporte seguro de documentos e valores bancários com total confidencialidade e agilidade.',
    tag: 'Segurança e Confidencialidade',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fservicosemcartorio.webp',
    icon: FileText,
    title: 'Serviços em Cartórios',
    description: 'Coleta e entrega de documentos cartoriais com protocolo e rastreamento completo do processo.',
    tag: 'Atendimento Prioritário',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fentregademalotes.webp',
    icon: Package,
    title: 'Entrega de Malotes',
    description: 'Serviço especializado em transporte de malotes corporativos com garantia de pontualidade.',
    tag: 'Rapidez e Eficiência',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[rgb(0,38,100)] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8 text-[rgb(38,129,196)]" />
                    <h3 className="text-2xl font-bold text-[rgb(0,38,100)]">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  <div className="pt-2">
                    <span className="inline-block bg-[rgb(38,129,196)]/10 text-[rgb(38,129,196)] px-4 py-2 rounded-full text-sm font-semibold">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
