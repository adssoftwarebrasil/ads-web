import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '../constants';

const MAPS_DIR_URL =
  'https://www.google.com/maps/dir//Centro+Automotivo+Bosco,+Av.+Ministro+Jos%C3%A9+Am%C3%A9rico,+815+-+Parque+Iracema,+Fortaleza+-+CE,+60824-245/@-3.8094059,-38.4945558,17z';

function Location() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[rgb(204,53,49)]/10 text-[rgb(204,53,49)] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Localização
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(10,33,75)] mb-6">
            Visite Nossa Oficina
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos localizados em Fortaleza, prontos para atender você com excelência.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[rgb(204,53,49)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[rgb(204,53,49)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(10,33,75)] mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Av. Ministro José Américo, 815
                    <br />
                    Parque Iracema, Fortaleza - CE
                    <br />
                    CEP: 60824-245
                  </p>
                  <a
                    href={MAPS_DIR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-[rgb(204,53,49)] font-semibold hover:text-[rgb(184,43,39)] transition-colors group"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    <span>Como Chegar</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[rgb(204,53,49)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[rgb(204,53,49)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(10,33,75)] mb-2">Telefones</h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="block text-gray-700 hover:text-[rgb(204,53,49)] transition-colors font-medium"
                    >
                      (85) 3472-4371
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:text-[rgb(204,53,49)] transition-colors font-medium"
                    >
                      (85) 98893-9362 (WhatsApp)
                    </a>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-[rgb(204,53,49)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(184,43,39)] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(204,53,49)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[rgb(204,53,49)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(10,33,75)] mb-4">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Segunda a Sexta</span>
                      <span className="text-[rgb(10,33,75)] font-bold">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Sábado e Domingo</span>
                      <span className="text-[rgb(10,33,75)] font-bold">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(10,33,75)] p-8 rounded-2xl shadow-lg">
              <img
                src="https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Foficina-automotiva-fachada.webp"
                alt="Fachada Centro Automotivo Bosco"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-3">Atendemos Fortaleza e Região</h3>
              <p className="text-gray-300 leading-relaxed">
                Localização estratégica para facilitar seu acesso. Venha nos visitar e conheça nossa
                estrutura completa e equipe preparada para cuidar do seu veículo.
              </p>
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0031162709092!2d-38.49455582502574!3d-3.8094058961644284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f001ce62e79%3A0x41abaef490452441!2sCentro%20Automotivo%20Bosco!5e0!3m2!1spt-BR!2sbr!4v1769668609648!5m2!1spt-BR!2sbr"
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Centro Automotivo Bosco"
                className="w-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
