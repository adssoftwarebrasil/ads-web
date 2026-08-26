import { SERVICES, WHATSAPP_URL_FULL } from '../data';

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block text-[#0C4E9D] text-sm font-semibold tracking-widest uppercase mb-4">
            Portfólio Completo
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Soluções completas em prótese dentária para dentistas e protéticos exigentes.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-[#0C4E9D] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`service-card group relative glass-card rounded-2xl p-6 blue-glow-hover cursor-default section-reveal ${
                service.featured ? 'border border-[#0C4E9D]/40' : ''
              }`}
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              {service.featured && (
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold text-[#0C4E9D] bg-[#0C4E9D]/10 px-2 py-0.5 rounded-full border border-[#0C4E9D]/30">
                    Destaque
                  </span>
                </div>
              )}
              <div className="service-icon w-10 h-10 rounded-xl bg-[#0C4E9D]/15 border border-[#0C4E9D]/20 flex items-center justify-center mb-4 transition-transform duration-400">
                <service.icon className="text-[#0C4E9D]" width={18} height={18} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#7db5ff] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center section-reveal">
          <a
            href={WHATSAPP_URL_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0C4E9D] hover:bg-[#1a6fd4] text-white font-semibold rounded-xl transition-all duration-300 blue-glow blue-glow-hover"
          >
            Solicitar Serviço
          </a>
        </div>
      </div>
    </section>
  );
}
