import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-20 lg:py-28 bg-accent-offwhite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">Nossa Localização</h2>
          <p className="text-lg text-primary-medium">
            Visite nosso showroom e experimente nossos produtos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.3858!2d-48.2776!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445d4e4e4e4e5%3A0x1234567890abcdef!2sAv.%20Jo%C3%A3o%20Pessoa%2C%20635%20-%20Martins%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-338!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização UDI Colchões"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Informações</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-vibrant/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary-vibrant" />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Endereço</div>
                    <div className="text-primary-medium text-sm leading-relaxed">
                      Av. João Pessoa, 635 - Martins
                      <br />
                      Uberlândia - MG, 38400-338
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-vibrant/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary-vibrant" />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Horário</div>
                    <div className="text-primary-medium text-sm">
                      Segunda a Sábado
                      <br />
                      9h às 18h
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-vibrant/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary-vibrant" />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Telefone</div>
                    <a
                      href="tel:+5534996610265"
                      className="text-primary-medium text-sm hover:text-primary transition-colors"
                    >
                      (34) 99661-0265
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+João+Pessoa,+635+-+Martins,+Uberlândia+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Navigation size={24} />
                Como Chegar
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
