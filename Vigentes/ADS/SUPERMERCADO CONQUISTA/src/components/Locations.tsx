import { MapPin, Clock, Navigation } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Nossas Lojas</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Visite Uma de <span className="text-[rgb(221,40,45)]">Nossas Unidades</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temos duas lojas em Indiara para melhor atender você. Venha nos visitar!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="relative h-[300px] overflow-hidden group shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30497.967775191348!2d-50.00489093343002!3d-17.15824185616108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935fd500701bfacd%3A0x4939b9b10a02de38!2sSupermercado%20Conquista!5e0!3m2!1spt-BR!2sbr!4v1768846679705!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Loja 1"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(221,40,45)] p-3 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Loja 1</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Endereço:</strong> R. Urano, 2 - Indiara, GO
                </p>
                <p className="text-gray-700">
                  <strong>CEP:</strong> 75955-000
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[rgb(255,204,0)]/10 rounded-xl mb-6">
                <Clock size={20} className="text-[rgb(221,40,45)]" />
                <div>
                  <p className="text-sm text-gray-600">Horário de Funcionamento</p>
                  <p className="font-bold text-gray-900">Segunda a Domingo: 06:00 - 21:00</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//R.+Urano,+2+-+Indiara,+GO,+75955-000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[rgb(221,40,45)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[rgb(200,30,35)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto"
              >
                <Navigation size={20} />
                Como Chegar
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="relative h-[300px] overflow-hidden group shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.6006438955237!2d-49.9895007!3d-17.140968799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935fd512ec62e4d5%3A0x400dd99b6819f28e!2sSupermercado%20Conquista!5e0!3m2!1spt-BR!2sbr!4v1768846689816!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Loja 2"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(221,40,45)] p-3 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Loja 2</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Endereço:</strong> Esquina com Rua Saturno, Av. das Palmeiras, SN
                </p>
                <p className="text-gray-700">
                  <strong>Bairro:</strong> Loteamento Vale do Sol
                </p>
                <p className="text-gray-700">
                  <strong>Cidade:</strong> Indiara - GO
                </p>
                <p className="text-gray-700">
                  <strong>CEP:</strong> 75955-000
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[rgb(255,204,0)]/10 rounded-xl mb-6">
                <Clock size={20} className="text-[rgb(221,40,45)]" />
                <div>
                  <p className="text-sm text-gray-600">Horário de Funcionamento</p>
                  <p className="font-bold text-gray-900">Segunda a Domingo: 06:00 - 21:00</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//Av.+das+Palmeiras,+SN+-+Loteamento+Vale+do+Sol,+Indiara+-+GO,+75955-000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[rgb(221,40,45)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[rgb(200,30,35)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto"
              >
                <Navigation size={20} />
                Como Chegar
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[rgb(221,40,45)] to-[rgb(200,30,35)] rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Visite-nos Hoje Mesmo!</h3>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Estamos prontos para receber você e sua família com os melhores produtos e atendimento de Indiara
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/556481322676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(255,204,0)] text-[rgb(221,40,45)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
            >
              Fale no WhatsApp
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(221,40,45)] transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
