import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-12 md:py-20 bg-light">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-purple mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar ou entre em contato
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58593.13785714285!2d-46.188611!3d-23.5224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63dda7be1adf%3A0x7ca97ca5e4f6e4db!2sMogi%20das%20Cruzes%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa JC Baterias Mogi"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-6">
            <div
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fadeInRight"
              style={{ animationDelay: '0s', animationFillMode: 'both' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} className="lucide lucide-map-pin text-primary-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-purple mb-1">Endereço</h3>
                  <a
                    href="https://maps.google.com/?q=Mogi+das+Cruzes+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-purple transition-colors inline-flex items-center gap-1"
                  >
                    Mogi das Cruzes - SP
                    <ExternalLink size={16} className="lucide lucide-external-link " />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fadeInRight"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} className="lucide lucide-phone text-primary-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-purple mb-1">Telefones</h3>
                  <a
                    href="tel:1125989022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-purple transition-colors inline-flex items-center gap-1"
                  >
                    (11) 2598-9022 / (11) 2598-9042
                    <ExternalLink size={16} className="lucide lucide-external-link " />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fadeInRight"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock size={24} className="lucide lucide-clock text-primary-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-purple mb-1">Horário</h3>
                  <p className="text-gray-700">Atendimento 24 horas</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Mogi+das+Cruzes+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
