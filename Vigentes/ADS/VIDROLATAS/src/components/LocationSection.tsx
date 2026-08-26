import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

export default function LocationSection() {
  const { openModal } = useWhatsAppModal();
  return (
    <section className="py-20 bg-[#e4eef8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4486846537773!2d-49.28044492466!3d-16.699999183861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef10a7b0b7a45%3A0x1c7e0f3e3e3e3e3e!2sAv.%20Pedro%20Ludovico%2C%202127%20-%20Vila%20Cana%C3%A3%2C%20Goi%C3%A2nia%20-%20GO%2C%2074415-500!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Vidrolatas"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-3xl font-bold text-[#012d78] mb-8">
                Venha nos Visitar
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#0298d2]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#012d78] mb-1">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Avenida Pedro Ludovico, N. 2.127<br />
                      Vila Canaã, Goiânia - GO<br />
                      CEP: 74.415-500
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#0298d2]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#012d78] mb-1">Telefone</h3>
                    <a
                      href="tel:+556235585151"
                      className="text-gray-600 hover:text-[#0298d2] transition-colors"
                    >
                      (62) 3558-5151
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-[#0298d2]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#012d78] mb-1">WhatsApp</h3>
                    <a
                      href={whatsappLink()}
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                      className="block text-gray-600 hover:text-[#0298d2] transition-colors text-left"
                    >
                      Fale conosco via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#0298d2]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#012d78] mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#012d78]">Área de atendimento:</strong><br />
                    Goiânia, Aparecida de Goiânia e toda região metropolitana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
