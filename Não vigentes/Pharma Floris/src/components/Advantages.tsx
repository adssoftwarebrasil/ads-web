import { TrendingUp, Award, MapPin, Users } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const stats = [
  {
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up w-6 h-6 md:w-8 md:h-8 text-white',
    value: '6+',
    label: 'anos de experiência',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-6 h-6 md:w-8 md:h-8 text-white',
    value: '18+',
    label: 'tipos de produtos',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin w-6 h-6 md:w-8 md:h-8 text-white',
    value: '1+',
    label: 'centros de atendimento',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-6 h-6 md:w-8 md:h-8 text-white',
    value: '10.000+',
    label: 'clientes atendidos',
  },
];

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="py-20 md:py-32 bg-gradient-to-br from-[rgb(88,171,218)]/5 to-[rgb(130,116,187)]/5 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[rgb(130,116,187)] font-semibold text-sm uppercase tracking-wide">
              Nossas Vantagens
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vantagens de Escolher
            <span className="block text-[rgb(88,171,218)] mt-2">
              Pharma Floris
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conheça as razões que fazem da Pharma Floris a melhor escolha para
            suas necessidades de manipulação.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <s.Icon width={24} height={24} className={s.iconClass} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[rgb(88,171,218)] transition-colors duration-300">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=pharmafloris%2Fajax.png&version_id=null"
            alt="Vantagens Pharma Floris"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-8 md:p-12 w-full">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Atendimento Especializado
              </h3>
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                Profissionais capacitados sempre prontos para ajudar você a
                encontrar as melhores soluções para sua saúde.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-[rgb(88,171,218)] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
