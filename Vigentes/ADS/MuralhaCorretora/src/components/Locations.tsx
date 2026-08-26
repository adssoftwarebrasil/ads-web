import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      title: 'Unidade Jaboatão dos Guararapes',
      address: 'R. Arão Lins de Andrade, 110 - Cajueiro Seco',
      city: 'Jaboatão dos Guararapes - PE, 54310-335',
      phone: '(81) 99195-2020',
      email: 'corretoramuralha@gmail.com',
      hours: 'Seg-Sex: 08:00 - 18:00',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3548329404997!2d-35.00000!3d-8.10000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1a6b6b6b6b6b!2sR.%20Arão%20Lins%20de%20Andrade%2C%20110%2C%20Jaboatão%20dos%20Guararapes!5e0!3m2!1spt-BR!2sbr!4v1000000000000',
    },
    {
      title: 'Unidade Recife',
      address: 'Empresarial Renato Dias',
      city: 'Av. Gov. Agamenon Magalhães, 4318 - Sala 1201 - Recife - PE',
      phone: '(81) 99195-2020',
      email: 'corretoramuralha@gmail.com',
      hours: 'Seg-Sex: 08:00 - 18:00',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.784257699981!2d-34.898174!3d-8.061424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fe96556ecb%3A0xd94fca70d26698ee!2sMuralha%20%26%20Lapenda%20Corretora%20de%20Seguros%20e%20Planos%20de%20Sa%C3%BAde%20-%20Unidade%20Recife!5e0!3m2!1spt-BR!2sus!4v1766248127412!5m2!1spt-BR!2sus',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Duas Unidades
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Nos encontre em Recife ou Jaboatão dos Guararapes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-64 rounded-t-2xl overflow-hidden">
                <iframe
                  src={location.mapEmbed}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {location.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-neutral-700 font-semibold">
                        {location.address}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {location.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-neutral-700 hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-neutral-700 hover:text-primary transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-neutral-700">{location.hours}</p>
                  </div>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20na%20unidade%20de%20${location.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md text-center"
                >
                  Agendar Visita
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
