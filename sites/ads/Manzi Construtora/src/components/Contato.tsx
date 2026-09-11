import { MapPin, MessageCircle, Send, Mail, Phone, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contato() {
  const mapCol = useReveal();
  const cards = useReveal();
  const bottom = useReveal();

  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-white via-[rgb(245,247,250)] to-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-[rgb(0,40,71)] tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3">
            FALE CONOSCO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(42,49,51)] mb-3 sm:mb-4 px-4">
            Entre em Contato
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[rgb(42,49,51)] text-opacity-70 max-w-2xl mx-auto px-4">
            Estamos prontos para transformar seus sonhos em realidade
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
          <div
            ref={mapCol.ref}
            className={`transition-all duration-1000 ${
              mapCol.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[rgb(0,40,71)] to-[rgb(20,60,91)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.8234567890123!2d-43.8641234!3d-16.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzQ0LjQiUyA0M8KwNTEnNTAuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Manzi Construtora"
                className="absolute inset-0"
                style={{ border: '0px' }}
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 md:p-8 bg-gradient-to-t from-[rgb(0,40,71)] to-transparent">
                <div className="flex items-start">
                  <MapPin className="lucide lucide-map-pin text-white mr-3 mt-1 flex-shrink-0" width={24} height={24} />
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                      Nossa Localização
                    </h3>
                    <p className="text-white text-opacity-90 text-xs sm:text-sm leading-relaxed">
                      Anel Rodoviário Leste, 5060
                      <br />
                      Chácaras Ceres
                      <br />
                      Montes Claros – MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={cards.ref}
            className={`space-y-4 sm:space-y-5 transition-all duration-1000 delay-300 ${
              cards.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[rgb(37,211,102)] to-[rgb(25,191,82)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <MessageCircle className="lucide lucide-message-circle text-white" width={28} height={28} />
                  </div>
                  <span className="bg-white bg-opacity-20 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    RESPOSTA RÁPIDA
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-white text-opacity-90 text-xs sm:text-sm mb-4">
                  Fale diretamente com nossa equipe
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-6">
                  (38) 99917-1314
                </p>
                <a
                  href="https://wa.me/5538999171314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white text-[rgb(37,211,102)] px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Send className="lucide lucide-send mr-2" width={18} height={18} />
                  INICIAR CONVERSA
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-[rgb(0,40,71)] border-opacity-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(0,40,71)] opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="bg-[rgb(0,40,71)] p-3 rounded-xl">
                    <Mail className="lucide lucide-mail text-white" width={28} height={28} />
                  </div>
                  <span className="bg-[rgb(0,40,71)] bg-opacity-10 text-[rgb(0,40,71)] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    24/7
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[rgb(42,49,51)] mb-2">E-mail</h3>
                <p className="text-[rgb(42,49,51)] text-opacity-70 text-xs sm:text-sm mb-4">
                  Envie sua mensagem a qualquer momento
                </p>
                <p className="text-base sm:text-lg font-bold text-[rgb(0,40,71)] mb-5 sm:mb-6 break-all">
                  contabilcom@yahoo.com.br
                </p>
                <a
                  href="mailto:contabilcom@yahoo.com.br"
                  className="flex items-center justify-center w-full bg-[rgb(0,40,71)] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold hover:bg-[rgb(10,50,81)] hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Mail className="lucide lucide-mail mr-2" width={18} height={18} />
                  ENVIAR E-MAIL
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={bottom.ref}
          className={`grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 delay-600 ${
            bottom.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[rgb(0,40,71)] border-opacity-10">
            <div className="flex items-start">
              <div className="bg-[rgb(0,40,71)] bg-opacity-10 p-3 rounded-lg mr-4 flex-shrink-0">
                <Phone className="lucide lucide-phone text-[rgb(0,40,71)]" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[rgb(42,49,51)] mb-2">
                  Telefone
                </h3>
                <p className="text-[rgb(42,49,51)] text-opacity-70 text-xs sm:text-sm mb-2">
                  Ligue para nós
                </p>
                <a
                  href="tel:+5538999171314"
                  className="text-base sm:text-lg font-bold text-[rgb(0,40,71)] hover:underline"
                >
                  (38) 99917-1314
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[rgb(0,40,71)] border-opacity-10">
            <div className="flex items-start">
              <div className="bg-[rgb(0,40,71)] bg-opacity-10 p-3 rounded-lg mr-4 flex-shrink-0">
                <Clock className="lucide lucide-clock text-[rgb(0,40,71)]" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[rgb(42,49,51)] mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-[rgb(42,49,51)] text-opacity-70 text-xs sm:text-sm leading-relaxed">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
