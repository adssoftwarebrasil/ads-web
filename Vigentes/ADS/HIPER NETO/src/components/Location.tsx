import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-[rgb(238,27,34)] px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            LOCALIZAÇÃO
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Venha nos <span className="text-[rgb(238,27,34)]">visitar</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos esperando você de braços abertos em nossa loja
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <MapPin size={24} className="text-[rgb(238,27,34)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Endereço</h3>
                <p className="text-gray-600">Av. Bernardo Sayão, 519</p>
                <p className="text-gray-600">Centro - Campinorte - GO</p>
                <p className="text-gray-600">CEP: 76410-000</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <Phone size={24} className="text-[rgb(238,27,34)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Telefones</h3>
                <a
                  href="tel:+556233473913"
                  className="text-gray-600 hover:text-[rgb(238,27,34)] transition-colors block"
                >
                  Fixo: (62) 3347-3913
                </a>
                <a
                  href="http://wa.me/556282034298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[rgb(238,27,34)] transition-colors block"
                >
                  WhatsApp: (62) 98203-4298
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <Clock size={24} className="text-[rgb(238,27,34)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda a Sábado</p>
                <p className="text-[rgb(238,27,34)] font-semibold">06:00 às 20:00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <Mail size={24} className="text-[rgb(238,27,34)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">E-mail</h3>
                <a
                  href="mailto:hipernetosupermercado@gmail.com"
                  className="text-gray-600 hover:text-[rgb(238,27,34)] transition-colors break-all"
                >
                  hipernetosupermercado@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <Instagram size={24} className="text-[rgb(238,27,34)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Redes Sociais</h3>
                <a
                  href="https://www.instagram.com/hipernetosupermercado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[rgb(238,27,34)] transition-colors"
                >
                  @hipernetosupermercado
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-2xl shadow-xl h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.908945477359!2d-49.15684562489924!3d-14.316721486136695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9343a55c39d7f79f%3A0x60a86ca00a6fcf05!2sHiper%20Neto%20Supermercado!5e0!3m2!1spt-BR!2sbr!4v1769177402425!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Hiper Neto Supermercado"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
