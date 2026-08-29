import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Venha Nos Visitar
          </h2>
          <p className="text-xl text-gray-600">
            Estamos localizados em Goiânia, prontos para atender você e seu pet
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3A9E3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avenida Perimetral, 2140 – QUADRA 09 LOTE 114-E, LOJA 02
                    <br />
                    Setor Coimbra - Goiânia/GO
                    <br />
                    CEP: 74.533-020
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3A9E3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Segunda a Sexta-feira
                    <br />
                    Das 9h às 17h
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3A9E3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="lucide lucide-phone text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contato</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Telefone/WhatsApp: (62) 98317-7646
                  </p>
                  <a
                    href="https://wa.me/556283177646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3A9E3E] font-semibold hover:text-[#2E7D32] transition-colors duration-300"
                  >
                    Enviar mensagem no WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3A9E3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="lucide lucide-instagram text-white" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Redes Sociais</h3>
                  <a
                    href="https://www.instagram.com/consultorio_petexotic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3A9E3E] font-semibold hover:text-[#2E7D32] transition-colors duration-300"
                  >
                    @consultorio_petexotic
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8899396758644!2d-49.2247!3d-16.7116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzQxLjgiUyA0OcKwMTMnMjguOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Pet Exotic"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
