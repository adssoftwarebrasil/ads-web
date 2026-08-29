import { WHATSAPP_URL, ACCENT, SOFT_BG, services } from '../data';

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: SOFT_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-wider uppercase block mb-2"
            style={{ color: ACCENT }}
          >
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossos serviços exclusivos para realçar sua beleza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
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
