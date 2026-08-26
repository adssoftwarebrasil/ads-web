import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const hours = [
  { day: 'Segunda a Sexta', time: '08:00 às 19:00' },
  { day: 'Sábado', time: '09:00 às 17:00' },
  { day: 'Domingo', time: 'Fechado' },
];

const serviceAreas = ['Pinhais (inteiro)', 'Bairro Alto', 'Boa Vista', 'Quatro Barras'];

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-brand-blue-light text-brand-blue text-sm font-semibold rounded-full mb-3">
            Onde estamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Localização & Contato
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Venha nos visitar ou entre em contato pelo WhatsApp.
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14414.581584504218!2d-49.19339454594373!3d-25.416677841121793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcef6b2e4a053f%3A0x601f9238c8cba791!2sCentral%20Da%20Limpeza!5e0!3m2!1spt-BR!2sbr!4v1773325575526!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Central da Limpeza"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue-light rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Av. Jacob Macanhan, 3199 — Atuba<br />
                    Pinhais, PR — CEP 83.326-152
                  </p>
                  <a
                    href="https://maps.google.com/?q=Central+Da+Limpeza+Pinhais"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-brand-blue font-semibold hover:underline"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-green-light rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={20} className="text-brand-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3">Horários de Funcionamento</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">{h.day}</span>
                        <span
                          className={`text-sm font-semibold ${
                            h.time === 'Fechado' ? 'text-red-500' : 'text-gray-900'
                          }`}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Contato direto</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5541999150216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-green transition-colors"
                >
                  <div className="w-8 h-8 bg-brand-green-light rounded-lg flex items-center justify-center">
                    <Phone size={15} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium">(41) 99915-0216</span>
                </a>
                <a
                  href="mailto:compras@centraldalimpezapr.com.br"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors"
                >
                  <div className="w-8 h-8 bg-brand-blue-light rounded-lg flex items-center justify-center">
                    <Mail size={15} className="text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium">compras@centraldalimpezapr.com.br</span>
                </a>
                <a
                  href="https://www.instagram.com/centraldalimpezapinhaispr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-orange transition-colors"
                >
                  <div className="w-8 h-8 bg-brand-orange-light rounded-lg flex items-center justify-center">
                    <Instagram size={15} className="text-brand-orange" />
                  </div>
                  <span className="text-sm font-medium">@centraldalimpezapinhaispr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
