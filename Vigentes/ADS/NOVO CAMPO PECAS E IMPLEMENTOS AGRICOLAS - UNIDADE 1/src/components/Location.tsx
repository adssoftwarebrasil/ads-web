import { MapPin, Clock, Navigation } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_TEL, MAPS_URL } from '../lib/constants';

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8D617]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#001F7A] font-semibold text-sm md:text-base uppercase tracking-wider bg-[#001F7A]/10 px-4 py-2 rounded-full">
              Nossa Localização
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A385C] mb-4">
            Onde Estamos
          </h2>
          <p className="text-lg md:text-xl text-[#424242] max-w-2xl mx-auto mb-6">
            Visite nossa unidade em Dourados - MS
          </p>
          <div className="w-20 h-1 bg-[#F8D617] mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#F8D617]">
            <div className="relative h-80 md:h-96 bg-gray-100 overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.6!2d-54.777424!3d-22.222714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzIxLjgiUyA1NMKwNDYnMzguNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Novo Campo Matriz"
                className="w-full h-full"
                style={{ border: '0px' }}
              ></iframe>
              <div className="absolute top-6 left-6 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-xl px-4 py-2 shadow-xl">
                <span className="text-[#1A385C] font-bold text-sm uppercase">
                  Unidade Principal
                </span>
              </div>
            </div>
            <div className="p-6 md:p-10 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="lucide lucide-map-pin text-[#1A385C]" width={32} height={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A385C] mb-2">
                    Novo Campo Matriz
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></span>
                    <span className="text-[#4CAF50] font-semibold text-sm">
                      Aberto agora
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#001F7A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="lucide lucide-map-pin text-[#001F7A]" width={20} height={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#1A385C] font-bold text-base mb-1">
                        Endereço
                      </h4>
                      <p className="text-[#424242] text-sm leading-relaxed">
                        Av. Weimar Gonçalves Torres, 5435<br />
                        Centro, Dourados - MS<br />
                        CEP: 79830-020
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="lucide lucide-clock text-[#4CAF50]" width={20} height={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#1A385C] font-bold text-base mb-2">
                        Horário de Funcionamento
                      </h4>
                      <div className="space-y-1 text-sm text-[#424242]">
                        <p className="flex justify-between">
                          <span>Segunda a Sexta:</span>
                          <span className="font-semibold">8h às 18h</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sábado:</span>
                          <span className="font-semibold">8h às 12h</span>
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span>Domingo:</span>
                          <span className="font-semibold">Fechado</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-[#1fb855] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </a>
                <a
                  href={PHONE_TEL}
                  className="group flex items-center justify-center gap-2 bg-[#001F7A] text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-[#1A385C] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone group-hover:rotate-12 transition-transform">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Ligar
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 border-2 border-[#4CAF50] text-[#4CAF50] px-6 py-4 rounded-xl font-bold text-base hover:bg-[#4CAF50] hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  <Navigation className="lucide lucide-navigation group-hover:scale-110 transition-transform" width={20} height={20} />
                  Rota
                </a>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#424242]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAF50] rounded-full"></span>
                    <span>Estacionamento no Local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F8D617] rounded-full"></span>
                    <span>Atendimento Especializado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#001F7A] rounded-full"></span>
                    <span>Amplo Showroom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-[#4CAF50] via-[#F8D617] to-[#001F7A]"></div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-[#1A385C] via-[#001F7A] to-[#1A385C] rounded-2xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Venha Nos Visitar!
          </h3>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você com as melhores soluções
            para o campo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1fb855] transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Falar no WhatsApp
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#1A385C] transition-all duration-300"
            >
              <Navigation className="lucide lucide-navigation" width={20} height={20} />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
