import { MapPin, Clock, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL = 'http://wa.me/5565981321662';
const MAPS_URL =
  'https://www.google.com/maps/place/RESTAURANTE+CHOPP%C3%83O+E+DELIVERY+%22Desde+1974%22';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Visite-nos</h2>
          <div className="w-24 h-1 bg-[rgb(71,136,84)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para recebê-lo todos os dias da semana
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[rgb(71,136,84)] to-[rgb(61,126,74)] rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/20 rounded-full p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Endereço</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Praça 8 de Abril, 44 - Goiabeiras
                    <br />
                    Cuiabá - MT, 78045-480
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-white font-semibold hover:underline"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[rgb(71,136,84)]/10 rounded-full p-3">
                  <Clock className="w-6 h-6 text-[rgb(71,136,84)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Segunda a Domingo</span>
                      <span className="text-[rgb(71,136,84)] font-bold">11:00 - 00:00</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Aberto todos os dias da semana para seu conforto
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="tel:6536235005"
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[rgb(71,136,84)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[rgb(71,136,84)]/10 rounded-full p-3 group-hover:bg-[rgb(71,136,84)] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[rgb(71,136,84)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Ligue para</p>
                    <p className="text-gray-900 font-bold">(65) 3623-5005</p>
                  </div>
                </div>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[rgb(71,136,84)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[rgb(71,136,84)]/10 rounded-full p-3 group-hover:bg-[rgb(71,136,84)] transition-colors duration-300">
                    <WhatsAppIcon className="w-6 h-6 text-[rgb(71,136,84)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">WhatsApp</p>
                    <p className="text-gray-900 font-bold">(65) 98132-1662</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.018425526068!2d-56.10892732487411!3d-15.590664385021693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db185a4794b97%3A0x1c79e1868eacc036!2sRESTAURANTE%20CHOPP%C3%83O%20E%20DELIVERY%20%22Desde%201974%22!5e0!3m2!1spt-BR!2sbr!4v1769176074060!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização CHOPPÃO"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comer Fora de Hora em Cuiabá?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            O CHOPPÃO é o bar e restaurante mais antigo de Cuiabá, perfeito para aqueles momentos em
            que a fome chega tarde. Estamos abertos até meia-noite todos os dias!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(71,136,84)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(61,126,74)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Peça Agora pelo WhatsApp
            </a>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Peça pelo App de Delivery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
