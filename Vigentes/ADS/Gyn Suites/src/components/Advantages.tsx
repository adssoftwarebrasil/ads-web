import { Settings, Heart, Bed, MapPin, LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Advantage {
  title: string;
  description?: string;
  Icon: LucideIcon;
}

const advantages: Advantage[] = [
  { title: 'Serviços sob Medida', Icon: Settings },
  { title: 'Ambiente Acolhedor', Icon: Heart },
  {
    title: 'Conforto e Praticidade na Hospedagem',
    description: 'Suítes equipadas para uma estadia aconchegante e produtiva.',
    Icon: Bed,
  },
  {
    title: 'Localização Privilegiada',
    description: 'Perto de centros empresariais e principais rodovias de Goiânia.',
    Icon: MapPin,
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(51,58,114)] mb-4">
            VANTAGENS
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Descubra as Vantagens de Escolher GYN SUITES
          </p>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Nosso compromisso é oferecer uma experiência diferenciada com serviços
            personalizados para atender suas necessidades.
          </p>
          <div className="w-24 h-1 bg-[rgb(251,246,199)] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[rgb(51,58,114)] rounded-2xl flex items-center justify-center group-hover:bg-[rgb(51,58,114)]/90 transition-colors duration-300">
                  <Icon width={32} height={32} className="text-[rgb(251,246,199)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[rgb(51,58,114)] mb-3">{title}</h3>
                  {description && (
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(51,58,114)] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[rgb(51,58,114)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
