import { WHATSAPP_DEFAULT } from '../constants';

const stats = [
  { value: '16+', label: 'anos no mercado', delay: '0ms' },
  { value: '3250+', label: 'produtos', delay: '100ms' },
  { value: '6500+', label: 'clientes satisfeitos', delay: '200ms' },
  { value: '32+', label: 'parceiros comerciais', delay: '300ms' },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20 bg-[rgb(34,34,34)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-1000 opacity-100 translate-y-0"
              style={{ transitionDelay: stat.delay }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[rgb(246,239,3)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-white">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
