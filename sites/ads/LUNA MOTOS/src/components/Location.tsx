import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7834445934897!2d-60.69845492475583!3d2.8284177970986833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93283d8c7c4c9f%3A0x4e3f5b0c5a8e8b0a!2sAv.%20Nossa%20Sra.%20de%20Nazar%C3%A9%2C%20915%20-%20Asa%20Branca%2C%20Boa%20Vista%20-%20RR%2C%2069312-305!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
              title="Mapa Luna Motos"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020202] mb-8">Onde Nos Encontrar</h2>
            <div className="space-y-6 mb-10">
              <a
                href="https://www.google.com/maps/place/Av.+Nossa+Sra.+de+Nazar%C3%A9,+915+-+Asa+Branca,+Boa+Vista+-+RR,+69312-305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:text-[#F97316] transition-colors group"
              >
                <MapPin className="lucide lucide-map-pin w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#020202] text-lg mb-1 group-hover:text-[#F97316]">
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    Av. Nossa Sra. de Nazaré, 915 - Asa Branca
                    <br />
                    Boa Vista - RR, 69312-305
                  </p>
                </div>
              </a>
              <div className="flex items-start space-x-4">
                <Clock className="lucide lucide-clock w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#020202] text-lg mb-1">Horário</h3>
                  <p className="text-gray-600">
                    Segunda a Sábado: 08:00 às 18:00
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
              <a
                href="tel:+559591772210"
                className="flex items-start space-x-4 hover:text-[#F97316] transition-colors group"
              >
                <Phone className="lucide lucide-phone w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#020202] text-lg mb-1 group-hover:text-[#F97316]">
                    Telefone
                  </h3>
                  <p className="text-gray-600">(95) 99177-2210</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/lunamotoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:text-[#F97316] transition-colors group"
              >
                <Instagram className="lucide lucide-instagram w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#020202] text-lg mb-1 group-hover:text-[#F97316]">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@lunamotoss</p>
                </div>
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#020202] text-xl">Atendemos toda Boa Vista e região</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
