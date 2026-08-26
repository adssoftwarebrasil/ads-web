import { MapPin, Clock, Phone, MessageCircle, Mail, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Visite Nossa Loja</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Av. W-5, qd.73 - LT.11 - Sítios Santa Luzia,<br />
                    Aparecida de Goiânia - GO, 74922-685
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Horário</h3>
                  <p className="text-gray-600">Aberto 24 horas - Todos os dias</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Telefone</h3>
                  <p className="text-gray-600">(62) 3579-0376</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
                  <p className="text-gray-600">(62) 98155-6605</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-600 break-all">imperiogasaparecidadegoiania@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#DEAC6C]/10 p-3 rounded-full flex-shrink-0">
                  <Instagram className="h-6 w-6 text-[#DEAC6C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/imperiogas24hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DEAC6C] hover:underline"
                  >
                    @imperiogas24hr
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.%20W-5%2C%20qd.73%20-%20LT.11%20-%20S%C3%ADtios%20Santa%20Luzia%2C%20Aparecida%20de%20Goi%C3%A2nia%20-%20GO%2C%2074922-685"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#DEAC6C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#F2DFBF] transition-all duration-300 text-center"
              >
                Ver no Google Maps
              </a>
              <a
                href="https://wa.me/556281556605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-[#DEAC6C] text-[#DEAC6C] px-6 py-3 rounded-lg font-semibold hover:bg-[#DEAC6C] hover:text-black transition-all duration-300 text-center"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20W-5%2C%20qd.73%20-%20LT.11%20-%20S%C3%ADtios%20Santa%20Luzia%2C%20Aparecida%20de%20Goi%C3%A2nia%20-%20GO%2C%2074922-685&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Império Gás"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
