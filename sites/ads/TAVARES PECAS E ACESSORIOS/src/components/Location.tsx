import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Localização</p>
          <h2 className="section-title">
            Venha nos <span className="text-brand-red">Visitar</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Estamos bem localizados em Ribeirão Preto, fácil de encontrar e com estacionamento acessível na região.
          </p>
          <div className="section-divider mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col gap-5">
            <div className="bg-brand-gray rounded-2xl p-6 border border-brand-gray-mid">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white rounded-xl p-3 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-1">Endereço</h3>
                  <p className="text-brand-gray-text text-sm leading-relaxed">
                    Av. Cel. Quito Junqueira, 547
                    <br />
                    Campos Elísios
                    <br />
                    Ribeirão Preto – SP
                    <br />
                    CEP: 14085-620
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-brand-gray rounded-2xl p-6 border border-brand-gray-mid">
              <div className="flex items-start gap-4">
                <div className="bg-brand-navy text-white rounded-xl p-3 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-brand-gray-text">Segunda a Sexta</span>
                      <span className="font-semibold text-brand-black">08h – 18h</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-brand-gray-text">Sábado</span>
                      <span className="font-semibold text-brand-black">08h – 12h</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-brand-gray-text">Domingo</span>
                      <span className="font-semibold text-red-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tavares+Auto+pe%C3%A7as,+Ribeirão+Preto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Navigation size={18} />
              Como Chegar
            </a>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-brand-gray-mid h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7881966700024!2d-47.79598992473974!3d-21.160825680521786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfa8aac9aed7%3A0x43c70255f48e4f0e!2sTavares%20Auto%20pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1774287835713!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Tavares Auto Peças"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
