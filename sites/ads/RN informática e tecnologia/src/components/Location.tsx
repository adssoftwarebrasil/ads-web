import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visite Nossa <span className="text-[rgb(1,102,52)]">Loja</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos localizados no centro de Feira de Santana, prontos para atendê-lo
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      GALERIA LUCIANA CENTER<br />
                      R. Barão do Rio Branco, 1348 - Loja 10<br />
                      Centro, Feira de Santana - BA<br />
                      CEP: 44001-232
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(152,204,50)] to-[rgb(132,184,30)] p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</p>
                    <div className="flex flex-col">
                      <a href="tel:+5575981914422" className="text-[rgb(1,102,52)] hover:text-[rgb(152,204,50)] transition-colors text-lg font-medium">
                        (75) 98191-4422
                      </a>
                      <a href="tel:+5575991575254" className="text-[rgb(1,102,52)] hover:text-[rgb(152,204,50)] transition-colors text-lg font-medium">
                        (75) 99157-5254
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a href="mailto:remafisinformartica@gmail.com" className="text-[rgb(1,102,52)] hover:text-[rgb(152,204,50)] transition-colors break-all text-sm sm:text-base">
                      remafisinformartica@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(152,204,50)] to-[rgb(132,184,30)] p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</p>
                    <p className="text-gray-600 text-sm sm:text-base">Segunda a Sexta: 8:00 às 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] p-3 rounded-xl flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Instagram</p>
                    <a href="https://www.instagram.com/rn_informatica_/" target="_blank" rel="noopener noreferrer" className="text-[rgb(1,102,52)] hover:text-[rgb(152,204,50)] transition-colors">
                      @rn_informatica_
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(1,102,52)] to-[rgb(1,82,42)] rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Atendemos em Feira de Santana</h3>
              <p className="text-white/90 leading-relaxed mb-6 text-sm sm:text-base">
                Nossa equipe está pronta para atender você com rapidez. Venha nos visitar ou chame no Zap!
              </p>
              <a
                href="https://wa.me/5575981914422?text=Olá!%20Preciso%20de%20assistência%20técnica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[rgb(1,102,52)] px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg font-semibold hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-6 h-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative flex-grow min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.076632426365!2d-38.961621924151785!3d-12.243073945037943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439d090333333%3A0x1234567890abcdef!2sGaleria%20Luciana%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RN Informática"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <a
              href="https://goo.gl/maps/SeuLinkDoGoogleMapsAqui"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(152,204,50)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Ver no Google Maps</p>
                  <p className="text-sm text-gray-600">Obter direções para a loja</p>
                </div>
                <div className="bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
