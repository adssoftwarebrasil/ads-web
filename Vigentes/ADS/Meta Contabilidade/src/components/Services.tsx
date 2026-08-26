import { SERVICES, WHATSAPP_SERVICOS } from '../data';

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand mb-4">
            Soluções Contábeis Completas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Da abertura à gestão diária, cuidamos de cada detalhe para que você foque no que
            realmente importa: crescer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20 animate-on-scroll ${service.delay} ${
                  service.extraClass ?? ''
                }`}
              >
                <div className="w-12 h-12 bg-brand/10 group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-brand group-hover:text-primary transition-colors duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center animate-on-scroll">
          <a
            href={WHATSAPP_SERVICOS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Consultoria Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
