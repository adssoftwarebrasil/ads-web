import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-[rgb(255,254,252)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(16,14,13)] mb-4">
            Nossa <span className="text-[rgb(202,25,27)]">Localização</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(16,14,13)]/70 max-w-3xl mx-auto">
            Venha nos visitar ou solicite entrega no seu hotel ou aeroporto
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgb(202,25,27)]/10 rounded-full flex-shrink-0">
                  <MapPin size={24} className="text-[rgb(202,25,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(16,14,13)] mb-2">Endereço</h3>
                  <p className="text-[rgb(16,14,13)]/70 leading-relaxed">
                    Rua Dr. Atualpa Barbosa Lima, 618 - LOJA 02
                    <br />
                    Meireles, Fortaleza - CE
                    <br />
                    CEP: 60115-015
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgb(202,25,27)]/10 rounded-full flex-shrink-0">
                  <Phone size={24} className="text-[rgb(202,25,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(16,14,13)] mb-2">Contato</h3>
                  <p className="text-[rgb(16,14,13)]/70 leading-relaxed mb-3">
                    Entre em contato conosco pelo WhatsApp
                  </p>
                  <a
                    href="http://wa.me/5585986018954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[rgb(202,25,27)] hover:text-[rgb(143,25,19)] font-semibold transition-colors"
                  >
                    <Phone size={18} />
                    <span>(85) 98601-8954</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgb(202,25,27)]/10 rounded-full flex-shrink-0">
                  <Clock size={24} className="text-[rgb(202,25,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(16,14,13)] mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-[rgb(16,14,13)]/70 leading-relaxed">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 14h
                    <br />
                    Domingo: Sob consulta
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-3.7236856999999994,-38.509398999999995"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-xl hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <Navigation size={20} />
                <span>Como Chegar</span>
              </div>
            </a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg h-full">
            <div className="w-full h-full min-h-[600px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3952384189456!2d-38.509398999999995!3d-3.7236856999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74843c5828401%3A0x9229b7f99429d5ef!2sLocadora%20Costa%20Leste!5e0!3m2!1spt-BR!2sbr!4v1767984698527!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Locadora Costa Leste"
                style={{ border: '0px', minHeight: '600px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
