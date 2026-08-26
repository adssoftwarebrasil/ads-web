import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(31, 66, 131, 0.08)', color: 'rgb(31, 66, 131)' }}
          >
            Onde estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'rgb(31, 66, 131)' }}>
            Venha nos visitar
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Estamos localizados em São Luís – MA e atendemos clientes de todo o estado do Maranhão.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 opacity-100 translate-y-0"
            style={{ height: '400px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8138712733166!2d-44.2336174250312!3d-2.5672536974109468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f691000ffc13e9%3A0x9bb3287a40b7fb86!2sCASA%20DAS%20LATARIAS!5e0!3m2!1spt-BR!2sbr!4v1772139609456!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Casa das Latarias"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="lg:col-span-2 space-y-5 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(31, 66, 131, 0.1)', color: 'rgb(31, 66, 131)' }}
              >
                <MapPin width={20} height={20} className="lucide lucide-map-pin" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'rgb(31, 66, 131)' }}>
                  Endereço
                </p>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {'Av. Guajajaras, 136 - loja C\nTirirical, São Luís - MA\nCEP: 65010-120'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(31, 66, 131, 0.1)', color: 'rgb(31, 66, 131)' }}
              >
                <Clock width={20} height={20} className="lucide lucide-clock" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'rgb(31, 66, 131)' }}>
                  Horário de Funcionamento
                </p>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {'Segunda a Sábado\n8h às 18h'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(31, 66, 131, 0.1)', color: 'rgb(31, 66, 131)' }}
              >
                <Phone width={20} height={20} className="lucide lucide-phone" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'rgb(31, 66, 131)' }}>
                  Telefone / WhatsApp
                </p>
                <a
                  href="http://wa.me/5598985630349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:underline whitespace-pre-line"
                >
                  (98) 9 8563-0349
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(31, 66, 131, 0.1)', color: 'rgb(31, 66, 131)' }}
              >
                <Instagram width={20} height={20} className="lucide lucide-instagram" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'rgb(31, 66, 131)' }}>
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/casa_das_latariasslz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:underline whitespace-pre-line"
                >
                  @casa_das_latariasslz
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=CASA+DAS+LATARIAS+São+Luís+MA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: 'rgb(31, 66, 131)' }}
            >
              <MapPin width={16} height={16} className="lucide lucide-map-pin" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
