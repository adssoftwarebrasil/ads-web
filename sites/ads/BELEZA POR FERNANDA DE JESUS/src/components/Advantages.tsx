import { UserCheck, Star, Heart } from 'lucide-react';
import { WHATSAPP_URL, ACCENT, SOFT_BG, stats } from '../data';

const advantages = [
  {
    Icon: UserCheck,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção especial.',
  },
  {
    Icon: Star,
    title: 'Produtos de Alta Qualidade',
    description: 'Trabalhamos apenas com as melhores marcas.',
  },
  {
    Icon: Heart,
    title: 'Ambiente Aconchegante',
    description: 'Nosso salão é um espaço confortável e relaxante.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: SOFT_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Vantagens de Escolher Nosso Salão
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que somos a escolha certa para sua beleza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 text-white rounded-2xl mb-6"
                style={{ backgroundColor: ACCENT }}
              >
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
              <p className="text-gray-600 text-lg">{description}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: ACCENT }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: ACCENT }}
          >
            Agendar um horário
          </a>
        </div>
      </div>
    </section>
  );
}
