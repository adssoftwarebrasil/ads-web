import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';
const INSTAGRAM_URL = 'https://www.instagram.com/dramarcelalaender/';
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.786476488601!2d-41.949668224800256!3d-18.85215958230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb1a79fc8b99f99%3A0x431a436b0bfc8d1c!2sDra%20Marcela%20Teixeira%20Laender%20Mour%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1769661625536!5m2!1spt-BR!2sbr';

export default function Location() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#613C45] mb-6">
            Visite Nosso Consultório
          </h2>
          <p className="text-lg text-gray-700">
            Atendimento em ambiente acolhedor e seguro, com toda a estrutura necessária para seu
            conforto e bem-estar.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#FDF5F7] to-[#F8F4F5] rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <MapPin size={24} className="text-[#613C45]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#613C45] mb-2 text-lg">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Edifício Medical Center
                    <br />
                    R. 7 de Setembro, 2716 - Sala 1404
                    <br />
                    Centro, Gov. Valadares - MG
                    <br />
                    CEP: 35010-170
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Clock size={24} className="text-[#613C45]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#613C45] mb-2 text-lg">Horário de Atendimento</h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Segunda a Quinta: 08h às 17h</p>
                    <p>Sexta-feira: 08h às 16h</p>
                    <p className="text-[#D88B9B] font-medium">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Phone size={24} className="text-[#613C45]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#613C45] mb-2 text-lg">Contato</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#D88B9B] transition-colors"
                  >
                    (33) 99971-1500
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Instagram size={24} className="text-[#613C45]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#613C45] mb-2 text-lg">Redes Sociais</h3>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#D88B9B] transition-colors"
                  >
                    @dramarcelalaender
                  </a>
                </div>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#613C45] text-white px-8 py-4 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
            >
              Agende Sua Consulta Agora
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-full">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
