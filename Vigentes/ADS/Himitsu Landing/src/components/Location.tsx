import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-[#F8F8F8] py-16 md:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-exo font-bold text-4xl md:text-5xl text-black mb-4">
            Visite-nos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2867234567!2d-49.26789!3d-16.69876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0f0f0f0f0f0%3A0x0!2sRua%20Dublim%2C%20122%20-%20Jardim%20Europa%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Himitsu Restaurante"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#E02023]/10 p-3 rounded-full">
                  <MapPin className="lucide lucide-map-pin w-6 h-6 text-[#E02023]" />
                </div>
                <div>
                  <h3 className="font-exo font-semibold text-lg text-black mb-2">
                    Endereço
                  </h3>
                  <p className="font-exo text-gray-700">
                    Rua Dublim, N. 122
                    <br />
                    Jardim Europa, Goiânia - GO
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#E02023]/10 p-3 rounded-full">
                  <Clock className="lucide lucide-clock w-6 h-6 text-[#E02023]" />
                </div>
                <div>
                  <h3 className="font-exo font-semibold text-lg text-black mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="font-exo text-gray-700">
                    Segunda a Sábado: 19h às 00h
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#E02023]/10 p-3 rounded-full">
                  <Phone className="lucide lucide-phone w-6 h-6 text-[#E02023]" />
                </div>
                <div>
                  <h3 className="font-exo font-semibold text-lg text-black mb-2">
                    Telefone
                  </h3>
                  <a
                    href="tel:+556232513597"
                    className="font-exo text-gray-700 hover:text-[#E02023] transition-colors"
                  >
                    (62) 3251-3597
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#E02023]/10 p-3 rounded-full">
                  <MessageCircle className="lucide lucide-message-circle w-6 h-6 text-[#E02023]" />
                </div>
                <div>
                  <h3 className="font-exo font-semibold text-lg text-black mb-2">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/556232513597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-exo text-gray-700 hover:text-[#E02023] transition-colors"
                  >
                    (62) 3251-3597
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//Rua+Dublim,+122+-+Jardim+Europa,+Goiânia+-+GO"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border-2 border-black text-black px-6 py-4 rounded-lg hover:bg-black hover:text-white transition-all font-exo font-semibold"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
