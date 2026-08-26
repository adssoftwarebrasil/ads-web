import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visite Nossas <span className="text-[rgb(4,152,134)]">Lojas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos localizados em pontos estratégicos para melhor atendê-lo
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nossas Lojas</h3>
                    <div className="mb-5 pb-5 border-b border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Loja Marituba</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        ROD BR-316, N° 408
                        <br />
                        Centro, Marituba - PA
                        <br />
                        CEP: 67201-045
                      </p>
                      <a
                        href="https://maps.google.com/?q=MT+Auto+Peças+Marituba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-[rgb(4,152,134)] font-semibold text-sm hover:underline"
                      >
                        Ver no Google Maps →
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Loja Ananindeua</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Av Independência, N° 337
                        <br />
                        Icuí-Guajará, Ananindeua - PA
                        <br />
                        CEP: 67125-406
                      </p>
                      <a
                        href="https://maps.google.com/?q=Av+Independência,+337,+Icuí-Guajará,+Ananindeua+-+PA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-[rgb(4,152,134)] font-semibold text-sm hover:underline"
                      >
                        Ver no Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-medium">Segunda a Sexta:</span>
                        <span>7:30 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábado:</span>
                        <span>7:30 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Domingo:</span>
                        <span className="text-red-600">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Contato</h3>
                    <div className="space-y-3">
                      <a
                        href="https://wa.me/559191706760"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[rgb(4,152,134)] transition-colors"
                      >
                        <Phone size={20} />
                        <span>(91) 91706-760</span>
                      </a>
                      <a
                        href="https://www.instagram.com/grupomtautopecas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[rgb(4,152,134)] transition-colors"
                      >
                        <Instagram size={20} />
                        <span>@grupomtautopecas</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.685956498377!2d-48.351285399999995!3d-1.3650996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a45f58e96fb2a3%3A0x22d4a4e1dbe99e98!2sMT%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1770921462151!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MT Auto Peças"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto Para Cuidar do Seu Veículo?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como podemos ajudar você com as melhores soluções automotivas da
              região.
            </p>
            <a
              href="https://wa.me/559191706760?text=Olá! Gostaria de mais informações sobre os produtos e serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(4,152,134)] text-white px-10 py-5 rounded-full hover:bg-[rgb(3,122,107)] transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
