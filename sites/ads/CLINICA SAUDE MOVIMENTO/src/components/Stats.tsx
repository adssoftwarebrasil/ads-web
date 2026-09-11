import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: '+10', suffix: '', label: 'anos de atuação' },
  { value: '4.9', suffix: '/5 ★', label: 'avaliação no Google' },
  { value: '14–100', suffix: '', label: 'anos de idade atendidos' },
  { value: '100%', suffix: '', label: 'protocolos personalizados' },
];

export default function Stats() {
  return (
    <section className="bg-clinic-teal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-clinic-gold mb-2">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-clinic-gold hover:bg-clinic-gold-light text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-clinic-gold/20 hover:-translate-y-1"
          >
            <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
            Agendar minha avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
