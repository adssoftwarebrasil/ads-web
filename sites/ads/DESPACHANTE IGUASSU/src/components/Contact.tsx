import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021D46] mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você e resolver suas necessidades documentais
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#021D46] text-lg mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Rua Guarujá, 150 - Sala 07<br />
                    Jardim Lancaster<br />
                    Foz do Iguaçu - PR, 85869-720
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl flex items-center justify-center">
                    <Phone className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#021D46] text-lg mb-2">Telefone / WhatsApp</h4>
                  <a href="tel:+5545999661849" className="text-gray-700 hover:text-[#FA1213] transition-colors">
                    (45) 99966-1849
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#021D46] text-lg mb-2">E-mail</h4>
                  <a
                    href="mailto:iguassudespachante@gmail.com"
                    className="text-gray-700 hover:text-[#FA1213] transition-colors break-all"
                  >
                    iguassudespachante@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl flex items-center justify-center">
                    <Clock className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#021D46] text-lg mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-700">
                    Segunda a Sexta<br />
                    08:00 às 17:30
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.instagram.com/iguassudespachante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={28} />
                </a>
                <a
                  href="https://www.facebook.com/despachanteiguassu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white" size={28} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.345040177437!2d-54.545278724608515!3d-25.493536777521417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f691ea9c8b2b33%3A0x9443a77e3e33fae7!2sDespachante%20Iguassu!5e0!3m2!1spt-BR!2sbr!4v1768929075744!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Despachante Iguassu"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
