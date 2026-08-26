import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fale com Nossas Consultoras
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Seu nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="João Silva"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#234783] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="joao@exemplo.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#234783] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Seu telefone (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(67) 99999-9999"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#234783] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Como podemos ajudar?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Conte-nos sobre sua necessidade..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#234783] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#234783] hover:bg-[#1a3461] text-white px-6 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin
                className="lucide lucide-map-pin text-[#234783] flex-shrink-0"
                width={24}
                height={24}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Faça uma Visita</h3>
                <p className="text-gray-600">
                  Rua Dr. Mário Gonçalves, nº 84
                  <br />
                  Bairro Chácara Cachoeira 2
                  <br />
                  CEP 79040-861
                  <br />
                  Campo Grande - MS
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone
                className="lucide lucide-phone text-[#234783] flex-shrink-0"
                width={24}
                height={24}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Entre em Contato</h3>
                <a
                  href="tel:6733052146"
                  className="text-gray-600 hover:text-[#234783] transition-colors"
                >
                  (67) 3305-2146
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock
                className="lucide lucide-clock text-[#234783] flex-shrink-0"
                width={24}
                height={24}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Horário de Funcionamento
                </h3>
                <p className="text-gray-600">
                  Segunda a Sexta-feira
                  <br />
                  08:00 - 17:00
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/contixcontabilidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-[#234783] text-gray-700 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="lucide lucide-instagram " width={24} height={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/19UnNAvtWv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-[#234783] text-gray-700 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="lucide lucide-facebook " width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
