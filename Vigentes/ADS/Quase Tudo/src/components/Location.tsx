import { MapPin, Clock, Phone, Navigation, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <MapPin width={20} height={20} className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Localização</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visite Nossa <span className="text-[rgb(212,171,85)]">Loja</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha conhecer pessoalmente nossa variedade de produtos
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.9072728782603!2d-49.285509724850755!3d-16.681522984090222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1554f800019%3A0x7519c45b69bac73a!2sQuase%20Tudo!5e0!3m2!1spt-BR!2sbr!4v1770138717414!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[500px]"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[rgb(212,171,85)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(212,171,85)]/10 p-4 rounded-xl">
                  <MapPin width={28} height={28} className="text-[rgb(212,171,85)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Av. Castelo Branco, n° 1532 - Coimbra
                    <br />
                    Goiânia - GO, 74530-010
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//Quase+Tudo,+Av.+Castelo+Branco,+Coimbra,+Goi%C3%A2nia+-+GO/@-16.681523,-49.2855097,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[rgb(45,45,45)] hover:text-[rgb(212,171,85)] font-semibold transition-colors duration-300"
                  >
                    <Navigation width={18} height={18} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[rgb(45,45,45)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(45,45,45)]/10 p-4 rounded-xl">
                  <Clock width={28} height={28} className="text-[rgb(45,45,45)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between">
                      <span className="font-medium">Segunda a Sexta:</span>
                      <span>09:00 às 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Sábado:</span>
                      <span>08:30 às 12:30</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Domingo:</span>
                      <span className="text-[rgb(226,31,22)]">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[rgb(226,31,22)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(226,31,22)]/10 p-4 rounded-xl">
                  <Phone width={28} height={28} className="text-[rgb(226,31,22)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contato</h3>
                  <div className="space-y-3">
                    <a
                      href="http://wa.me/556293252626"
                      className="flex items-center space-x-2 text-gray-700 hover:text-[rgb(212,171,85)] transition-colors duration-300"
                    >
                      <Phone width={18} height={18} />
                      <span>(62) 9 9325-2626</span>
                    </a>
                    <a
                      href="mailto:quasetudogo@gmail.com"
                      className="flex items-center space-x-2 text-gray-700 hover:text-[rgb(212,171,85)] transition-colors duration-300"
                    >
                      <Mail width={18} height={18} />
                      <span>quasetudogo@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(45,45,45)] to-[rgb(45,45,45)]/90 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Atendemos toda a região</h3>
              <p className="text-gray-200 leading-relaxed">
                Goiânia, Senador Canedo, Aparecida de Goiânia, Anápolis, Jataí, Rio Verde, Itumbiara e outras cidades de Goiás e Tocantins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
