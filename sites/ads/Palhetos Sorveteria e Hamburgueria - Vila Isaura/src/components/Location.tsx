import { MapPin, Phone, Instagram, Clock, Navigation } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556299822672';
const MAPS = 'https://www.google.com/maps/place/Palhettos+Sorveteria+e+Hamburgueria+-+Vila+Isaura/@-16.661211121874047,-49.28412626242476,17z';
const INSTAGRAM = 'https://www.instagram.com/Palhettosvilaisaura';
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.169338345154!2d-49.28412626242476!3d-16.661211121874047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3aa981e6771%3A0x28122d7241830ee3!2sPalhettos%20Sorveteria%20e%20Hamburgueria%20-%20Vila%20Isaura!5e0!3m2!1spt-BR!2sbr!4v1767705709315!5m2!1spt-BR!2sbr';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6">
            <span className="text-[rgb(255,204,26)] font-semibold text-sm">LOCALIZAÇÃO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(35,31,32)] mb-6">
            Venha nos Visitar
            <span className="text-[rgb(255,204,26)] block mt-2">na Vila Isaura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos esperando por você! Visite nossa loja e experimente nossos produtos artesanais em um ambiente acolhedor.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(255,204,26)] p-4 rounded-xl">
                  <MapPin size={28} className="text-[rgb(35,31,32)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(35,31,32)] mb-2">Endereço</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-1">R. Sen. Jaime, 1920 - Sala 1</p>
                  <p className="text-gray-600 mb-4">Vila Isaura, Goiânia - GO, 74553-380</p>
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(255,204,26)] font-semibold hover:text-yellow-600 transition-colors"
                  >
                    Ver no Mapa
                    <Navigation size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(255,204,26)] p-4 rounded-xl">
                  <Phone size={28} className="text-[rgb(35,31,32)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(35,31,32)] mb-2">WhatsApp</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-1">(62) 99822-672</p>
                  <p className="text-gray-600 mb-4">Atendimento rápido e personalizado</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(255,204,26)] font-semibold hover:text-yellow-600 transition-colors"
                  >
                    Enviar Mensagem
                    <Navigation size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(255,204,26)] p-4 rounded-xl">
                  <Instagram size={28} className="text-[rgb(35,31,32)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(35,31,32)] mb-2">Instagram</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-1">@Palhettosvilaisaura</p>
                  <p className="text-gray-600 mb-4">Acompanhe nossas novidades</p>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(255,204,26)] font-semibold hover:text-yellow-600 transition-colors"
                  >
                    Seguir Agora
                    <Navigation size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(35,31,32)] to-[rgb(35,31,32)]/90 p-8 rounded-2xl text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(255,204,26)] p-4 rounded-xl">
                  <Clock size={28} className="text-[rgb(35,31,32)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Segunda a Sábado:</span>
                      <span className="font-semibold text-[rgb(255,204,26)]">10h - 22h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-semibold text-[rgb(255,204,26)]">14h - 22h</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">* Horários podem variar em feriados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[rgb(255,204,26)]">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Palhettos Sorveteria e Hamburgueria"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-[rgb(255,204,26)]/10 rounded-xl p-4 text-center border border-[rgb(255,204,26)]/30">
                <div className="text-2xl font-bold text-[rgb(35,31,32)] mb-1">3</div>
                <p className="text-sm text-gray-600">Lojas</p>
              </div>
              <div className="bg-[rgb(255,204,26)]/10 rounded-xl p-4 text-center border border-[rgb(255,204,26)]/30">
                <div className="text-2xl font-bold text-[rgb(35,31,32)] mb-1">12</div>
                <p className="text-sm text-gray-600">Anos</p>
              </div>
              <div className="bg-[rgb(255,204,26)]/10 rounded-xl p-4 text-center border border-[rgb(255,204,26)]/30">
                <div className="text-2xl font-bold text-[rgb(35,31,32)] mb-1">5★</div>
                <p className="text-sm text-gray-600">Avaliação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
