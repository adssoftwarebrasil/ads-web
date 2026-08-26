import { MapPin, Clock, Phone, MessageCircle, Instagram } from 'lucide-react';

export default function Contato() {
  return (
    <div id="contato">
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              VENHA NOS VISITAR
            </h2>
            <p className="text-lg text-gray-600">
              Atendimento que virou referência em Alexânia
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      ENDEREÇO
                    </h3>
                    <p className="text-gray-600">
                      Avenida Brasília Q33 LT 11 e 12 Setor Nova Flórida CEP
                      72930-000
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="lucide lucide-clock w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      HORÁRIOS
                    </h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Segunda a Sexta</span>
                        <span className="font-semibold text-gray-900">
                          08:00 - 18:00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábado</span>
                        <span className="font-semibold text-gray-900">
                          08:00 - 12:00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domingo</span>
                        <span className="font-semibold text-red-600">
                          Fechado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="lucide lucide-phone w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      CONTATOS
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://wa.me/5562992222332"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                        <span className="font-semibold">(62) 99222-2332</span>
                      </a>
                      <a
                        href="tel:+556233363042"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Phone className="lucide lucide-phone w-5 h-5" />
                        <span className="font-semibold">(62) 3336-3042</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="lucide lucide-instagram w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">INSTAGRAM</h3>
                    <a
                      href="https://www.instagram.com/caetanoautocenteroficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-pink-600 font-bold px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors text-sm"
                    >
                      @caetanoautocenteroficial
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] lg:h-full min-h-[400px]">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-4 border-blue-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3833.4859227303964!2d-48.4953643248635!3d-16.09214498459068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA1JzMxLjciUyA0OMKwMjknMzQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1762990817328!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  title="Localização Caetano Auto Center"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
