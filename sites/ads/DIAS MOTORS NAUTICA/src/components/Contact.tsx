import { MapPin, Clock, Phone, Instagram as InstagramIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Localização */}
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 opacity-0 translate-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(19,161,209)]/10 flex items-center justify-center">
                <MapPin className="lucide lucide-map-pin text-[rgb(19,161,209)]" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[rgb(30,43,75)] mb-4 text-center">
              Localização
            </h3>
            <p className="text-gray-700 text-center mb-2">
              Avenida Independência, 5911
            </p>
            <p className="text-gray-700 text-center mb-2">Setor Aeroporto</p>
            <p className="text-gray-700 text-center mb-4">Goiânia/GO</p>
            <a
              href="https://maps.google.com/?q=Avenida+Independência+5911+Goiânia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[rgb(19,161,209)] font-medium hover:underline"
            >
              <MapPin className="lucide lucide-map-pin" size={16} />
              Ver no Google Maps
            </a>
          </div>

          {/* Horário */}
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 delay-200 opacity-0 translate-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(19,161,209)]/10 flex items-center justify-center">
                <Clock className="lucide lucide-clock text-[rgb(19,161,209)]" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[rgb(30,43,75)] mb-4 text-center">
              Horário de Funcionamento
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-gray-700">
                <span className="font-medium">Segunda a Sexta:</span> 08:00 às
                18:00
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Sábado:</span> 08:00 às 12:00
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Domingo:</span> Fechado
              </p>
            </div>
          </div>

          {/* Fale Conosco */}
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 delay-300 sm:col-span-2 md:col-span-1 opacity-0 translate-y-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[rgb(19,161,209)]/10 flex items-center justify-center">
                <Phone className="lucide lucide-phone text-[rgb(19,161,209)]" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[rgb(30,43,75)] mb-4 text-center">
              Fale Conosco
            </h3>
            <div className="space-y-3 text-center">
              <p className="text-gray-700">
                <span className="font-medium">Telefone:</span>
                <br />
                (62) 3223-7155
              </p>
              <p className="text-gray-700">
                <span className="font-medium">WhatsApp:</span>
                <br />
                (62) 98283-0047
              </p>
              <p className="text-gray-700 text-xs sm:text-sm break-all">
                <span className="font-medium">E-mail:</span>
                <br />
                comercial@diasmotorsnautica.com.br
              </p>
              <a
                href="https://instagram.com/diasmotorsnautica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(19,161,209)] font-medium hover:underline mt-2"
              >
                <InstagramIcon className="lucide lucide-instagram" size={20} />
                @diasmotorsnautica
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl transition-all duration-700 delay-500 opacity-0 scale-95">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7474289304237!2d-49.228929!3d-16.679167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQwJzQ1LjAiUyA0OcKwMTMnNDQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Dias Motors Náutica"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
