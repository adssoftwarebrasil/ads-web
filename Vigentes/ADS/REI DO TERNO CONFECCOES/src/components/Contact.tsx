import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D587A] mb-4">Visite Nossa Loja</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#B89E5E] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#2D587A] mb-2">Endereço</h3>
                  <p className="text-gray-600">Rua Coronel Spínola de Castro, Nº 2898</p>
                  <p className="text-gray-600">Centro, São José do Rio Preto/SP</p>
                  <p className="text-gray-600">CEP: 15015-500</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#B89E5E] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#2D587A] mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 14h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-[#B89E5E] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#2D587A] mb-2">Contato</h3>
                  <p className="text-gray-600 mb-1">
                    <a
                      href="https://wa.me/5517992369599"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B89E5E]"
                    >
                      WhatsApp: (17) 99236-9599
                    </a>
                  </p>
                  <p className="text-gray-600 mb-4">
                    <a href="mailto:reidoterno@hotmail.com" className="hover:text-[#B89E5E]">
                      reidoterno@hotmail.com
                    </a>
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/reidoternoriopreto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#417EAD] hover:text-[#B89E5E] transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1D9S7iWsnH/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#417EAD] hover:text-[#B89E5E] transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.0123456789!2d-49.377!3d-20.820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQ5JzEyLjAiUyA0OcKwMjInMzcuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rei do Terno"
              style={{ border: '0px', minHeight: '400px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
