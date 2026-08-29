import { Sparkles, Home, Calendar, LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  image: string;
  Icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Limpeza Diária',
    image:
      'https://storage.lucasmendes.dev/site-sp/gynsuite%2FLimpeza%20Dia%CC%81ria.jpg',
    Icon: Sparkles,
  },
  {
    title: 'Suítes novas e funcionais em Goiânia',
    image:
      'https://storage.lucasmendes.dev/site-sp/gynsuite%2FSui%CC%81tes%20novas%20e%20funcionais%20em%20Goia%CC%82nia.jpg',
    Icon: Home,
  },
  {
    title: 'Reservas Antecipadas',
    image:
      'https://storage.lucasmendes.dev/site-sp/gynsuite%2FReservas%20Antecipadas.jpg',
    Icon: Calendar,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(51,58,114)] mb-4">
            Nossos serviços
          </h2>
          <p className="text-xl text-gray-600 mt-4">Explore Nossos Serviços</p>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços para garantir que sua estadia seja perfeita e
            confortável.
          </p>
          <div className="w-24 h-1 bg-[rgb(251,246,199)] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, image, Icon }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(51,58,114)]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Icon width={40} height={40} className="text-[rgb(251,246,199)]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(51,58,114)] mb-4">{title}</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[rgb(51,58,114)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(51,58,114)]/90 transition-all duration-300"
                >
                  COMPRAR
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(251,246,199)] text-[rgb(51,58,114)] px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
