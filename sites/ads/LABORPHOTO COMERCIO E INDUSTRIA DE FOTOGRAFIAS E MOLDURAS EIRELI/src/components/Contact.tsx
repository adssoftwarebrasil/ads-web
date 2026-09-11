import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,126,198)] font-bold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Visite Nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)]">
              Loja Física
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos no coração do Guará, prontos para atender você
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(2,126,198)] to-[rgb(6,51,133)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guará II QE 34 bloco A Sala 102 a 106<br />
                    Guará, Brasília - DF<br />
                    CEP: 71065-612
                  </p>
                  <a
                    href="https://maps.google.com/?q=Laborphoto+Guará"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[rgb(2,126,198)] hover:text-[rgb(6,51,133)] font-semibold transition-colors"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(6,51,133)] to-[rgb(34,9,92)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Telefones</h3>
                  <div className="space-y-2">
                    <a
                      href="http://wa.me/556192241725"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-[rgb(2,126,198)] transition-colors"
                    >
                      WhatsApp: (61) 9 9224-1725
                    </a>
                    <a
                      href="tel:6133818686"
                      className="block text-gray-600 hover:text-[rgb(2,126,198)] transition-colors"
                    >
                      Fixo: (61) 3381-8686
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(2,126,198)] to-[rgb(34,9,92)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8:30h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(6,51,133)] to-[rgb(34,9,92)] rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-white text-lg mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/laborphoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl transition-all duration-300 flex-1"
                >
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/Laborphoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl transition-all duration-300 flex-1"
                >
                  <Facebook className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2464942771862!2d-47.97426572486893!3d-15.843636884803638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2e25f9f13d71%3A0x92668757baf65644!2sLaborphoto%20MOLDURAS%20PARA%20QUADROS!5e0!3m2!1spt-BR!2sbr!4v1770134988410!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: '0px', minHeight: '500px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
